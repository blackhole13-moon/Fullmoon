const CSS = `
/* =====================================================
   PROJECT BY TIRTA — FINAL COSMIC SURFACE
   Background selalu tajam dan menggunakan aset desktop HD.
   Tidak ada surface putih pada aplikasi.
   ===================================================== */

html,
body,
#root {
  background-color: var(--pt-bg-deep, #02050a) !important;
}

/* =====================================================
   BACKGROUND COSMIC
   ===================================================== */

html[data-cosmic-theme="sun"] .talenta-shell,
html[data-cosmic-theme="sun"] .talenta-main,
html[data-cosmic-theme="sun"] .admin-page-frame,
html[data-cosmic-theme="sun"] .public-home,
html[data-cosmic-theme="sun"] .unified-login-page {
  background-image: url("/cosmic-desktop/cosmic-sun.webp") !important;
}

html[data-cosmic-theme="moon"] .talenta-shell,
html[data-cosmic-theme="moon"] .talenta-main,
html[data-cosmic-theme="moon"] .admin-page-frame,
html[data-cosmic-theme="moon"] .public-home,
html[data-cosmic-theme="moon"] .unified-login-page {
  background-image: url("/cosmic-desktop/cosmic-moon.webp") !important;
}

html[data-cosmic-theme="galaxy"] .talenta-shell,
html[data-cosmic-theme="galaxy"] .talenta-main,
html[data-cosmic-theme="galaxy"] .admin-page-frame,
html[data-cosmic-theme="galaxy"] .public-home,
html[data-cosmic-theme="galaxy"] .unified-login-page {
  background-image: url("/cosmic-desktop/cosmic-galaxy.webp") !important;
}

html[data-cosmic-theme="blackhole"] .talenta-shell,
html[data-cosmic-theme="blackhole"] .talenta-main,
html[data-cosmic-theme="blackhole"] .admin-page-frame,
html[data-cosmic-theme="blackhole"] .public-home,
html[data-cosmic-theme="blackhole"] .unified-login-page {
  background-image: url("/cosmic-desktop/cosmic-blackhole.webp") !important;
}

html[data-cosmic-theme="nebula"] .talenta-shell,
html[data-cosmic-theme="nebula"] .talenta-main,
html[data-cosmic-theme="nebula"] .admin-page-frame,
html[data-cosmic-theme="nebula"] .public-home,
html[data-cosmic-theme="nebula"] .unified-login-page {
  background-image: url("/cosmic-desktop/cosmic-nebula.webp") !important;
}

html[data-cosmic-theme="aurora"] .talenta-shell,
html[data-cosmic-theme="aurora"] .talenta-main,
html[data-cosmic-theme="aurora"] .admin-page-frame,
html[data-cosmic-theme="aurora"] .public-home,
html[data-cosmic-theme="aurora"] .unified-login-page {
  background-image: url("/aurora-background.svg") !important;
}

html[data-cosmic-theme] .talenta-shell,
html[data-cosmic-theme] .talenta-main,
html[data-cosmic-theme] .admin-page-frame,
html[data-cosmic-theme] .public-home,
html[data-cosmic-theme] .unified-login-page {
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;

  filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* Matikan layer atmosfer tambahan yang membuat kabur */
html[data-cosmic-theme] .talenta-shell::before,
html[data-cosmic-theme] .talenta-shell::after,
html[data-cosmic-theme] .employee-portal-cosmic::before,
html[data-cosmic-theme] .employee-portal-cosmic::after {
  opacity: 0 !important;
  filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  animation: none !important;
}

/* =====================================================
   DESKTOP: LANDSCAPE 4K BACKGROUND
   Mobile tetap memakai komposisi portrait.
   ===================================================== */
@media (min-width: 769px) {
  html[data-cosmic-theme="sun"] :where(.talenta-shell, .talenta-main, .admin-page-frame, .public-home, .unified-login-page) { background-image: url("/cosmic-desktop-wide/cosmic-sun.webp") !important; }
  html[data-cosmic-theme="moon"] :where(.talenta-shell, .talenta-main, .admin-page-frame, .public-home, .unified-login-page) { background-image: url("/cosmic-desktop-wide/cosmic-moon.webp") !important; }
  html[data-cosmic-theme="galaxy"] :where(.talenta-shell, .talenta-main, .admin-page-frame, .public-home, .unified-login-page) { background-image: url("/cosmic-desktop-wide/cosmic-galaxy.webp") !important; }
  html[data-cosmic-theme="blackhole"] :where(.talenta-shell, .talenta-main, .admin-page-frame, .public-home, .unified-login-page) { background-image: url("/cosmic-desktop-wide/cosmic-blackhole.webp") !important; }
  html[data-cosmic-theme="nebula"] :where(.talenta-shell, .talenta-main, .admin-page-frame, .public-home, .unified-login-page) { background-image: url("/cosmic-desktop-wide/cosmic-nebula.webp") !important; }
  html[data-cosmic-theme="aurora"] :where(.talenta-shell, .talenta-main, .admin-page-frame, .public-home, .unified-login-page) { background-image: url("/aurora-background.svg") !important; }
}

/* =====================================================
   SEMUA CARD/PANEL BESAR
   ===================================================== */

html[data-cosmic-theme] :where(
  .panel,
  .form-panel,
  .table-card,
  .detail-panel,
  .export-card,
  .setting-card,
  .theme-card,
  .report-card,
  .org-card,
  .calendar-card,
  .feature-card,
  .info-box,
  .quick,
  .portal-card,
  .custom-theme-panel,
  .table-panel,
  .dashboard-card,
  .kpi-card,
  .chart-card,
  .module-page,
  .announcement-module,
  .announcement-hero,
  .announcement-compose,
  .announcement-list-card,
  .announcement-item
) {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;

  border: 0 !important;
  border-color: transparent !important;

  box-shadow: none !important;

  filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* =====================================================
   HILANGKAN SURFACE PUTIH
   ===================================================== */

html[data-cosmic-theme] :where(
  .card,
  .box,
  .content-card,
  .content-box,
  .section-box,
  .module-box,
  .summary-card,
  .status-card,
  .toolbar-panel,
  .table-wrap,
  .table-scroll
) {
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

/* =====================================================
   INPUT / SELECT
   Tidak boleh putih.
   ===================================================== */

html[data-cosmic-theme] :where(
  input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
  select,
  textarea
) {
  appearance: none !important;
  -webkit-appearance: none !important;

  background:
    rgba(4,12,26,.42) !important;

  background-color:
    rgba(4,12,26,.42) !important;

  color: #f2f6fc !important;

  border:
    1px solid rgba(155,183,220,.24) !important;

  box-shadow: none !important;

  filter: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;

  color-scheme: dark !important;
}

html[data-cosmic-theme] :where(
  input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
  select,
  textarea
):focus {
  background:
    rgba(4,12,26,.55) !important;

  color: #ffffff !important;

  border-color:
    color-mix(in srgb,var(--pt-accent) 65%,transparent) !important;

  box-shadow:
    0 0 0 2px
    color-mix(in srgb,var(--pt-accent) 12%,transparent) !important;
}

/* Native date/month controls */
html[data-cosmic-theme] input[type="date"],
html[data-cosmic-theme] input[type="month"],
html[data-cosmic-theme] input[type="time"] {
  color-scheme: dark !important;
}

/* =====================================================
   TABLE
   ===================================================== */

html[data-cosmic-theme] table,
html[data-cosmic-theme] thead,
html[data-cosmic-theme] tbody,
html[data-cosmic-theme] tr,
html[data-cosmic-theme] td {
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
}

html[data-cosmic-theme] th {
  background: rgba(3,10,22,.24) !important;
}

/* =====================================================
   SIDEBAR SAJA — BLUR TIPIS
   ===================================================== */

html[data-cosmic-theme] :where(
  .sidebar,
  .talenta-sidebar,
  .app-sidebar,
  .main-sidebar
) {
  background:
    linear-gradient(
      180deg,
      rgba(3,10,24,.22),
      rgba(2,8,19,.14)
    ) !important;

  border-right:
    1px solid rgba(214,174,88,.24) !important;

  box-shadow:
    4px 0 18px rgba(0,0,0,.13) !important;

  backdrop-filter:
    blur(8px) saturate(110%) !important;

  -webkit-backdrop-filter:
    blur(8px) saturate(110%) !important;
}

/* Isi sidebar tidak ikut blur */
html[data-cosmic-theme] :where(
  .sidebar,
  .talenta-sidebar,
  .app-sidebar,
  .main-sidebar
) * {
  filter: none !important;
}

/* =====================================================
   JARAK TEKS
   ===================================================== */

html[data-cosmic-theme] :where(
  .page-heading,
  .panel-head,
  .module-header,
  .section-head,
  .announcement-section-head
) {
  padding-left: 12px !important;
  padding-right: 12px !important;
  padding-top: 8px !important;
  padding-bottom: 10px !important;
}

html[data-cosmic-theme] :where(
  h1,h2,h3,h4,h5,h6,p,span,strong,label,th,td
) {
  overflow-wrap: anywhere !important;
}
`;

export function installCosmicSurfaceFinal() {
  if (document.getElementById("pt-cosmic-surface-final")) return;

  const style = document.createElement("style");
  style.id = "pt-cosmic-surface-final";
  style.textContent = CSS;

  document.head.appendChild(style);
}
