const CSS = `
@media (min-width: 769px) {

  /* =====================================================
     DESKTOP FINAL
     LARGE CARDS/PANELS = TRANSPARENT
     NO GOLD BORDER / NO BOX SHADOW / NO BLUR
     ===================================================== */

  html.pt-web-desktop
  :where(
    .professional-suite,
    .announcement-module,
    .content-grid,
    .dashboard-grid-top,
    .dashboard-grid-bottom,
    .role-builder,
    .mini-kpi-row,
    .stat-grid,
    .action-card-grid,
    .kanban-grid
  )
  :where(
    .panel,
    .table-panel,
    .toolbar-panel,
    .stat-card,
    .announcement-hero,
    .announcement-compose,
    .announcement-list-card,
    .announcement-item,
    .kanban-col,
    .kanban-card
  ) {

    background: transparent !important;
    background-color: transparent !important;

    border: 0 !important;
    border-color: transparent !important;

    box-shadow: none !important;

    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Professional Suite */
  html.pt-web-desktop .professional-suite .panel,
  html.pt-web-desktop .professional-suite .stat-card,
  html.pt-web-desktop .professional-suite .toolbar-panel,
  html.pt-web-desktop .professional-suite .table-panel {

    background: transparent !important;
    border: 0 !important;
    box-shadow: none !important;
  }

  /* Pengumuman */
  html.pt-web-desktop .announcement-module,
  html.pt-web-desktop .announcement-hero,
  html.pt-web-desktop .announcement-compose,
  html.pt-web-desktop .announcement-list-card,
  html.pt-web-desktop .announcement-item {

    background: transparent !important;
    background-color: transparent !important;

    border: 0 !important;
    border-color: transparent !important;

    box-shadow: none !important;

    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Hilangkan garis/dekorasi gold dari card besar */
  html.pt-web-desktop
  :where(
    .professional-suite .panel,
    .professional-suite .stat-card,
    .announcement-module,
    .announcement-hero,
    .announcement-compose,
    .announcement-list-card,
    .announcement-item,
    .table-panel,
    .dashboard-grid-top > .panel,
    .dashboard-grid-bottom > .panel
  )::before,
  html.pt-web-desktop
  :where(
    .professional-suite .panel,
    .professional-suite .stat-card,
    .announcement-module,
    .announcement-hero,
    .announcement-compose,
    .announcement-list-card,
    .announcement-item,
    .table-panel,
    .dashboard-grid-top > .panel,
    .dashboard-grid-bottom > .panel
  )::after {

    content: none !important;
    display: none !important;
  }

  /* Tabel tetap terbuka terhadap background */
  html.pt-web-desktop .table-wrap,
  html.pt-web-desktop table {

    background: transparent !important;
    box-shadow: none !important;

    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* =====================================================
     JANGAN TRANSPARANKAN KONTROL
     ===================================================== */

  html.pt-web-desktop
  :where(
    button,
    input,
    select,
    textarea,
    .status,
    .announcement-primary,
    .announcement-secondary,
    .announcement-archive,
    .quick-action,
    .action-card,
    .branch-tabs button
  ) {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Tombol action tetap terlihat */
  html.pt-web-desktop .action-card,
  html.pt-web-desktop .quick-action {
    border-color: rgba(197,161,91,.22) !important;
  }

  /* =====================================================
     SIDEBAR SAJA YANG MEMAKAI GLASS BLUR
     ===================================================== */

  html.pt-web-desktop
  :where(
    aside,
    .sidebar,
    .side-menu,
    .app-sidebar,
    .main-sidebar,
    [class*="sidebar"],
    [class*="Sidebar"]
  ) {

    background:
      linear-gradient(
        180deg,
        rgba(5, 15, 36, .64),
        rgba(5, 13, 30, .48)
      ) !important;

    border-right: 1px solid rgba(197,161,91,.52) !important;

    box-shadow:
      7px 0 28px rgba(0,0,0,.22) !important;

    backdrop-filter: blur(16px) saturate(130%) !important;
    -webkit-backdrop-filter: blur(16px) saturate(130%) !important;
  }

  /* Isi sidebar tidak ikut menjadi blur */
  html.pt-web-desktop
  :where(
    aside,
    .sidebar,
    .side-menu,
    .app-sidebar,
    .main-sidebar,
    [class*="sidebar"],
    [class*="Sidebar"]
  ) > * {

    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
}
`;

export function installDesktopCosmicCardsFinal() {
  if (document.getElementById('pt-desktop-cosmic-cards-final')) return;

  const style = document.createElement('style');
  style.id = 'pt-desktop-cosmic-cards-final';
  style.textContent = CSS;

  document.head.appendChild(style);
}
