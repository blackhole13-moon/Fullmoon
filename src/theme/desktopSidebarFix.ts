const CSS = `
@media (min-width: 769px) {

  /* =====================================================
     WEB DESKTOP — SIDEBAR COSMIC GLASS ONLY
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
        rgba(6, 15, 34, .62),
        rgba(5, 12, 28, .50)
      ) !important;

    border-right: 2px solid rgba(214, 174, 88, .85) !important;

    box-shadow:
      8px 0 30px rgba(0, 0, 0, .22),
      inset -1px 0 0 rgba(255,255,255,.05) !important;

    backdrop-filter: blur(16px) saturate(125%) !important;
    -webkit-backdrop-filter: blur(16px) saturate(125%) !important;

    background-clip: padding-box !important;
  }

  /* Jangan blur isi sidebar */
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

  /* Logo dan navigasi tetap jelas */
  html.pt-web-desktop
  :where(
    aside,
    .sidebar,
    .side-menu,
    .app-sidebar,
    .main-sidebar,
    [class*="sidebar"],
    [class*="Sidebar"]
  ) a,
  html.pt-web-desktop
  :where(
    aside,
    .sidebar,
    .side-menu,
    .app-sidebar,
    .main-sidebar,
    [class*="sidebar"],
    [class*="Sidebar"]
  ) button {
    background: transparent !important;
  }

  /* Item aktif tetap memiliki warna tema */
  html.pt-web-desktop
  :where(
    aside,
    .sidebar,
    .side-menu,
    .app-sidebar,
    .main-sidebar,
    [class*="sidebar"],
    [class*="Sidebar"]
  ) :where(
    .active,
    .selected,
    [aria-current="page"]
  ) {
    background:
      linear-gradient(
        135deg,
        rgba(197,161,91,.92),
        rgba(166,124,34,.88)
      ) !important;

    color: #081227 !important;

    border: 1px solid rgba(255,220,130,.65) !important;

    box-shadow:
      0 5px 18px rgba(197,161,91,.18) !important;
  }
}
`;

export function installDesktopSidebarFix() {
  if (document.getElementById('pt-desktop-sidebar-fix')) return;

  const style = document.createElement('style');
  style.id = 'pt-desktop-sidebar-fix';
  style.textContent = CSS;

  document.head.appendChild(style);
}
