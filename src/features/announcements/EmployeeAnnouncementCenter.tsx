import type { Announcement } from './types';
import { useTranslation } from '../../locales/LanguageContext';

const categoryKeys: Record<Announcement['category'], string> = {
  general: 'announcement_general',
  hr: 'announcement_hr',
  attendance: 'announcement_attendance',
  holiday: 'announcement_holiday',
  important: 'announcement_important',
  urgent: 'announcement_urgent',
};
const priorityKeys: Record<Announcement['priority'], string> = {
  normal: 'announcement_normal',
  important: 'announcement_important',
  urgent: 'announcement_urgent',
};

export default function EmployeeAnnouncementCenter({
  announcements,
  onRead,
}: {
  announcements: Announcement[];
  onRead?: (id: string) => void;
}) {
  const { t } = useTranslation();
  const unread = announcements.filter(a => !a.isRead).length;

  return (
    <section className="employee-announcement-center" aria-label={t('announcement_center')}>
      <header className="employee-announcement-head">
        <div className="employee-announcement-title"><span className="card-kicker">{t('announcement_center')}</span><h2>📢 {t('announcements')}</h2></div>
        <p>{unread > 0 ? t('announcement_unread').replace('{count}', String(unread)) : t('announcement_all_read')}</p>
      </header>
      {announcements.length === 0 ? <p>{t('announcement_none')}</p> : (
        <div className="employee-announcement-list">
          {announcements.map((a) => (
            <article className={`employee-announcement-item ${a.isRead ? 'is-read' : 'is-unread'}`} key={a.id} aria-label={a.title}>
              <div className="employee-announcement-item-title">
                {a.pinned && <strong>📌 {t('announcement_pinned')} </strong>}
                <strong>{a.title}</strong>
              </div>
              <small className="employee-announcement-meta">
                {t(categoryKeys[a.category])} · {t(priorityKeys[a.priority])} · {a.publishedAt || ''}
              </small>
              <p className="employee-announcement-body">{a.body}</p>
              <button className="employee-announcement-read" type="button" disabled={!!a.isRead} onClick={() => onRead?.(a.id)}>
                {a.isRead ? t('announcement_already_read') : t('announcement_mark_read')}
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
