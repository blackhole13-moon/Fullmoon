const CSS = `
@media (min-width: 769px) {

  /* =====================================================
     1. SIDEBAR — LEBIH TIPIS / TRANSPARAN
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
        rgba(4,12,28,.34),
        rgba(3,9,22,.22)
      ) !important;

    border-right: 1px solid rgba(197,161,91,.34) !important;

    box-shadow:
      5px 0 22px rgba(0,0,0,.16) !important;

    backdrop-filter: blur(10px) saturate(115%) !important;
    -webkit-backdrop-filter: blur(10px) saturate(115%) !important;

    opacity: 1 !important;
  }

  /* Isi sidebar tetap tajam */
  html.pt-web-desktop
  :where(
    .sidebar,
    .talenta-sidebar,
    aside,
    [class*="sidebar"],
    [class*="Sidebar"]
  ) * {
    filter: none !important;
  }


  /* =====================================================
     2. PROFESSIONAL SUITE
        HILANGKAN PANEL NAVY YANG MASIH TERSISA
     ===================================================== */

  html.pt-web-desktop .professional-suite,
  html.pt-web-desktop .professional-suite > *,
  html.pt-web-desktop .professional-suite .panel,
  html.pt-web-desktop .professional-suite .stat-card,
  html.pt-web-desktop .professional-suite .toolbar-panel,
  html.pt-web-desktop .professional-suite .table-panel,
  html.pt-web-desktop .professional-suite .attendance-health,
  html.pt-web-desktop .professional-suite .health-legend,
  html.pt-web-desktop .professional-suite .dashboard-grid-top,
  html.pt-web-desktop .professional-suite .dashboard-grid-bottom {

    background-color: transparent !important;
    background-image: none !important;
    border-color: transparent !important;
    box-shadow: none !important;

    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;

    filter: none !important;
  }

  /* Status operasional:
     jangan membuat kotak navy di belakang daftar status */
  html.pt-web-desktop
  .professional-suite
  .health-legend > div,
  html.pt-web-desktop
  .professional-suite
  .health-legend > div > * {

    background: transparent !important;
    box-shadow: none !important;
  }

  /* =====================================================
     3. CARD STATISTIK
     ===================================================== */

  html.pt-web-desktop
  .professional-suite
  .executive-stats
  .stat-card {

    background: transparent !important;
    border: 0 !important;
    padding: 18px 16px !important;
    min-height: 96px !important;
  }

  /* Ikon statistik tetap memiliki warna */
  html.pt-web-desktop
  .professional-suite
  .stat-card
  > :where(.stat-icon, svg, .icon) {
    filter: none !important;
  }


  /* =====================================================
     4. WHITE CARD / WHITE PANEL LEGACY
     ===================================================== */

  html.pt-web-desktop
  :where(
    .professional-suite,
    .announcement-module,
    .feedback-module,
    .talenta-shell
  )
  :where(
    .card,
    .panel,
    .box,
    .form-panel,
    .table-panel,
    .table-card,
    .info-box,
    .feature-card,
    .report-card,
    .detail-panel,
    .announcement-hero,
    .announcement-compose,
    .announcement-list-card,
    .announcement-item
  ) {

    background-color: transparent !important;
    background-image: none !important;

    border-color: transparent !important;
    box-shadow: none !important;

    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }


  /* =====================================================
     5. WHITE BACKGROUND YANG TERTINGGAL PADA SECTION
     ===================================================== */

  html.pt-web-desktop .professional-suite
  :where(
    .empty-module,
    .empty-state,
    .content-box,
    .module-box,
    .section-box,
    .content-card
  ) {

    background: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
  }


  /* =====================================================
     6. TEXT SAFE AREA
        AGAR TEKS TIDAK MENEMPEL KE GARIS/TEPI
     ===================================================== */

  html.pt-web-desktop
  .professional-suite .panel-head,
  html.pt-web-desktop
  .professional-suite .page-heading,
  html.pt-web-desktop
  .professional-suite .announcement-section-head {

    padding-left: 8px !important;
    padding-right: 8px !important;
    padding-top: 6px !important;
    padding-bottom: 8px !important;
  }

  html.pt-web-desktop
  .professional-suite .panel-head > div,
  html.pt-web-desktop
  .professional-suite .page-heading > div {

    min-width: 0 !important;
  }

  html.pt-web-desktop
  .professional-suite h1,
  html.pt-web-desktop
  .professional-suite h2,
  html.pt-web-desktop
  .professional-suite h3,
  html.pt-web-desktop
  .professional-suite p,
  html.pt-web-desktop
  .professional-suite span,
  html.pt-web-desktop
  .professional-suite strong {

    overflow-wrap: anywhere !important;
  }


  /* =====================================================
     7. TABLE — RUANG TEKS LEBIH LEGA
     ===================================================== */

  html.pt-web-desktop
  .professional-suite table th,
  html.pt-web-desktop
  .professional-suite table td {

    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }

  html.pt-web-desktop
  .professional-suite .table-wrap {

    padding: 4px !important;
    margin-top: 4px !important;
  }


  /* =====================================================
     8. PENGUMUMAN — JANGAN ADA KOTAK NAVY/PUTIH BESAR
     ===================================================== */

  html.pt-web-desktop .announcement-module,
  html.pt-web-desktop .announcement-hero,
  html.pt-web-desktop .announcement-compose,
  html.pt-web-desktop .announcement-list-card,
  html.pt-web-desktop .announcement-item {

    background: transparent !important;
    background-color: transparent !important;
    background-image: none !important;

    border: 0 !important;
    border-color: transparent !important;

    box-shadow: none !important;

    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  html.pt-web-desktop
  .announcement-module
  .announcement-section-head {

    padding: 8px 10px 12px !important;
  }

  html.pt-web-desktop
  .announcement-item-main {

    padding: 6px 4px !important;
    min-width: 0 !important;
  }

  html.pt-web-desktop
  .announcement-item-title-row strong,
  html.pt-web-desktop
  .announcement-body,
  html.pt-web-desktop
  .announcement-meta {

    overflow-wrap: anywhere !important;
  }


  /* =====================================================
     9. HANYA KOMPONEN KONTROL YANG BOLEH BERWARNA
     ===================================================== */

  html.pt-web-desktop
  :where(
    button,
    input,
    select,
    textarea,
    .status,
    .badge,
    .tag
  ) {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    filter: none !important;
  }


  /* =====================================================
     10. HILANGKAN GARIS GOLD DARI PANEL BESAR
     ===================================================== */

  html.pt-web-desktop
  :where(
    .professional-suite .panel,
    .professional-suite .stat-card,
    .professional-suite .table-panel,
    .professional-suite .toolbar-panel,
    .announcement-module,
    .announcement-hero,
    .announcement-compose,
    .announcement-list-card,
    .announcement-item
  ) {

    border: 0 !important;
    border-color: transparent !important;
  }

}
`;

export function installDesktopCosmicPolish() {
  if (document.getElementById('pt-desktop-cosmic-polish')) return;

  const style = document.createElement('style');
  style.id = 'pt-desktop-cosmic-polish';
  style.textContent = CSS;

  document.head.appendChild(style);
}
