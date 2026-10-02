const CSS = `
@media (min-width: 769px) {

  /* ================================================
     COSMIC DESKTOP BACKGROUND — SHARP
     ================================================ */

  html.pt-web-desktop,
  html.pt-web-desktop body,
  html.pt-web-desktop #root,
  html.pt-web-desktop .app-root {

    filter: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  html.pt-web-desktop .app-root,
  html.pt-web-desktop .main-content,
  html.pt-web-desktop .content-area,
  html.pt-web-desktop .page-content,
  html.pt-web-desktop .dashboard-content {

    background-color: transparent !important;

    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;

    filter: none !important;
  }

  /* Pastikan background image/theme tidak diberi blur */
  html.pt-web-desktop [style*="background-image"],
  html.pt-web-desktop [style*="backgroundImage"] {

    filter: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Pseudo-element dekorasi tidak boleh mengaburkan background */
  html.pt-web-desktop .app-root::before,
  html.pt-web-desktop .app-root::after,
  html.pt-web-desktop body::before,
  html.pt-web-desktop body::after {

    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    filter: none !important;
  }

  /* ================================================
     SIDEBAR SAJA — GLASS BLUR
     ================================================ */

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

    backdrop-filter: blur(16px) saturate(130%) !important;
    -webkit-backdrop-filter: blur(16px) saturate(130%) !important;

    filter: none !important;
  }

}
`;

export function installDesktopSharpBackground() {
  if (document.getElementById('pt-desktop-sharp-background')) return;

  const style = document.createElement('style');
  style.id = 'pt-desktop-sharp-background';
  style.textContent = CSS;

  document.head.appendChild(style);
}
