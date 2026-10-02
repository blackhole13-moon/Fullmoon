import { supabase } from './supabase/client';
import type { LanguageCode } from '../locales/LanguageContext';
import type { CosmicThemeId } from '../theme/professionalTheme';

const THEME_PREFIX = 'project-tirta-theme-user:';
const LANGUAGE_PREFIX = 'project-tirta-language-user:';
const CUSTOM_THEME_PREFIX = 'project-tirta-custom-theme-user:';

const isTheme = (value: unknown): value is CosmicThemeId =>
  typeof value === 'string' &&
  ['sun', 'moon', 'galaxy', 'blackhole', 'nebula', 'aurora'].includes(value);

export type PublicAppTheme = CosmicThemeId | 'professional';

const isPublicTheme = (value: unknown): value is PublicAppTheme =>
  value === 'professional' || isTheme(value);


function safeGet(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}

function safeSet(key: string, value: string): void {
  try { localStorage.setItem(key, value); } catch { /* cache only */ }
}

export async function loadUserThemePreference(userId: string): Promise<CosmicThemeId> {
  const cached = safeGet(THEME_PREFIX + userId);
  const fallback: CosmicThemeId = isTheme(cached) ? cached : 'sun';
  try {
    const { data } = await supabase.from('hris_user_preferences').select('theme').eq('user_id', userId).maybeSingle();
    if (isTheme(data?.theme)) {
      safeSet(THEME_PREFIX + userId, data.theme);
      return data.theme;
    }
  } catch (error) {
    console.warn('Unable to load account theme preference:', error);
  }
  return fallback;
}

export async function saveUserThemePreference(userId: string, theme: CosmicThemeId): Promise<void> {
  safeSet(THEME_PREFIX + userId, theme);
  const { error } = await supabase.from('hris_user_preferences').upsert(
    { user_id: userId, theme },
    { onConflict: 'user_id' }
  );
  if (error) console.warn('Unable to save account theme preference:', error);
}

export async function saveUserLanguagePreference(userId: string, language: LanguageCode): Promise<void> {
  safeSet(LANGUAGE_PREFIX + userId, language);
  const { error } = await supabase.from('hris_user_preferences').upsert(
    { user_id: userId, language },
    { onConflict: 'user_id' }
  );
  if (error) console.warn('Unable to save account language preference:', error);
}

export function loadCustomThemeCache(userId: string): unknown {
  const raw = safeGet(CUSTOM_THEME_PREFIX + userId);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function saveCustomThemeCache(userId: string, value: unknown): void {
  try { safeSet(CUSTOM_THEME_PREFIX + userId, JSON.stringify(value)); } catch { /* cache only */ }
}


const EMPLOYEE_PORTAL_THEME_CACHE_KEY = 'project-tirta-employee-portal-theme';

const PUBLIC_THEME_CACHE_KEY = 'project-tirta-public-theme';

export async function getPublicAppTheme(): Promise<PublicAppTheme> {
  const cached = safeGet(PUBLIC_THEME_CACHE_KEY);
  const fallback: PublicAppTheme = isPublicTheme(cached) ? cached : 'professional';
  try {
    const { data, error } = await supabase.rpc('hris_get_public_app_theme');
    if (!error && isPublicTheme(data)) {
      safeSet(PUBLIC_THEME_CACHE_KEY, data);
      return data;
    }
  } catch (error) {
    console.warn('Unable to load public app theme:', error);
  }
  return fallback;
}

export async function setPublicAppTheme(theme: PublicAppTheme): Promise<boolean> {
  try {
    const { error } = await supabase.rpc('hris_set_public_app_theme', {
      p_theme: theme,
    });

    if (error) {
      console.warn('Unable to set public app theme:', error);
      return false;
    }

    safeSet(PUBLIC_THEME_CACHE_KEY, theme);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('project-tirta-public-theme-change', {
          detail: theme,
        })
      );
    }

    return true;
  } catch (error) {
    console.warn('Unable to set public app theme:', error);
    return false;
  }
}

export async function getEmployeePortalTheme(): Promise<CosmicThemeId> {
  const cached = safeGet(EMPLOYEE_PORTAL_THEME_CACHE_KEY);
  const fallback: CosmicThemeId = isTheme(cached) ? cached : 'sun';

  try {
    const { data, error } = await supabase.rpc('hris_get_employee_portal_theme');

    if (!error && isTheme(data)) {
      safeSet(EMPLOYEE_PORTAL_THEME_CACHE_KEY, data);
      return data;
    }

    if (error) {
      console.warn('Unable to load employee portal theme:', error);
    }
  } catch (error) {
    console.warn('Unable to load employee portal theme:', error);
  }

  // Network/RPC failure must NEVER make Android jump to another theme.
  return fallback;
}

export async function setEmployeePortalTheme(theme: CosmicThemeId): Promise<boolean> {
  try {
    const { error } = await supabase.rpc('hris_set_employee_portal_theme', { p_theme: theme });

    if (error) {
      console.warn('Unable to set employee portal theme:', error);
      return false;
    }

    // Cache hanya setelah server berhasil menerima perubahan.
    safeSet(EMPLOYEE_PORTAL_THEME_CACHE_KEY, theme);

    // Membantu tab/window lain pada device yang sama
    // menerapkan tema tanpa menunggu polling berikutnya.
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('project-tirta-employee-theme-change', {
          detail: theme,
        }),
      );
    }

    return true;
  } catch (error) {
    console.warn('Unable to set employee portal theme:', error);
    return false;
  }
}
