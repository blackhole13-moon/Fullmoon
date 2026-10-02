const DESKTOP_CARD_FIX = `
@media (min-width: 769px) {

  /* =====================================================
     PROJECT BY TIRTA — WEB DESKTOP
     COSMIC BACKGROUND FULL / CARD TRANSPARENT
     ===================================================== */

  html.pt-web-desktop body,
  html.pt-web-desktop #root,
  html.pt-web-desktop .app-root {
    background: transparent !important;
    background-color: transparent !important;
  }

  /* Biarkan cosmic background terlihat penuh */
  html.pt-web-desktop .main-content,
  html.pt-web-desktop .content-area,
  html.pt-web-desktop .page-content,
  html.pt-web-desktop .dashboard-content,
  html.pt-web-desktop .content-wrapper {
    background: transparent !important;
    background-color: transparent !important;
  }

  /*
   * Hapus tampilan card/box/panel luar.
   * Konten di dalamnya tetap ada.
   */
  html.pt-web-desktop
  :where(
    .card,
    .panel,
    .box,
    [class$="-card"],
    [class$="-panel"],
    [class$="-box"],
    [class*=" card"],
    [class*=" panel"],
    [class*=" box"]
  ):not(button):not(input):not(select):not(textarea) {
    background: transparent !important;
    background-color: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Login desktop: card hilang, form tetap */
  html.pt-web-desktop .unified-login-card,
  html.pt-web-desktop .login-modal-card {
    background: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Login background tajam, jangan diberi blur */
  html.pt-web-desktop .unified-login-page {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Jangan ikut menghilangkan identitas sidebar */
  html.pt-web-desktop .sidebar,
  html.pt-web-desktop .side-menu,
  html.pt-web-desktop .app-sidebar,
  html.pt-web-desktop [class*="sidebar"] {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Hilangkan efek kaca/blur pada panel desktop */
  html.pt-web-desktop [style*="backdrop-filter"],
  html.pt-web-desktop [style*="backdropFilter"] {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Garis tabel tetap terlihat, tetapi tanpa kotak */
  html.pt-web-desktop table,
  html.pt-web-desktop .table-wrap,
  html.pt-web-desktop .table-container {
    background: transparent !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Header/toolbar ikut menyatu dengan background */
  html.pt-web-desktop .toolbar,
  html.pt-web-desktop .toolbar-panel,
  html.pt-web-desktop .page-header,
  html.pt-web-desktop .content-header {
    background: transparent !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Tetap pertahankan keterbacaan */
  html.pt-web-desktop h1,
  html.pt-web-desktop h2,
  html.pt-web-desktop h3,
  html.pt-web-desktop h4,
  html.pt-web-desktop h5,
  html.pt-web-desktop h6,
  html.pt-web-desktop p,
  html.pt-web-desktop label,
  html.pt-web-desktop th,
  html.pt-web-desktop td {
    text-shadow: 0 1px 3px rgba(0,0,0,.35);
  }
}
`;

export function installDesktopCardFix() {
  if (document.getElementById('pt-desktop-card-fix')) return;

  document.documentElement.classList.add('pt-web-desktop');

  const style = document.createElement('style');
  style.id = 'pt-desktop-card-fix';
  style.textContent = DESKTOP_CARD_FIX;

  document.head.appendChild(style);
}
