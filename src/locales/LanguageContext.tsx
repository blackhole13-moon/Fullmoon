import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';
import { supabase } from '../lib/supabase/client';

export const SUPPORTED_LANGUAGES = [
  { code: 'id', name: 'Indonesia', nativeName: 'Indonesia' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
] as const;

export type LanguageCode = typeof SUPPORTED_LANGUAGES[number]['code'];

const DEFAULT_LANGUAGE: LanguageCode = 'id';
const ANONYMOUS_STORAGE_KEY = 'project-tirta-language-anonymous';
const USER_STORAGE_PREFIX = 'project-tirta-language-user:';

const LANGUAGE_CODES = new Set<string>(
  SUPPORTED_LANGUAGES.map(({ code }) => code)
);

export function isSupportedLanguage(value: unknown): value is LanguageCode {
  return typeof value === 'string' && LANGUAGE_CODES.has(value);
}

type LangContextType = {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => Promise<void>;
  t: (key: string) => string;
};

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<LanguageCode>(DEFAULT_LANGUAGE);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const loadForUser = async (nextUserId: string | null) => {
      setUserId(nextUserId);

      if (!nextUserId) {
        try {
          const saved = localStorage.getItem(ANONYMOUS_STORAGE_KEY);
          setLangState(isSupportedLanguage(saved) ? saved : DEFAULT_LANGUAGE);
        } catch {
          setLangState(DEFAULT_LANGUAGE);
        }
        return;
      }

      try {
        const cached = localStorage.getItem(USER_STORAGE_PREFIX + nextUserId);
        if (isSupportedLanguage(cached)) setLangState(cached);
      } catch {
        // Cache is optional; Supabase remains the source of truth.
      }

      const { data, error } = await supabase
        .from('hris_user_preferences')
        .select('language')
        .eq('user_id', nextUserId)
        .maybeSingle();

      if (!active) return;

      if (!error && isSupportedLanguage(data?.language)) {
        setLangState(data.language);
        try {
          localStorage.setItem(USER_STORAGE_PREFIX + nextUserId, data.language);
        } catch {
          // Cache is optional.
        }
      }
    };

    const bootstrap = async () => {
      const { data } = await supabase.auth.getSession();
      if (active) await loadForUser(data.session?.user?.id ?? null);
    };

    void bootstrap();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      window.setTimeout(() => {
        if (active) void loadForUser(session?.user?.id ?? null);
      }, 0);
    });

    return () => {
      active = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  const setLang = async (newLang: LanguageCode) => {
    if (!isSupportedLanguage(newLang)) return;

    setLangState(newLang);

    try {
      if (userId) {
        localStorage.setItem(USER_STORAGE_PREFIX + userId, newLang);
        const { error } = await supabase
          .from('hris_user_preferences')
          .upsert({ user_id: userId, language: newLang }, { onConflict: 'user_id' });

        if (error) console.warn('Unable to persist account language preference:', error);
      } else {
        localStorage.setItem(ANONYMOUS_STORAGE_KEY, newLang);
      }
    } catch (error) {
      console.warn('Unable to persist language preference:', error);
    }
  };

  const t = (key: string) => {
    return translations[lang]?.[key]
      ?? translations[DEFAULT_LANGUAGE]?.[key]
      ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useTranslation() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }

  return context;
}
