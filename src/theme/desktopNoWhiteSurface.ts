const CSS = `
/* =====================================================
   PROJECT BY TIRTA — REMOVE WHITE/DARK CARD SURFACES
   Web desktop + desktop-like localhost viewport
   ===================================================== */

@media (min-width: 769px) {

  /* Semua container besar benar-benar transparan */
  html.pt-web-desktop
  :where(
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
    .announcement-module,
    .announcement-hero,
    .announcement-compose,
    .announcement-list-card,
    .announcement-item,
    .status-card,
    .summary-card,
    .content-card
  ) {
    background: transparent !important;
    background-color: transparent !important;
    background-image: none !important;

    border: 0 !important;
    border-color: transparent !important;

    box-shadow: none !important;

    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    filter: none !important;
  }

  /* Isi tabel transparan */
  html.pt-web-desktop
  :where(
    .table-wrap,
    .table-scroll,
    table,
    thead,
    tbody,
    tr,
    td
  ) {
    background: transparent !important;
    background-color: transparent !important;
    background-image: none !important;

    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Header tabel boleh sedikit gelap agar terbaca */
  html.pt-web-desktop table th {
    background: rgba(5,12,24,.28) !important;
  }

  /* =====================================================
     INPUT / SELECT / TEXTAREA
     Tidak putih lagi, tetapi tetap punya permukaan
     ===================================================== */

  html.pt-web-desktop
  :where(
    input,
    select,
    textarea
  ) {
    background: rgba(5,14,28,.52) !important;
    background-color: rgba(5,14,28,.52) !important;
    color: #f2f6fc !important;

    border: 1px solid rgba(154,180,219,.26) !important;

    box-shadow: none !important;

    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  html.pt-web-desktop
  :where(
    input[type="month"],
    input[type="date"],
    input[type="number"],
    input[type="text"],
    input[type="search"],
    select
  ) {
    color-scheme: dark !important;
  }

  html.pt-web-desktop
  :where(
    input::placeholder,
    textarea::placeholder
  ) {
    color: rgba(220,228,240,.62) !important;
  }

  /* =====================================================
     PAYROLL / PROFESSIONAL SUITE
     ===================================================== */

  html.pt-web-desktop
  :where(
    .professional-suite,
    .payroll,
    .payroll-page,
    .payroll-view,
    .executive-dashboard
  )
  :where(
    .panel,
    .toolbar-panel,
    .table-panel,
    .stat-card,
    .summary-card
  ) {
    background: transparent !important;
    background-image: none !important;
    border: 0 !important;
    box-shadow: none !important;
  }

  /* Angka/statistik jangan dibuat kotak */
  html.pt-web-desktop
  :where(
    .stat-inline,
    .metric,
    .metric-card,
    .stat-value,
    .summary-item
  ) {
    background: transparent !important;
    border: 0 !important;
    box-shadow: none !important;
  }

  /* =====================================================
     STATUS / BADGE TETAP TERLIHAT
     ===================================================== */

  html.pt-web-desktop
  :where(
    .status,
    .badge,
    .tag,
    .pill
  ) {
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* =====================================================
     TEKS TIDAK MENEMPEL KE TEPI
     ===================================================== */

  html.pt-web-desktop
  :where(
    .panel-head,
    .page-heading,
    .section-head,
    .announcement-section-head,
    .toolbar-panel,
    .content-header
  ) {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  html.pt-web-desktop
  :where(
    .panel-head,
    .section-head,
    .announcement-section-head
  ) {
    padding-top: 8px !important;
    padding-bottom: 10px !important;
  }

  html.pt-web-desktop
  :where(
    h1,h2,h3,h4,p,span,strong,label
  ) {
    overflow-wrap: anywhere !important;
  }

  /* =====================================================
     SIDEBAR SAJA TETAP GLASS
     ===================================================== */

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
        rgba(4,12,28,.26),
        rgba(3,9,22,.16)
      ) !important;

    border-right: 1px solid rgba(197,161,91,.28) !important;

    box-shadow: 5px 0 20px rgba(0,0,0,.14) !important;

    backdrop-filter: blur(9px) saturate(112%) !important;
    -webkit-backdrop-filter: blur(9px) saturate(112%) !important;
  }
}
`;

export function installDesktopNoWhiteSurface() {
  if (document.getElementById('pt-desktop-no-white-surface')) return;

  const style = document.createElement('style');
  style.id = 'pt-desktop-no-white-surface';
  style.textContent = CSS;

  document.head.appendChild(style);
}
