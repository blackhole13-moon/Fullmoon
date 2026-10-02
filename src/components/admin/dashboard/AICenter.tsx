import { useMemo, useState, type FormEvent } from 'react';
import { supabase } from '../../../lib/supabase/client';
import { hasPermission } from '../../../lib/security';
import { useTranslation } from '../../../locales/LanguageContext';

type AICenterProps = {
  dbPerms: string[];
  userRole: string;
};

type Message = { role: 'user' | 'assistant'; text: string; model?: string };

type ModuleKey = 'assistant' | 'analytics' | 'reports' | 'feedback' | 'recruitment' | 'attendance' | 'turnover' | 'payroll' | 'people';

const MODULE_PERMISSION: Record<ModuleKey, string> = {
  assistant: 'ai_hr_center',
  analytics: 'ai_hr_analytics',
  reports: 'ai_hr_reports',
  feedback: 'ai_hr_feedback',
  recruitment: 'ai_hr_recruitment',
  attendance: 'ai_hr_analytics',
  turnover: 'ai_hr_analytics',
  payroll: 'ai_hr_payroll',
  people: 'ai_hr_people',
};

const PROMPTS: Array<{ key: string; module: ModuleKey }> = [
  { key: 'ai_example_headcount', module: 'assistant' },
  { key: 'ai_example_attendance', module: 'analytics' },
  { key: 'ai_example_leave', module: 'analytics' },
  { key: 'ai_example_turnover', module: 'turnover' },
];

export default function AICenter({ dbPerms, userRole }: AICenterProps) {
  const { t } = useTranslation();
  const [module, setModule] = useState<ModuleKey>('assistant');
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [lastModel, setLastModel] = useState('');
  const [lastSnapshot, setLastSnapshot] = useState<Record<string, unknown> | null>(null);

  const modules = useMemo(() => {
    const all: Array<{ key: ModuleKey; label: string }> = [
      { key: 'assistant', label: t('ai_module_assistant') },
      { key: 'analytics', label: t('ai_module_analytics') },
      { key: 'reports', label: t('ai_module_reports') },
      { key: 'feedback', label: t('ai_module_feedback') },
      { key: 'recruitment', label: t('ai_module_recruitment') },
      { key: 'attendance', label: t('ai_module_attendance') },
      { key: 'turnover', label: t('ai_module_turnover') },
      { key: 'payroll', label: t('ai_module_payroll') },
      { key: 'people', label: t('ai_module_people') },
    ];
    return all.filter((item) => userRole === 'Super Admin' || hasPermission(dbPerms, MODULE_PERMISSION[item.key], userRole));
  }, [dbPerms, t, userRole]);

  const canUse = userRole === 'Super Admin' || hasPermission(dbPerms, 'ai_hr_center', userRole);

  async function ask(nextQuestion = question, nextModule = module) {
    const cleaned = nextQuestion.trim();
    if (!cleaned || busy) return;
    if (!canUse) {
      setError(t('ai_no_permission'));
      return;
    }
    setBusy(true);
    setError('');
    setQuestion('');
    setMessages((prev) => [...prev, { role: 'user', text: cleaned }]);

    try {
        const { data, error: invokeError } = await supabase.functions.invoke('ai-hr-center', {
          body: {
            action: 'assistant',
            module: nextModule,
            question: cleaned,
          },
        });
        if (invokeError) {
          const detail = (invokeError as any)?.context?.error || invokeError.message || 'AI request failed.';
          throw new Error(String(detail));
        }
        if (!data?.ok) throw new Error(data?.error || t('ai_service_error'));
        const answer = String(data.answer || '').trim() || t('ai_empty');
        const modelLabel = data.provider_unavailable ? 'Fallback data' : String(data.model || '');
        setLastModel(modelLabel);
        setLastSnapshot((data.snapshot || null) as Record<string, unknown> | null);
        setMessages((prev) => [...prev, { role: 'assistant', text: answer, model: modelLabel }]);
        if (data.provider_unavailable) {
          setError(String(data.warning || 'Layanan AI eksternal sedang tidak tersedia. Jawaban ditampilkan dari data HR yang tersedia.'));
        }
    } catch (e) {
      const message = e instanceof DOMException && e.name === 'AbortError'
        ? t('ai_timeout')
        : e instanceof Error ? e.message : t('ai_service_error');
      setError(message);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void ask();
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div className="panel" style={{ padding: 20 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '.08em', opacity: .7 }}>AI HR CENTER</div>
            <h1 style={{ margin: '6px 0 6px', fontSize: 25 }}>🤖 {t('ai_hr_center')}</h1>
            <p style={{ margin: 0, opacity: .76, maxWidth: 760 }}>{t('ai_hr_center_desc')}</p>
          </div>
          <div style={{ padding: '9px 12px', border: '1px solid rgba(127,127,127,.25)', borderRadius: 12, fontSize: 12, fontWeight: 700 }}>
            {lastModel || t('ai_model_not_loaded')}
          </div>
        </div>
      </div>

      {!canUse ? (
        <div className="panel" style={{ padding: 20 }}>{t('ai_no_permission')}</div>
      ) : (
        <>
          <div className="panel" style={{ padding: 18 }}>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
              {modules.map((item) => (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => setModule(item.key)}
                  style={{
                    border: module === item.key ? '1px solid currentColor' : '1px solid rgba(127,127,127,.25)',
                    background: module === item.key ? 'rgba(127,127,127,.12)' : 'transparent',
                    borderRadius: 999,
                    padding: '8px 12px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
              {PROMPTS.map((item) => (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => { setModule(item.module); setQuestion(t(item.key)); }}
                  style={{ border: '1px solid rgba(127,127,127,.22)', background: 'transparent', borderRadius: 10, padding: '8px 10px', cursor: 'pointer', textAlign: 'left' }}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          <div className="panel" style={{ padding: 18 }}>
            <div style={{ minHeight: 220, maxHeight: 520, overflowY: 'auto', display: 'grid', gap: 12 }}>
              {messages.length === 0 ? (
                <div style={{ display: 'grid', placeItems: 'center', minHeight: 200, textAlign: 'center', opacity: .7 }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>🤖</div>
                  <strong>{t('ai_empty_state_title')}</strong>
                  <span style={{ fontSize: 13 }}>{t('ai_empty_state_desc')}</span>
                </div>
              ) : messages.map((message, index) => (
                <div key={`${message.role}-${index}`} style={{ justifySelf: message.role === 'user' ? 'end' : 'stretch', maxWidth: message.role === 'user' ? '78%' : '100%' }}>
                  <div style={{ border: '1px solid rgba(127,127,127,.18)', borderRadius: 14, padding: 13, background: message.role === 'user' ? 'rgba(127,127,127,.10)' : 'rgba(127,127,127,.045)' }}>
                    <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.04em', opacity: .6, marginBottom: 6 }}>
                      {message.role === 'user' ? 'ANDA' : 'AI HR CENTER'}
                    </div>
                    <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{message.text}</div>
                    {message.model && <div style={{ marginTop: 8, fontSize: 10, opacity: .5 }}>{message.model}</div>}
                  </div>
                </div>
              ))}
              {busy && <div style={{ padding: 14, opacity: .7 }}>{t('ai_thinking')}</div>}
            </div>

            {error && <div className="alert" style={{ marginTop: 12 }}>{error}</div>}

            <form onSubmit={onSubmit} style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr auto', gap: 10 }}>
              <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value.slice(0, 4000))}
                placeholder={t('ai_ask_placeholder')}
                rows={4}
                maxLength={4000}
                style={{ width: '100%', resize: 'vertical', borderRadius: 12, border: '1px solid rgba(127,127,127,.25)', padding: 12, background: 'transparent', color: 'inherit', boxSizing: 'border-box' }}
              />
              <button type="submit" className="primary" disabled={busy || !question.trim()} style={{ alignSelf: 'stretch', minWidth: 110 }}>
                {busy ? t('ai_thinking') : t('ai_send')}
              </button>
            </form>
            <div style={{ marginTop: 9, fontSize: 11, opacity: .58 }}>{t('ai_data_note')}</div>
          </div>

          {lastSnapshot && (
            <details className="panel" style={{ padding: 16 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 800 }}>{t('ai_data_snapshot')}</summary>
              <pre style={{ marginTop: 12, whiteSpace: 'pre-wrap', overflowX: 'auto', fontSize: 11, lineHeight: 1.5 }}>{JSON.stringify(lastSnapshot, null, 2)}</pre>
            </details>
          )}
        </>
      )}
    </div>
  );
}
