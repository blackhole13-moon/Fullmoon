const CSS = `
@media (min-width: 769px) {

  /* =====================================================
     DESKTOP COSMIC BACKGROUND — ANDROID STYLE
     BACKGROUND TAJAM / HD / TANPA BLUR
     ===================================================== */

  html.pt-web-desktop,
  html.pt-web-desktop body,
  html.pt-web-desktop #root,
  html.pt-web-desktop .app-root {
    background: transparent !important;
    background-color: transparent !important;
    filter: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* -----------------------------------------------------
     PAGE ROOT
     ----------------------------------------------------- */

  html.pt-web-desktop .talenta-shell,
  html.pt-web-desktop .talenta-main,
  html.pt-web-desktop .admin-page-frame {

    position: relative !important;
    isolation: isolate !important;

    background-color: var(--pt-bg-deep, #02050a) !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    background-attachment: fixed !important;

    filter: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;

    box-shadow: none !important;
  }

  /* -----------------------------------------------------
     FIVE REAL BACKGROUNDS
     ----------------------------------------------------- */

  html.pt-web-desktop[data-cosmic-theme="sun"] .talenta-shell,
  html.pt-web-desktop[data-cosmic-theme="sun"] .talenta-main,
  html.pt-web-desktop[data-cosmic-theme="sun"] .admin-page-frame {
    background-image: url("/cosmic-desktop-wide/cosmic-sun.webp") !important;
  }

  html.pt-web-desktop[data-cosmic-theme="moon"] .talenta-shell,
  html.pt-web-desktop[data-cosmic-theme="moon"] .talenta-main,
  html.pt-web-desktop[data-cosmic-theme="moon"] .admin-page-frame {
    background-image: url("/cosmic-desktop-wide/cosmic-moon.webp") !important;
  }

  html.pt-web-desktop[data-cosmic-theme="galaxy"] .talenta-shell,
  html.pt-web-desktop[data-cosmic-theme="galaxy"] .talenta-main,
  html.pt-web-desktop[data-cosmic-theme="galaxy"] .admin-page-frame {
    background-image: url("/cosmic-desktop-wide/cosmic-galaxy.webp") !important;
  }

  html.pt-web-desktop[data-cosmic-theme="blackhole"] .talenta-shell,
  html.pt-web-desktop[data-cosmic-theme="blackhole"] .talenta-main,
  html.pt-web-desktop[data-cosmic-theme="blackhole"] .admin-page-frame {
    background-image: url("/cosmic-desktop-wide/cosmic-blackhole.webp") !important;
  }

  html.pt-web-desktop[data-cosmic-theme="nebula"] .talenta-shell,
  html.pt-web-desktop[data-cosmic-theme="nebula"] .talenta-main,
  html.pt-web-desktop[data-cosmic-theme="nebula"] .admin-page-frame {
    background-image: url("/cosmic-desktop-wide/cosmic-nebula.webp") !important;
  }

  /* -----------------------------------------------------
     MATIKAN LAYER ATMOSFERA YANG MEMBUAT KABUR
     Background utama tetap gambar asli.
     ----------------------------------------------------- */

  html.pt-web-desktop .talenta-shell::before,
  html.pt-web-desktop .talenta-shell::after,
  html.pt-web-desktop .employee-portal-cosmic::before,
  html.pt-web-desktop .employee-portal-cosmic::after {

    background: transparent !important;
    opacity: 0 !important;

    filter: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;

    animation: none !important;
  }

  /* -----------------------------------------------------
     CARD / PANEL BESAR = BENAR-BENAR TRANSPARAN
     TANPA BORDER GOLD
     ----------------------------------------------------- */

  html.pt-web-desktop
  :where(
    .panel,
    .stat-card,
    .quick,
    .form-panel,
    .report-card,
    .org-card,
    .calendar-card,
    .feature-card,
    .setting-card,
    .info-box,
    .theme-card,
    .custom-theme-panel,
    .export-card,
    .detail-panel,
    .table-card,
    .table-panel,
    .announcement-module,
    .announcement-hero,
    .announcement-compose,
    .announcement-list-card,
    .announcement-item
  ) {

    background: transparent !important;
    background-color: transparent !important;

    border: 0 !important;
    border-color: transparent !important;

    box-shadow: none !important;

    filter: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Hilangkan garis dekoratif card */
  html.pt-web-desktop
  :where(
    .panel,
    .stat-card,
    .table-panel,
    .announcement-module,
    .announcement-hero,
    .announcement-compose,
    .announcement-list-card,
    .announcement-item
  )::before,
  html.pt-web-desktop
  :where(
    .panel,
    .stat-card,
    .table-panel,
    .announcement-module,
    .announcement-hero,
    .announcement-compose,
    .announcement-list-card,
    .announcement-item
  )::after {

    content: none !important;
    display: none !important;
  }

  /* -----------------------------------------------------
     TABLE JUGA TRANSPARAN
     ----------------------------------------------------- */

  html.pt-web-desktop .table-wrap,
  html.pt-web-desktop .table-scroll,
  html.pt-web-desktop table {
    background: transparent !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* -----------------------------------------------------
     INPUT / SEARCH / BUTTON tetap punya permukaan
     ----------------------------------------------------- */

  html.pt-web-desktop input,
  html.pt-web-desktop select,
  html.pt-web-desktop textarea {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* -----------------------------------------------------
     SIDEBAR — SATU-SATUNYA AREA GLASS BLUR
     ----------------------------------------------------- */

  html.pt-web-desktop
  :where(
    .sidebar,
    .talenta-sidebar,
    aside,
    [class*="sidebar"],
    [class*="Sidebar"]
  ) {

    background:
      linear-gradient(
        180deg,
        rgba(4,12,28,.68),
        rgba(3,9,22,.52)
      ) !important;

    border-right:
      1px solid rgba(197,161,91,.48) !important;

    box-shadow:
      8px 0 30px rgba(0,0,0,.24) !important;

    backdrop-filter:
      blur(16px) saturate(130%) !important;

    -webkit-backdrop-filter:
      blur(16px) saturate(130%) !important;

    filter: none !important;
  }

  /* Jangan ikut blur isi sidebar */
  html.pt-web-desktop
  :where(
    .sidebar,
    .talenta-sidebar,
    aside,
    [class*="sidebar"],
    [class*="Sidebar"]
  ) > * {
    filter: none !important;
  }

  /* -----------------------------------------------------
     HAPUS BORDER GOLD GLOBAL PADA CARD BESAR
     ----------------------------------------------------- */

  html.pt-web-desktop
  :where(
    .panel,
    .stat-card,
    .quick,
    .form-panel,
    .report-card,
    .org-card,
    .calendar-card,
    .feature-card,
    .setting-card,
    .info-box,
    .portal-card,
    .theme-card,
    .custom-theme-panel,
    .export-card,
    .detail-panel,
    .table-card
  ) {
    border-color: transparent !important;
  }

  /* -----------------------------------------------------
     LOGIN DESKTOP MENGGUNAKAN BACKGROUND YANG SAMA
     ----------------------------------------------------- */

  html.pt-web-desktop .unified-login-page {
    min-height: 100vh !important;

    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    background-attachment: fixed !important;

    filter: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  html.pt-web-desktop .unified-login-page[data-cosmic-theme="sun"],
  html.pt-web-desktop[data-cosmic-theme="sun"] .unified-login-page {
    background-image:
      url("/cosmic-desktop-wide/cosmic-sun.webp") !important;
  }

  html.pt-web-desktop[data-cosmic-theme="moon"] .unified-login-page {
    background-image:
      url("/cosmic-desktop-wide/cosmic-moon.webp") !important;
  }

  html.pt-web-desktop[data-cosmic-theme="galaxy"] .unified-login-page {
    background-image:
      url("/cosmic-desktop-wide/cosmic-galaxy.webp") !important;
  }

  html.pt-web-desktop[data-cosmic-theme="blackhole"] .unified-login-page {
    background-image:
      url("/cosmic-desktop-wide/cosmic-blackhole.webp") !important;
  }

  html.pt-web-desktop[data-cosmic-theme="nebula"] .unified-login-page {
    background-image:
      url("/cosmic-desktop-wide/cosmic-nebula.webp") !important;
  }

  /* Hilangkan overlay blur login */
  html.pt-web-desktop .unified-login-page::before,
  html.pt-web-desktop .unified-login-page::after {
    display: none !important;
    filter: none !important;
  }

  html.pt-web-desktop .unified-login-card {
    background: transparent !important;
    border: 0 !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
}
`;

export function installDesktopCosmicBackgroundFinal() {
  if (document.getElementById("pt-desktop-cosmic-background-final")) return;

  const style = document.createElement("style");
  style.id = "pt-desktop-cosmic-background-final";
  style.textContent = CSS;

  document.head.appendChild(style);
}
