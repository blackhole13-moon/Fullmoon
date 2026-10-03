/* Final WEB visual consistency layer. Loaded after the legacy/runtime theme. */
export const WEB_FINAL_POLISH = String.raw`
html[data-platform="web"] .employee360-page-content,
html[data-platform="web"] .feedback-page,
html[data-platform="web"] .announcements-page,
html[data-platform="web"] .reports-page-content,
html[data-platform="web"] .reports-subpage,
html[data-platform="web"] .id-card-page {
  min-width:0;
}

/* ---------- ID CARD: controls are not a card; preview remains the only card ---------- */
html[data-platform="web"] .id-card-page .id-card-designer,
html[data-platform="web"] .id-card-page .id-card-list {
  background:transparent !important;
  border:0 !important;
  border-radius:0 !important;
  box-shadow:none !important;
  padding:0 !important;
  backdrop-filter:none !important;
  -webkit-backdrop-filter:none !important;
}
html[data-platform="web"] .id-card-page .id-card-designer {
  margin:0 !important;
}
html[data-platform="web"] .id-card-page .id-card-designer-head {
  display:flex !important;
  gap:14px !important;
  align-items:flex-start !important;
  justify-content:space-between !important;
  padding:2px 2px 12px !important;
  border-bottom:1px solid rgba(145,177,217,.15) !important;
}
html[data-platform="web"] .id-card-page .id-card-designer-head b { font-size:15px !important; color:#f7fbff !important; }
html[data-platform="web"] .id-card-page .id-card-designer-head small { display:block !important; max-width:760px !important; color:#93a7bf !important; line-height:1.55 !important; }
html[data-platform="web"] .id-card-page .id-card-designer-grid {
  display:grid !important;
  grid-template-columns:repeat(2,minmax(0,1fr)) !important;
  gap:12px !important;
  padding:12px 0 6px !important;
}
html[data-platform="web"] .id-card-page .id-card-designer-grid > label { min-width:0 !important; }
html[data-platform="web"] .id-card-page .id-card-designer-grid > label span { color:#d9e5f3 !important; font-size:10px !important; font-weight:780 !important; margin-bottom:5px !important; }
html[data-platform="web"] .id-card-page .id-card-designer-toggles { align-self:stretch !important; min-height:40px !important; padding-top:2px !important; }
html[data-platform="web"] .id-card-page .id-card-theme-pills { display:flex !important; flex-wrap:wrap !important; gap:6px !important; padding:2px 0 8px !important; }
html[data-platform="web"] .id-card-page .id-card-design-meta { display:flex !important; gap:16px !important; flex-wrap:wrap !important; padding:3px 0 12px !important; color:#8ea3bc !important; font-size:8px !important; }

html[data-platform="web"] .id-card-page .id-card-toolbar {
  display:grid !important;
  grid-template-columns:minmax(180px,1fr) minmax(180px,1fr) auto auto !important;
  gap:8px !important;
  align-items:center !important;
  margin:0 0 12px !important;
}
html[data-platform="web"] .id-card-page .id-card-toolbar input,
html[data-platform="web"] .id-card-page .id-card-toolbar select {
  width:100% !important;
  min-width:0 !important;
  min-height:40px !important;
  background:rgba(7,18,35,.76) !important;
  border:1px solid var(--web-border) !important;
  color:#eef6ff !important;
}
html[data-platform="web"] .id-card-page .id-card-orientation-switch,
html[data-platform="web"] .id-card-page .side-switch { min-width:0 !important; }
html[data-platform="web"] .id-card-page .id-card-orientation-switch { display:flex !important; }
html[data-platform="web"] .id-card-page .id-card-orientation-switch button,
html[data-platform="web"] .id-card-page .side-switch button { min-height:40px !important; white-space:nowrap !important; }

html[data-platform="web"] .id-card-page .id-card-layout {
  display:grid !important;
  grid-template-columns:minmax(0,1fr) minmax(240px,300px) !important;
  gap:14px !important;
  align-items:start !important;
}
html[data-platform="web"] .id-card-page .id-card-pratinjau-panel {
  min-width:0 !important;
  overflow:hidden !important;
  padding:12px !important;
}
html[data-platform="web"] .id-card-page .id-card-pratinjau {
  width:min(100%,856px) !important;
  max-width:856px !important;
  min-width:0 !important;
  height:auto !important;
  margin:0 auto !important;
  aspect-ratio:856/540 !important;
}
html[data-platform="web"] .id-card-page .id-card-pratinjau svg,
html[data-platform="web"] .id-card-page .id-card-pratinjau > svg { width:100% !important; max-width:100% !important; height:auto !important; display:block !important; }
html[data-platform="web"] .id-card-page .id-card-list { min-width:0 !important; overflow:visible !important; }
html[data-platform="web"] .id-card-page .id-list-head { padding:0 0 7px !important; margin:0 0 4px !important; border-bottom:1px solid rgba(145,177,217,.14) !important; }
html[data-platform="web"] .id-card-page .id-employee-row { padding:9px 0 !important; border-top:1px solid rgba(145,177,217,.10) !important; }

/* ---------- Employee 360: one employee card + KPI units; overview groups sit on page background ---------- */
html[data-platform="web"] .employee360-page-content { display:grid !important; gap:12px !important; }
html[data-platform="web"] .employee360-page-content .page-heading { margin-bottom:0 !important; }
html[data-platform="web"] .employee360-page-content .employee-hero { margin:0 !important; }
html[data-platform="web"] .employee360-kpis { display:grid !important; grid-template-columns:repeat(5,minmax(0,1fr)) !important; gap:8px !important; }
html[data-platform="web"] .employee360-stat { min-width:0 !important; }
html[data-platform="web"] .employee360-tabs { margin:0 !important; }
html[data-platform="web"] .employee360-overview {
  display:grid !important;
  grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr) !important;
  gap:24px !important;
  padding:6px 2px !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .employee360-info-group { min-width:0 !important; padding:6px 0 10px !important; }
html[data-platform="web"] .employee360-section-head { margin-bottom:10px !important; }
html[data-platform="web"] .employee360-section-head h3 { margin:4px 0 0 !important; color:#f6fbff !important; font-size:14px !important; }
html[data-platform="web"] .employee360-profile-grid { margin:0 !important; display:grid !important; grid-template-columns:repeat(2,minmax(0,1fr)) !important; gap:0 !important; }
html[data-platform="web"] .employee360-profile-grid > div { padding:9px 0 !important; border-bottom:1px solid rgba(145,177,217,.12) !important; min-width:0 !important; }
html[data-platform="web"] .employee360-profile-grid dt { color:#7f94ad !important; font-size:8px !important; text-transform:uppercase !important; letter-spacing:.06em !important; }
html[data-platform="web"] .employee360-profile-grid dd { margin:3px 0 0 !important; color:#e7f0fa !important; font-size:11px !important; font-weight:650 !important; overflow:hidden !important; text-overflow:ellipsis !important; white-space:nowrap !important; }
html[data-platform="web"] .employee360-subsection-head { margin:14px 0 7px !important; color:#cbd9e9 !important; font-size:9px !important; font-weight:800 !important; text-transform:uppercase !important; letter-spacing:.06em !important; }
html[data-platform="web"] .employee360-history-list { display:grid !important; gap:0 !important; }
html[data-platform="web"] .employee360-history-row { display:grid !important; grid-template-columns:minmax(0,1fr) auto auto !important; gap:8px !important; padding:8px 0 !important; border-bottom:1px solid rgba(145,177,217,.11) !important; }
html[data-platform="web"] .employee360-history-row b { font-size:9px !important; color:#e6eef8 !important; }
html[data-platform="web"] .employee360-history-row span,html[data-platform="web"] .employee360-history-row small { color:#8ca0b8 !important; font-size:8px !important; }
html[data-platform="web"] .employee360-table-surface { margin:0 !important; min-width:0 !important; overflow:hidden !important; }
html[data-platform="web"] .employee360-empty-state { padding:36px 0 !important; text-align:center !important; color:#8da2b9 !important; }

/* ---------- Feedback: table surface is the unit; filters are page controls, not a card ---------- */
html[data-platform="web"] .feedback-page .feedback-module { display:grid !important; gap:12px !important; }
html[data-platform="web"] .feedback-page .feedback-list-surface { min-width:0 !important; }
html[data-platform="web"] .feedback-page .feedback-card-title { margin-bottom:12px !important; }
html[data-platform="web"] .feedback-page .feedback-filter-bar {
  display:grid !important;
  grid-template-columns:minmax(220px,1fr) 150px 150px !important;
  gap:8px !important;
  margin:0 0 12px !important;
}
html[data-platform="web"] .feedback-page .feedback-list-surface > :not(.feedback-filter-bar):not(.feedback-card-title) { min-width:0 !important; }
html[data-platform="web"] .feedback-page .feedback-list-surface .data-table { width:100% !important; }
html[data-platform="web"] .feedback-page .feedback-detail-card { margin:0 !important; }
html[data-platform="web"] .feedback-message { padding:12px 0 !important; margin:8px 0 !important; color:#dbe7f4 !important; border-top:1px solid rgba(145,177,217,.12) !important; border-bottom:1px solid rgba(145,177,217,.12) !important; background:transparent !important; }

/* ---------- Feedback inbox feature ---------- */
html[data-platform="web"] .feedback-inbox-page { display:grid !important; gap:14px !important; }
html[data-platform="web"] .feedback-inbox-head { padding:2px 0 4px !important; }
html[data-platform="web"] .feedback-inbox-head h2 { margin:0 0 4px !important; color:#f8fbff !important; }
html[data-platform="web"] .feedback-inbox-head p { margin:0 !important; color:#8fa5bd !important; }
html[data-platform="web"] .feedback-case-list { display:grid !important; gap:9px !important; }
html[data-platform="web"] .feedback-case { padding:14px !important; border:1px solid var(--web-border) !important; border-radius:14px !important; background:linear-gradient(145deg,rgba(8,21,39,.90),rgba(4,12,24,.94)) !important; box-shadow:0 12px 32px rgba(0,0,0,.20) !important; }
html[data-platform="web"] .feedback-case h3 { margin:0 0 5px !important; color:#f3f8fd !important; font-size:13px !important; }
html[data-platform="web"] .feedback-case p { margin:0 0 8px !important; color:#bcc9d9 !important; line-height:1.55 !important; }
html[data-platform="web"] .feedback-case > small { display:block !important; color:#849bb3 !important; font-size:8px !important; }
html[data-platform="web"] .feedback-case-actions { display:flex !important; align-items:end !important; flex-wrap:wrap !important; gap:9px !important; margin-top:10px !important; }
html[data-platform="web"] .feedback-case-actions label { min-width:170px !important; }

/* ---------- Announcements: page-level heading + two functional surfaces ---------- */
html[data-platform="web"] .announcement-page-shell { display:grid !important; gap:12px !important; }
html[data-platform="web"] .announcement-page-shell .announcement-hero { background:transparent !important; border:0 !important; box-shadow:none !important; padding:2px 0 4px !important; }
html[data-platform="web"] .announcement-page-shell .announcement-hero-icon { background:rgba(255,255,255,.04) !important; }
html[data-platform="web"] .announcement-page-shell .announcement-compose-surface,
html[data-platform="web"] .announcement-page-shell .announcement-list-surface {
  color:#eef5ff !important;
  border:1px solid var(--web-border) !important;
  border-radius:16px !important;
  background:linear-gradient(145deg,rgba(8,20,38,.88),rgba(3,11,22,.94)) !important;
  box-shadow:var(--web-shadow) !important;
  padding:14px !important;
}
html[data-platform="web"] .announcement-page-shell .announcement-compose-surface { display:grid !important; gap:10px !important; }
html[data-platform="web"] .announcement-page-shell .announcement-form-grid { display:grid !important; grid-template-columns:minmax(0,1fr) minmax(180px,220px) !important; gap:10px !important; }
html[data-platform="web"] .announcement-page-shell .announcement-field-wide { grid-column:1 / -1 !important; }
html[data-platform="web"] .announcement-page-shell .announcement-field span { color:#cbd9ea !important; font-size:9px !important; font-weight:800 !important; }
html[data-platform="web"] .announcement-page-shell .announcement-field input,
html[data-platform="web"] .announcement-page-shell .announcement-field select,
html[data-platform="web"] .announcement-page-shell .announcement-field textarea { width:100% !important; min-width:0 !important; color:#edf5ff !important; background:rgba(255,255,255,.03) !important; border:1px solid rgba(145,177,217,.20) !important; }
html[data-platform="web"] .announcement-page-shell .announcement-field textarea { min-height:160px !important; resize:vertical !important; }
html[data-platform="web"] .announcement-page-shell .announcement-compose-footer { display:flex !important; align-items:center !important; justify-content:space-between !important; gap:10px !important; padding-top:2px !important; }
html[data-platform="web"] .announcement-page-shell .announcement-list-surface { display:grid !important; gap:9px !important; }
html[data-platform="web"] .announcement-page-shell .announcement-list { display:grid !important; gap:8px !important; }
html[data-platform="web"] .announcement-page-shell .announcement-item { margin:0 !important; }

/* ---------- Reports + all report-submenu pages ---------- */
html[data-platform="web"] .reports-page-content { display:grid !important; gap:12px !important; }
html[data-platform="web"] .reports-nav { margin:0 !important; background:transparent !important; border:0 !important; padding:0 !important; }
html[data-platform="web"] .reports-nav button { border:1px solid rgba(145,177,217,.15) !important; background:rgba(7,18,35,.52) !important; }
html[data-platform="web"] .reports-card-grid { display:grid !important; grid-template-columns:repeat(3,minmax(0,1fr)) !important; gap:10px !important; }
html[data-platform="web"] .reports-single-card { min-width:0 !important; }
html[data-platform="web"] .report-card {
  min-width:0 !important;
  min-height:152px !important;
  display:grid !important;
  grid-template-columns:40px minmax(0,1fr) auto !important;
  align-items:start !important;
  gap:12px !important;
  padding:14px !important;
}
html[data-platform="web"] .report-card-icon { width:40px !important; height:40px !important; display:grid !important; place-items:center !important; border-radius:12px !important; color:var(--web-accent) !important; background:rgba(255,255,255,.045) !important; border:1px solid var(--web-border) !important; }
html[data-platform="web"] .report-card-copy { min-width:0 !important; }
html[data-platform="web"] .report-card-copy > span { color:#8197af !important; font-size:7px !important; text-transform:uppercase !important; letter-spacing:.10em !important; }
html[data-platform="web"] .report-card-copy h3 { margin:4px 0 2px !important; color:#eef6ff !important; font-size:13px !important; }
html[data-platform="web"] .report-card-copy strong { display:block !important; color:#fff !important; font-size:24px !important; line-height:1 !important; }
html[data-platform="web"] .report-card-copy p { margin:4px 0 0 !important; color:#899db5 !important; font-size:8px !important; }
html[data-platform="web"] .report-card-action { align-self:end !important; }
html[data-platform="web"] .reports-subpage .panel,
html[data-platform="web"] .reports-subpage .table-panel,
html[data-platform="web"] .reports-subpage .report-card,
html[data-platform="web"] .reports-subpage .form-panel { max-width:100% !important; min-width:0 !important; }

/* ---------- Common responsive cleanup ---------- */
@media (max-width:1100px) {
  html[data-platform="web"] .employee360-kpis { grid-template-columns:repeat(3,minmax(0,1fr)) !important; }
  html[data-platform="web"] .employee360-overview { grid-template-columns:1fr !important; gap:12px !important; }
  html[data-platform="web"] .reports-card-grid { grid-template-columns:repeat(2,minmax(0,1fr)) !important; }
  html[data-platform="web"] .id-card-page .id-card-toolbar { grid-template-columns:1fr 1fr !important; }
}
@media (max-width:720px) {
  html[data-platform="web"] .employee360-kpis,
  html[data-platform="web"] .reports-card-grid { grid-template-columns:repeat(2,minmax(0,1fr)) !important; }
  html[data-platform="web"] .employee360-profile-grid { grid-template-columns:1fr !important; }
  html[data-platform="web"] .feedback-page .feedback-filter-bar { grid-template-columns:1fr !important; }
  html[data-platform="web"] .announcement-page-shell .announcement-form-grid { grid-template-columns:1fr !important; }
  html[data-platform="web"] .announcement-page-shell .announcement-field-wide { grid-column:auto !important; }
  html[data-platform="web"] .id-card-page .id-card-toolbar { grid-template-columns:1fr !important; }
  html[data-platform="web"] .id-card-page .id-card-layout { grid-template-columns:1fr !important; }
  html[data-platform="web"] .id-card-page .id-card-pratinjau-panel { padding:8px !important; }
  html[data-platform="web"] .id-card-page .id-card-orientation-switch,
  html[data-platform="web"] .id-card-page .side-switch { width:100% !important; }
  html[data-platform="web"] .id-card-page .id-card-orientation-switch button,
  html[data-platform="web"] .id-card-page .side-switch button { flex:1 1 0 !important; }
}
@media (max-width:480px) {
  html[data-platform="web"] .employee360-kpis,
  html[data-platform="web"] .reports-card-grid { grid-template-columns:1fr 1fr !important; gap:6px !important; }
  html[data-platform="web"] .employee360-stat { padding:10px !important; }
  html[data-platform="web"] .employee360-stat strong { font-size:20px !important; }
  html[data-platform="web"] .report-card { grid-template-columns:34px minmax(0,1fr) !important; min-height:132px !important; }
  html[data-platform="web"] .report-card-action { grid-column:2 !important; width:max-content !important; }
}

/* =========================================================
   FINAL WEB QA PASS — page-level hierarchy + mobile robustness
   ========================================================= */
html[data-platform="web"] .id-card-page .id-card-designer {
  display:grid !important;
  gap:12px !important;
  padding:0 !important;
  margin:0 !important;
  background:transparent !important;
  border:0 !important;
  border-radius:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .id-card-page .id-card-designer-head {
  display:flex !important;
  align-items:flex-start !important;
  justify-content:space-between !important;
  gap:12px !important;
  padding:0 !important;
  margin:0 !important;
}
html[data-platform="web"] .id-card-page .id-card-designer-grid {
  display:grid !important;
  grid-template-columns:repeat(3,minmax(0,1fr)) !important;
  gap:10px !important;
  padding:0 !important;
  margin:0 !important;
}
html[data-platform="web"] .id-card-page .id-card-designer-grid > label,
html[data-platform="web"] .id-card-page .id-card-designer-grid input,
html[data-platform="web"] .id-card-page .id-card-designer-grid select { min-width:0 !important; max-width:100% !important; }
html[data-platform="web"] .id-card-page .id-card-designer-toggles {
  display:flex !important;
  align-items:center !important;
  align-self:end !important;
  flex-wrap:wrap !important;
  gap:10px !important;
  min-width:0 !important;
}
html[data-platform="web"] .id-card-page .id-card-theme-pills {
  display:flex !important;
  flex-wrap:wrap !important;
  gap:6px !important;
  padding:0 !important;
  margin:0 !important;
}
html[data-platform="web"] .id-card-page .id-card-design-meta {
  display:flex !important;
  align-items:center !important;
  flex-wrap:wrap !important;
  gap:6px 16px !important;
  padding:0 !important;
  margin:0 !important;
}
html[data-platform="web"] .id-card-page .id-card-toolbar {
  display:grid !important;
  grid-template-columns:minmax(190px,1fr) minmax(200px,1fr) auto auto !important;
  gap:8px !important;
  padding:0 !important;
  margin:0 !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .id-card-page .id-card-list {
  min-width:0 !important;
  padding:0 !important;
  margin:0 !important;
  background:transparent !important;
  border:0 !important;
  border-radius:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .id-card-page .id-list-head {
  display:flex !important;
  align-items:flex-start !important;
  justify-content:space-between !important;
  gap:10px !important;
  padding:0 0 8px !important;
  margin:0 !important;
  border-bottom:1px solid rgba(145,177,217,.12) !important;
}
html[data-platform="web"] .id-card-page .id-list-head > div { min-width:0 !important; }
html[data-platform="web"] .id-card-page .id-employee-row {
  display:grid !important;
  grid-template-columns:20px 32px minmax(0,1fr) !important;
  align-items:center !important;
  width:100% !important;
  min-width:0 !important;
  gap:8px !important;
  padding:9px 0 !important;
  margin:0 !important;
  border-top:1px solid rgba(145,177,217,.08) !important;
}
html[data-platform="web"] .id-card-page .id-employee-row > span:last-child { min-width:0 !important; overflow:hidden !important; }
html[data-platform="web"] .id-card-page .id-employee-row b,
html[data-platform="web"] .id-card-page .id-employee-row small {
  display:block !important;
  min-width:0 !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  white-space:nowrap !important;
}
html[data-platform="web"] .id-card-page .id-card-pratinjau-panel { min-width:0 !important; overflow:visible !important; }
html[data-platform="web"] .id-card-page .id-card-pratinjau { width:100% !important; max-width:856px !important; min-width:0 !important; margin:0 auto !important; overflow:visible !important; }
html[data-platform="web"] .id-card-page .id-card-pratinjau svg { display:block !important; width:100% !important; max-width:100% !important; height:auto !important; }

html[data-platform="web"] .employee360-page .employee360-overview {
  display:grid !important;
  grid-template-columns:minmax(0,1.2fr) minmax(260px,.8fr) !important;
  gap:18px !important;
  padding:0 !important;
  margin:0 !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .employee360-page .employee360-info-group {
  min-width:0 !important;
  padding:0 !important;
  margin:0 !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .employee360-page .employee360-section-head {
  padding:0 0 8px !important;
  margin:0 0 10px !important;
  border-bottom:1px solid rgba(145,177,217,.12) !important;
}
html[data-platform="web"] .employee360-page .employee360-history-list { background:transparent !important; border:0 !important; }
html[data-platform="web"] .employee360-page .employee360-history-row { min-width:0 !important; border-bottom:1px solid rgba(145,177,217,.08) !important; }

html[data-platform="web"] .feedback-page .feedback-list-surface {
  padding:0 !important;
  margin:0 !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .feedback-page .feedback-filter-bar {
  display:grid !important;
  grid-template-columns:minmax(180px,1fr) 140px 140px !important;
  gap:8px !important;
  margin:0 0 10px !important;
}
html[data-platform="web"] .feedback-page .feedback-list-surface > .card-title {
  padding:0 !important;
  margin:0 0 10px !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .feedback-page .feedback-detail-card { margin:14px 0 0 !important; }

html[data-platform="web"] .reports-page .reports-nav,
html[data-platform="web"] .reports-subpage .reports-nav {
  padding:0 !important;
  margin:0 !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .reports-page .reports-card-grid { grid-template-columns:repeat(3,minmax(0,1fr)) !important; }
html[data-platform="web"] .reports-subpage .page-heading,
html[data-platform="web"] .reports-subpage > .page-heading {
  padding:0 !important;
  margin:0 0 8px !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .reports-subpage .panel { min-width:0 !important; }

html[data-platform="web"] .announcements-page .announcement-hero {
  padding:0 !important;
  margin:0 0 4px !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .announcements-page .announcement-compose-surface,
html[data-platform="web"] .announcements-page .announcement-list-surface { min-width:0 !important; width:100% !important; }
html[data-platform="web"] .announcements-page .announcement-item { min-width:0 !important; }
html[data-platform="web"] .announcements-page .announcement-item-main { min-width:0 !important; }
html[data-platform="web"] .announcements-page .announcement-item-title-row > strong { overflow-wrap:anywhere !important; }

@media (max-width:1100px) {
  html[data-platform="web"] .id-card-page .id-card-toolbar { grid-template-columns:1fr 1fr !important; }
  html[data-platform="web"] .id-card-page .id-card-layout { grid-template-columns:1fr !important; }
  html[data-platform="web"] .employee360-page .employee360-overview { grid-template-columns:1fr !important; }
  html[data-platform="web"] .reports-page .reports-card-grid { grid-template-columns:repeat(2,minmax(0,1fr)) !important; }
}
@media (max-width:720px) {
  html[data-platform="web"] .id-card-page .id-card-designer-grid { grid-template-columns:1fr !important; }
  html[data-platform="web"] .id-card-page .id-card-designer-head { flex-direction:column !important; }
  html[data-platform="web"] .id-card-page .id-card-toolbar { grid-template-columns:1fr !important; }
  html[data-platform="web"] .id-card-page .id-card-actions { flex-direction:column !important; }
  html[data-platform="web"] .id-card-page .id-card-actions button { width:100% !important; }
  html[data-platform="web"] .id-card-page .id-card-layout { grid-template-columns:1fr !important; }
  html[data-platform="web"] .id-card-page .id-card-list { margin-top:14px !important; }
  html[data-platform="web"] .id-card-page .id-employee-row { grid-template-columns:20px 30px minmax(0,1fr) !important; }
  html[data-platform="web"] .id-card-page .id-card-pratinjau-panel { padding:8px !important; }
  html[data-platform="web"] .feedback-page .feedback-filter-bar { grid-template-columns:1fr !important; }
  html[data-platform="web"] .reports-page .reports-card-grid { grid-template-columns:1fr !important; }
}


/* Employee announcement center — no decorative outer card; announcement items remain functional cards. */
html[data-platform="web"] .employee-announcement-center {
  display:grid !important;
  gap:12px !important;
  min-width:0 !important;
  padding:0 !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .employee-announcement-head {
  display:flex !important;
  align-items:flex-end !important;
  justify-content:space-between !important;
  gap:12px !important;
  padding:0 !important;
  margin:0 0 4px !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[data-platform="web"] .employee-announcement-list {
  display:grid !important;
  grid-template-columns:repeat(2,minmax(0,1fr)) !important;
  gap:10px !important;
  min-width:0 !important;
}
html[data-platform="web"] .employee-announcement-item {
  min-width:0 !important;
  overflow:hidden !important;
}
html[data-platform="web"] .employee-announcement-item-title { min-width:0 !important; }
html[data-platform="web"] .employee-announcement-item-title strong:last-child {
  min-width:0 !important;
  overflow-wrap:anywhere !important;
}
@media (max-width:820px) {
  html[data-platform="web"] .employee-announcement-list { grid-template-columns:1fr !important; }
}
@media (max-width:560px) {
  html[data-platform="web"] .employee-announcement-head { align-items:flex-start !important; flex-direction:column !important; }
  html[data-platform="web"] .employee-announcement-title h2 { font-size:22px !important; }
}

/* Feedback employee form is a single functional form surface; its internal labels/fields remain flat. */
html[data-platform="web"] .suggestion-box.employee-form {
  min-width:0 !important;
}
html[data-platform="web"] .suggestion-box .suggestion-header,
html[data-platform="web"] .suggestion-box .suggestion-footer { min-width:0 !important; }
html[data-platform="web"] .suggestion-box .suggestion-form-grid { min-width:0 !important; }

`;

export function installWebFinalPolish() {
  if (typeof document === 'undefined') return;
  if (document.documentElement.dataset.platform !== 'web') return;
  const id = 'project-tirta-web-final-polish-v4';
  document.getElementById('project-tirta-web-final-polish-v2')?.remove();
  document.getElementById('project-tirta-web-final-polish-v3')?.remove();
  document.getElementById(id)?.remove();
  const style = document.createElement('style');
  style.id = id;
  style.textContent = WEB_FINAL_POLISH;
  document.head.appendChild(style);
}

// Final WEB QA pass: remove residual visual shells without touching Android/iOS styles.
