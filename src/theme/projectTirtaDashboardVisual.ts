import sunArt from '../assets/cosmic/cosmic-sun.webp';
import moonArt from '../assets/cosmic/cosmic-moon.webp';
import galaxyArt from '../assets/cosmic/cosmic-galaxy.webp';
import blackholeArt from '../assets/cosmic/cosmic-blackhole.webp';
import nebulaArt from '../assets/cosmic/cosmic-nebula.webp';

/**
 * Project by Tirta — Cosmic dashboard visual layer.
 * Additive runtime CSS only. No business logic or routing changes.
 */
export function installProjectTirtaDashboardVisual(): void {
  if (typeof document === 'undefined') return;
  const STYLE_ID = 'project-tirta-cosmic-dashboard-visual-v1';
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    :root {
      --pt-cosmic-glass: rgba(6, 18, 43, .72);
      --pt-cosmic-glass-strong: rgba(7, 22, 54, .88);
      --pt-cosmic-line: color-mix(in srgb, var(--pt-accent, #e4d1a0) 24%, transparent);
      --pt-cosmic-line-strong: color-mix(in srgb, var(--pt-accent, #e4d1a0) 44%, transparent);
      --pt-cosmic-text: #f5f8ff;
      --pt-cosmic-muted: #aebdd8;
      --pt-cosmic-shadow: 0 20px 55px rgba(0, 0, 0, .28);
    }

    html,
    body,
    #root {
      min-height: 100%;
    }

    html {
      background: var(--pt-bg-deep, #020712) !important;
    }

    body {
      color: var(--pt-cosmic-text) !important;
      background:
        radial-gradient(circle at 12% 16%, color-mix(in srgb, var(--pt-accent-2, #83bdfb) 18%, transparent), transparent 26%),
        radial-gradient(circle at 88% 12%, color-mix(in srgb, var(--pt-accent, #e4d1a0) 12%, transparent), transparent 24%),
        radial-gradient(circle at 72% 82%, color-mix(in srgb, var(--pt-accent-2, #83bdfb) 10%, transparent), transparent 28%),
        linear-gradient(145deg, var(--pt-bg-deep, #020712), var(--pt-bg-base, #071222) 52%, var(--pt-bg-deep, #020712)) !important;
      background-attachment: fixed !important;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      opacity: .25;
      background-image:
        radial-gradient(circle at 15% 22%, rgba(255,255,255,.95) 0 1px, transparent 1.7px),
        radial-gradient(circle at 72% 15%, rgba(255,255,255,.70) 0 1px, transparent 1.6px),
        radial-gradient(circle at 39% 78%, rgba(255,255,255,.65) 0 1px, transparent 1.6px),
        radial-gradient(circle at 91% 66%, rgba(255,255,255,.8) 0 1px, transparent 1.7px);
      background-size: 170px 170px, 230px 230px, 260px 260px, 310px 310px;
      animation: pt-cosmic-drift-v1 24s linear infinite;
    }

    body::after {
      content: "";
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at 50% -12%, rgba(255,255,255,.045), transparent 38%),
        linear-gradient(180deg, transparent 0 70%, rgba(0,0,0,.12));
    }

    #root {
      position: relative;
      z-index: 1;
    }

    @keyframes pt-cosmic-drift-v1 {
      from { transform: translate3d(0, 0, 0); }
      50% { transform: translate3d(0, -8px, 0); }
      to { transform: translate3d(0, 0, 0); }
    }

    .talenta-shell,
    .talenta-main,
    .admin-page-frame,
    .page {
      background: transparent !important;
    }

    .talenta-shell {
      color: var(--pt-cosmic-text) !important;
    }

    .sidebar {
      background:
        linear-gradient(180deg, color-mix(in srgb, var(--mx-sidebar, #06142d) 92%, black), color-mix(in srgb, var(--pt-bg-deep, #020712) 94%, black)) !important;
      border-right: 1px solid var(--pt-cosmic-line) !important;
      box-shadow: 18px 0 48px rgba(0,0,0,.20) !important;
      backdrop-filter: blur(18px) saturate(120%) !important;
    }

    .sidebar-head,
    .topbar {
      border-color: var(--pt-cosmic-line) !important;
    }

    .brand-mark {
      background: linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.015)) !important;
      border: 1px solid var(--pt-cosmic-line-strong) !important;
      box-shadow: 0 8px 28px rgba(0,0,0,.24), 0 0 24px color-mix(in srgb, var(--pt-accent, #e4d1a0) 14%, transparent) !important;
    }

    .brand-mark img {
      filter: drop-shadow(0 0 11px color-mix(in srgb, var(--pt-accent, #e4d1a0) 34%, transparent)) !important;
    }

    .nav-item,
    .nav-title,
    .logout,
    .icon-btn,
    .avatar-button {
      transition: background .18s ease, border-color .18s ease, transform .18s ease, box-shadow .18s ease !important;
    }

    .nav-item:hover,
    .nav-title:hover,
    .logout:hover,
    .icon-btn:hover,
    .avatar-button:hover {
      background: color-mix(in srgb, var(--pt-accent-2, #83bdfb) 10%, transparent) !important;
    }

    .nav-item.active {
      background: linear-gradient(135deg,
        color-mix(in srgb, var(--pt-accent, #e4d1a0) 20%, transparent),
        color-mix(in srgb, var(--pt-accent-2, #83bdfb) 11%, transparent)) !important;
      border: 1px solid color-mix(in srgb, var(--pt-accent, #e4d1a0) 34%, transparent) !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.05), 0 8px 24px rgba(0,0,0,.12) !important;
    }

    .topbar {
      background: color-mix(in srgb, var(--pt-bg-deep, #020712) 70%, transparent) !important;
      backdrop-filter: blur(18px) saturate(125%) !important;
    }

    .crumb {
      color: var(--pt-cosmic-muted) !important;
    }

    .crumb span,
    .page-heading h1,
    .page-heading h2,
    .panel h2,
    .panel h3,
    .panel-head h2,
    .section-title,
    .stat-card strong {
      color: var(--pt-cosmic-text) !important;
    }

    .search-global,
    .search-global input,
    input,
    select,
    textarea {
      color: var(--pt-cosmic-text) !important;
      background: rgba(5, 16, 38, .68) !important;
      border-color: var(--pt-cosmic-line) !important;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.025) !important;
    }

    .search-global:focus-within,
    input:focus,
    select:focus,
    textarea:focus {
      border-color: var(--pt-cosmic-line-strong) !important;
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--pt-accent, #e4d1a0) 10%, transparent) !important;
    }

    .panel,
    .card,
    .stat-card,
    .executive-chart,
    .attendance-health,
    .quick,
    .table-panel,
    .form-panel,
    .mini-kpi-row > *,
    .branch-nav {
      background:
        linear-gradient(145deg, var(--pt-cosmic-glass-strong), var(--pt-cosmic-glass)) !important;
      border-color: var(--pt-cosmic-line) !important;
      box-shadow: var(--pt-cosmic-shadow) !important;
      backdrop-filter: blur(15px) saturate(115%) !important;
    }

    .panel,
    .card,
    .stat-card,
    .quick {
      border-radius: 20px !important;
    }

    .stat-card:hover,
    .quick:hover {
      transform: translateY(-2px) !important;
      border-color: var(--pt-cosmic-line-strong) !important;
    }

    .stat-icon {
      background: linear-gradient(145deg,
        color-mix(in srgb, var(--pt-accent-2, #83bdfb) 78%, transparent),
        color-mix(in srgb, var(--pt-accent, #e4d1a0) 28%, #071222)) !important;
      color: #fff !important;
      border: 1px solid color-mix(in srgb, var(--pt-accent-2, #83bdfb) 35%, transparent) !important;
      box-shadow: 0 10px 22px rgba(0,0,0,.18) !important;
    }

    .branch-nav {
      padding: 8px !important;
      gap: 7px !important;
    }

    .branch-nav button {
      border: 1px solid transparent !important;
      border-radius: 14px !important;
      color: var(--pt-cosmic-muted) !important;
      background: transparent !important;
    }

    .branch-nav button:hover,
    .branch-nav button.active {
      color: var(--pt-cosmic-text) !important;
      background: color-mix(in srgb, var(--pt-accent-2, #83bdfb) 11%, transparent) !important;
      border-color: var(--pt-cosmic-line) !important;
    }

    .primary {
      background: linear-gradient(135deg,
        color-mix(in srgb, var(--pt-accent-2, #83bdfb) 82%, #2d7dff),
        color-mix(in srgb, var(--pt-accent, #e4d1a0) 54%, #5a35e8)) !important;
      border: 1px solid color-mix(in srgb, var(--pt-accent, #e4d1a0) 34%, transparent) !important;
      box-shadow: 0 10px 26px rgba(0,0,0,.22) !important;
    }

    .secondary,
    .link-btn {
      border-color: var(--pt-cosmic-line) !important;
      color: var(--pt-cosmic-text) !important;
      background: rgba(8, 22, 49, .54) !important;
    }

    .table-wrap {
      border-color: var(--pt-cosmic-line) !important;
    }

    table thead th {
      background: rgba(255,255,255,.03) !important;
      color: var(--pt-cosmic-muted) !important;
      border-bottom-color: var(--pt-cosmic-line) !important;
    }

    table tbody tr:hover {
      background: color-mix(in srgb, var(--pt-accent-2, #83bdfb) 5%, transparent) !important;
    }

    .login-wrap {
      background: transparent !important;
    }

    .login-card {
      background: linear-gradient(145deg, rgba(7,22,54,.92), rgba(5,14,33,.84)) !important;
      border: 1px solid var(--pt-cosmic-line-strong) !important;
      box-shadow: 0 28px 80px rgba(0,0,0,.36), 0 0 45px color-mix(in srgb, var(--pt-accent-2, #83bdfb) 8%, transparent) !important;
      backdrop-filter: blur(20px) saturate(125%) !important;
    }

    .login-card .brand-mark {
      box-shadow: 0 12px 30px rgba(0,0,0,.25), 0 0 28px color-mix(in srgb, var(--pt-accent, #e4d1a0) 18%, transparent) !important;
    }

    .admin-floating-action,
    .profile-menu,
    .role-menu,
    .admin-notification-dropdown,
    .profile-panel {
      background: linear-gradient(145deg, rgba(7,22,54,.97), rgba(4,12,30,.96)) !important;
      border-color: var(--pt-cosmic-line) !important;
      box-shadow: 0 26px 70px rgba(0,0,0,.36) !important;
      backdrop-filter: blur(20px) saturate(125%) !important;
    }

    @media (prefers-reduced-motion: reduce) {
      body::before { animation: none !important; }
      .stat-card:hover,
      .quick:hover { transform: none !important; }
    }

    /* =========================================================
       PROJECT BY TIRTA — REFERENCE DASHBOARD V2
       Desktop Web only. Professional has no data-cosmic-theme,
       so it remains on the original professional visual system.
       ========================================================= */

    html[data-cosmic-theme="sun"] .talenta-shell,
    html[data-cosmic-theme="sun"] .talenta-main,
    html[data-cosmic-theme="sun"] .admin-page-frame {
      background-image:
        linear-gradient(rgba(3,8,18,.30),rgba(3,8,18,.68)),
        url("${sunArt}") !important;
      background-position:center center !important;
      background-size:cover !important;
      background-repeat:no-repeat !important;
      background-attachment:fixed !important;
    }

    html[data-cosmic-theme="moon"] .talenta-shell,
    html[data-cosmic-theme="moon"] .talenta-main,
    html[data-cosmic-theme="moon"] .admin-page-frame {
      background-image:
        linear-gradient(rgba(2,8,20,.26),rgba(2,8,20,.68)),
        url("${moonArt}") !important;
      background-position:center center !important;
      background-size:cover !important;
      background-repeat:no-repeat !important;
      background-attachment:fixed !important;
    }

    html[data-cosmic-theme="galaxy"] .talenta-shell,
    html[data-cosmic-theme="galaxy"] .talenta-main,
    html[data-cosmic-theme="galaxy"] .admin-page-frame {
      background-image:
        linear-gradient(rgba(8,2,22,.24),rgba(8,2,22,.70)),
        url("${galaxyArt}") !important;
      background-position:center center !important;
      background-size:cover !important;
      background-repeat:no-repeat !important;
      background-attachment:fixed !important;
    }

    html[data-cosmic-theme="blackhole"] .talenta-shell,
    html[data-cosmic-theme="blackhole"] .talenta-main,
    html[data-cosmic-theme="blackhole"] .admin-page-frame {
      background-image:
        linear-gradient(rgba(0,3,8,.18),rgba(0,3,8,.74)),
        url("${blackholeArt}") !important;
      background-position:center center !important;
      background-size:cover !important;
      background-repeat:no-repeat !important;
      background-attachment:fixed !important;
    }

    html[data-cosmic-theme="nebula"] .talenta-shell,
    html[data-cosmic-theme="nebula"] .talenta-main,
    html[data-cosmic-theme="nebula"] .admin-page-frame {
      background-image:
        linear-gradient(rgba(10,2,17,.24),rgba(10,2,17,.72)),
        url("${nebulaArt}") !important;
      background-position:center center !important;
      background-size:cover !important;
      background-repeat:no-repeat !important;
      background-attachment:fixed !important;
    }

    html[data-cosmic-theme="aurora"] .talenta-shell,
    html[data-cosmic-theme="aurora"] .talenta-main,
    html[data-cosmic-theme="aurora"] .admin-page-frame {
      background-image:
        linear-gradient(rgba(0,7,11,.16),rgba(0,7,11,.62)),
        url("/aurora-background.webp") !important;
      background-position:center center !important;
      background-size:cover !important;
      background-repeat:no-repeat !important;
      background-attachment:fixed !important;
    }

    html[data-cosmic-theme] .executive-dashboard {
      max-width:1440px !important;
      margin:0 auto !important;
      padding:22px 26px 32px !important;
    }

    html[data-cosmic-theme] .executive-dashboard .executive-stats {
      grid-template-columns:repeat(4,minmax(0,1fr)) !important;
      gap:14px !important;
      margin:14px 0 !important;
    }

    html[data-cosmic-theme] .executive-dashboard .stat-card,
    html[data-cosmic-theme] .executive-dashboard .panel {
      background:rgba(5,16,38,.70) !important;
      border:1px solid color-mix(in srgb,var(--pt-accent-2) 30%,transparent) !important;
      box-shadow:0 20px 55px rgba(0,0,0,.24),inset 0 1px rgba(255,255,255,.045) !important;
      backdrop-filter:blur(13px) saturate(120%) !important;
      -webkit-backdrop-filter:blur(13px) saturate(120%) !important;
    }

    html[data-cosmic-theme] .executive-dashboard .stat-card {
      min-height:128px !important;
      padding:17px !important;
      border-radius:20px !important;
    }

    html[data-cosmic-theme] .executive-dashboard .panel {
      border-radius:20px !important;
    }

    html[data-cosmic-theme] .executive-dashboard .dashboard-grid-top {
      grid-template-columns:minmax(0,1.72fr) minmax(300px,.72fr) !important;
      gap:14px !important;
    }

    html[data-cosmic-theme] .executive-dashboard .dashboard-grid-bottom {
      grid-template-columns:minmax(0,1.35fr) minmax(300px,.85fr) !important;
      gap:14px !important;
      margin-top:14px !important;
    }

    html[data-cosmic-theme] .executive-dashboard .command-strip {
      min-height:92px !important;
      padding:17px 20px !important;
      border-radius:20px !important;
      border:1px solid color-mix(in srgb,var(--pt-accent) 36%,transparent) !important;
      background:linear-gradient(135deg,color-mix(in srgb,var(--pt-accent-2) 18%,transparent),rgba(4,14,32,.68)) !important;
      box-shadow:0 22px 60px rgba(0,0,0,.25),inset 0 1px rgba(255,255,255,.05) !important;
      backdrop-filter:blur(16px) saturate(120%) !important;
    }

    html[data-cosmic-theme] .executive-dashboard .quick-action {
      min-height:52px !important;
      margin:7px 14px !important;
      border-radius:13px !important;
      background:rgba(255,255,255,.035) !important;
      border:1px solid rgba(255,255,255,.08) !important;
      color:#f5f8ff !important;
    }

    html[data-cosmic-theme] .executive-dashboard h1,
    html[data-cosmic-theme] .executive-dashboard h2,
    html[data-cosmic-theme] .executive-dashboard h3,
    html[data-cosmic-theme] .executive-dashboard strong {
      color:#f7fbff !important;
    }

    html[data-cosmic-theme] .executive-dashboard .panel-head p,
    html[data-cosmic-theme] .executive-dashboard .dept-row span {
      color:#9eb2cd !important;
    }

    @media(max-width:1200px){
      html[data-cosmic-theme] .executive-dashboard .executive-stats {
        grid-template-columns:repeat(2,minmax(0,1fr)) !important;
      }
    }

    
    /* =========================================================
       PROJECT BY TIRTA — WEB COSMIC IMAGE ENGINE V2
       Web only:
       - memakai artwork 5 tema terbaru
       - background artwork menjadi visual utama
       - sidebar mengikuti karakter tema
       - Professional tidak disentuh
       - Aurora tanpa star overlay
       ========================================================= */

    @media (min-width: 900px) {

      /* -------------------------
         THEME VARIABLES
         ------------------------- */
      html[data-cosmic-theme="sun"] {
        --pt-web-theme-side: rgba(72, 32, 7, .84);
        --pt-web-theme-glow: rgba(255, 183, 75, .24);
      }

      html[data-cosmic-theme="moon"] {
        --pt-web-theme-side: rgba(9, 27, 58, .84);
        --pt-web-theme-glow: rgba(103, 188, 255, .23);
      }

      html[data-cosmic-theme="galaxy"] {
        --pt-web-theme-side: rgba(24, 8, 58, .84);
        --pt-web-theme-glow: rgba(184, 108, 255, .24);
      }

      html[data-cosmic-theme="blackhole"] {
        --pt-web-theme-side: rgba(4, 22, 34, .86);
        --pt-web-theme-glow: rgba(64, 216, 255, .25);
      }

      html[data-cosmic-theme="nebula"] {
        --pt-web-theme-side: rgba(39, 7, 37, .84);
        --pt-web-theme-glow: rgba(255, 104, 211, .24);
      }

      html[data-cosmic-theme="aurora"] {
        --pt-web-theme-side: rgba(4, 28, 28, .78);
        --pt-web-theme-glow: rgba(109, 244, 190, .24);
      }

      /* -------------------------
         BODY BACKGROUND
         ------------------------- */

      html[data-cosmic-theme="sun"] body {
        background:
          linear-gradient(rgba(4, 7, 14, .18), rgba(4, 7, 14, .66)),
          url("${sunArt}") center center / cover no-repeat fixed !important;
      }

      html[data-cosmic-theme="moon"] body {
        background:
          linear-gradient(rgba(3, 8, 20, .16), rgba(3, 8, 20, .66)),
          url("${moonArt}") center center / cover no-repeat fixed !important;
      }

      html[data-cosmic-theme="galaxy"] body {
        background:
          linear-gradient(rgba(12, 2, 27, .18), rgba(12, 2, 27, .68)),
          url("${galaxyArt}") center center / cover no-repeat fixed !important;
      }

      html[data-cosmic-theme="blackhole"] body {
        background:
          linear-gradient(rgba(0, 4, 9, .12), rgba(0, 4, 9, .70)),
          url("${blackholeArt}") center center / cover no-repeat fixed !important;
      }

      html[data-cosmic-theme="nebula"] body {
        background:
          linear-gradient(rgba(12, 2, 17, .16), rgba(12, 2, 17, .70)),
          url("${nebulaArt}") center center / cover no-repeat fixed !important;
      }

      html[data-cosmic-theme="aurora"] body {
        background:
          linear-gradient(rgba(0, 8, 10, .10), rgba(0, 8, 10, .54)),
          url("/aurora-background.webp") center center / cover no-repeat fixed !important;
      }

      /* -------------------------
         REMOVE EXTRA WEB NOISE
         ------------------------- */

      html[data-cosmic-theme="aurora"] body::before {
        opacity: 0 !important;
        animation: none !important;
        background-image: none !important;
      }

      html[data-cosmic-theme="aurora"] body::after {
        background: linear-gradient(
          180deg,
          transparent 0 64%,
          rgba(0, 0, 0, .12) 100%
        ) !important;
      }

      html[data-cosmic-theme="sun"] body::before,
      html[data-cosmic-theme="moon"] body::before,
      html[data-cosmic-theme="galaxy"] body::before,
      html[data-cosmic-theme="blackhole"] body::before,
      html[data-cosmic-theme="nebula"] body::before {
        opacity: .10 !important;
      }

      /* -------------------------
         MAIN SHELL
         ------------------------- */

      html[data-cosmic-theme="sun"] .talenta-shell,
      html[data-cosmic-theme="sun"] .talenta-main,
      html[data-cosmic-theme="sun"] .admin-page-frame {
        background:
          linear-gradient(rgba(4, 7, 14, .08), rgba(4, 7, 14, .28)),
          url("${sunArt}") center center / cover fixed no-repeat !important;
      }

      html[data-cosmic-theme="moon"] .talenta-shell,
      html[data-cosmic-theme="moon"] .talenta-main,
      html[data-cosmic-theme="moon"] .admin-page-frame {
        background:
          linear-gradient(rgba(3, 8, 20, .08), rgba(3, 8, 20, .30)),
          url("${moonArt}") center center / cover fixed no-repeat !important;
      }

      html[data-cosmic-theme="galaxy"] .talenta-shell,
      html[data-cosmic-theme="galaxy"] .talenta-main,
      html[data-cosmic-theme="galaxy"] .admin-page-frame {
        background:
          linear-gradient(rgba(10, 2, 24, .10), rgba(10, 2, 24, .32)),
          url("${galaxyArt}") center center / cover fixed no-repeat !important;
      }

      html[data-cosmic-theme="blackhole"] .talenta-shell,
      html[data-cosmic-theme="blackhole"] .talenta-main,
      html[data-cosmic-theme="blackhole"] .admin-page-frame {
        background:
          linear-gradient(rgba(0, 4, 8, .06), rgba(0, 4, 8, .34)),
          url("${blackholeArt}") center center / cover fixed no-repeat !important;
      }

      html[data-cosmic-theme="nebula"] .talenta-shell,
      html[data-cosmic-theme="nebula"] .talenta-main,
      html[data-cosmic-theme="nebula"] .admin-page-frame {
        background:
          linear-gradient(rgba(11, 2, 16, .08), rgba(11, 2, 16, .34)),
          url("${nebulaArt}") center center / cover fixed no-repeat !important;
      }

      html[data-cosmic-theme="aurora"] .talenta-shell,
      html[data-cosmic-theme="aurora"] .talenta-main,
      html[data-cosmic-theme="aurora"] .admin-page-frame {
        background:
          linear-gradient(rgba(0, 8, 9, .05), rgba(0, 8, 9, .22)),
          url("/aurora-background.webp") center center / cover fixed no-repeat !important;
      }

      /* -------------------------
         SIDEBAR
         ------------------------- */

      html[data-cosmic-theme] .sidebar {
        background:
          linear-gradient(
            180deg,
            var(--pt-web-theme-side),
            rgba(2, 8, 18, .90)
          ) !important;

        border-right:
          1px solid
          color-mix(
            in srgb,
            var(--pt-accent-2, #83bdfb) 28%,
            transparent
          ) !important;

        box-shadow:
          18px 0 52px rgba(0,0,0,.28),
          inset -1px 0 var(--pt-web-theme-glow) !important;

        backdrop-filter:
          blur(18px)
          saturate(125%) !important;

        -webkit-backdrop-filter:
          blur(18px)
          saturate(125%) !important;
      }

      html[data-cosmic-theme] .sidebar-head,
      html[data-cosmic-theme] .topbar {
        border-color:
          color-mix(
            in srgb,
            var(--pt-accent-2, #83bdfb) 24%,
            transparent
          ) !important;
      }

      html[data-cosmic-theme] .nav-item.active {
        background:
          linear-gradient(
            135deg,
            color-mix(
              in srgb,
              var(--pt-accent, #e4d1a0) 24%,
              transparent
            ),
            color-mix(
              in srgb,
              var(--pt-accent-2, #83bdfb) 12%,
              transparent
            )
          ) !important;

        border-color:
          color-mix(
            in srgb,
            var(--pt-accent, #e4d1a0) 42%,
            transparent
          ) !important;

        box-shadow:
          0 8px 26px rgba(0,0,0,.16),
          inset 0 1px rgba(255,255,255,.07) !important;
      }

      html[data-cosmic-theme] .brand-mark {
        box-shadow:
          0 10px 28px rgba(0,0,0,.24),
          0 0 30px var(--pt-web-theme-glow) !important;
      }

      /* -------------------------
         TOPBAR
         ------------------------- */

      html[data-cosmic-theme] .topbar {
        background:
          rgba(3, 10, 24, .62) !important;

        backdrop-filter:
          blur(18px)
          saturate(130%) !important;

        -webkit-backdrop-filter:
          blur(18px)
          saturate(130%) !important;
      }

      /* -------------------------
         CONTENT PANELS
         ------------------------- */

      html[data-cosmic-theme] .panel,
      html[data-cosmic-theme] .card,
      html[data-cosmic-theme] .stat-card,
      html[data-cosmic-theme] .executive-chart,
      html[data-cosmic-theme] .attendance-health,
      html[data-cosmic-theme] .quick,
      html[data-cosmic-theme] .table-panel,
      html[data-cosmic-theme] .form-panel {
        background:
          linear-gradient(
            145deg,
            rgba(5, 17, 39, .74),
            rgba(3, 10, 26, .58)
          ) !important;

        border-color:
          color-mix(
            in srgb,
            var(--pt-accent-2, #83bdfb) 24%,
            transparent
          ) !important;

        box-shadow:
          0 20px 58px rgba(0,0,0,.22),
          inset 0 1px rgba(255,255,255,.045) !important;

        backdrop-filter:
          blur(14px)
          saturate(120%) !important;

        -webkit-backdrop-filter:
          blur(14px)
          saturate(120%) !important;
      }

      html[data-cosmic-theme] .panel:hover,
      html[data-cosmic-theme] .stat-card:hover,
      html[data-cosmic-theme] .quick:hover {
        border-color:
          color-mix(
            in srgb,
            var(--pt-accent, #e4d1a0) 38%,
            transparent
          ) !important;
      }
    }

    
    /* =========================================================
       PROJECT BY TIRTA — WEB SIDEBAR IMAGE CONTINUITY
       Semua Cosmic mengikuti karakter Aurora:
       background tema tetap terlihat sampai area sidebar.
       Professional tidak disentuh.
       ========================================================= */

    @media (min-width: 900px) {

      html[data-cosmic-theme="sun"] .sidebar,
      html[data-cosmic-theme="moon"] .sidebar,
      html[data-cosmic-theme="galaxy"] .sidebar,
      html[data-cosmic-theme="blackhole"] .sidebar,
      html[data-cosmic-theme="nebula"] .sidebar,
      html[data-cosmic-theme="aurora"] .sidebar {
        background: rgba(3, 10, 24, .30) !important;
        background-image: none !important;

        border-right: 1px solid
          color-mix(
            in srgb,
            var(--pt-accent-2, #83bdfb) 26%,
            transparent
          ) !important;

        box-shadow:
          10px 0 38px rgba(0,0,0,.16),
          inset -1px 0 rgba(255,255,255,.045) !important;

        backdrop-filter: blur(14px) saturate(135%) !important;
        -webkit-backdrop-filter: blur(14px) saturate(135%) !important;
      }

      html[data-cosmic-theme] .sidebar-head {
        background: rgba(3, 10, 24, .15) !important;
        backdrop-filter: blur(10px) saturate(130%) !important;
        -webkit-backdrop-filter: blur(10px) saturate(130%) !important;
      }

      html[data-cosmic-theme] .nav-item {
        background: transparent !important;
        border-color: transparent !important;
      }

      html[data-cosmic-theme] .nav-item:hover {
        background: color-mix(
          in srgb,
          var(--pt-accent-2, #83bdfb) 9%,
          transparent
        ) !important;
      }

      html[data-cosmic-theme] .nav-item.active {
        background: linear-gradient(
          135deg,
          color-mix(
            in srgb,
            var(--pt-accent, #e4d1a0) 20%,
            transparent
          ),
          color-mix(
            in srgb,
            var(--pt-accent-2, #83bdfb) 10%,
            transparent
          )
        ) !important;

        border-color: color-mix(
          in srgb,
          var(--pt-accent, #e4d1a0) 36%,
          transparent
        ) !important;

        box-shadow:
          0 8px 26px rgba(0,0,0,.16),
          inset 0 1px rgba(255,255,255,.07) !important;
      }

      html[data-cosmic-theme] .brand-mark {
        box-shadow:
          0 10px 28px rgba(0,0,0,.24),
          0 0 30px color-mix(
            in srgb,
            var(--pt-accent, #e4d1a0) 18%,
            transparent
          ) !important;
      }

      html[data-cosmic-theme="aurora"] .sidebar {
        background: rgba(2, 18, 18, .22) !important;
        box-shadow:
          10px 0 34px rgba(0,0,0,.12),
          inset -1px 0 rgba(120,255,210,.10) !important;
      }
    }

    
    /* =========================================================
       PROJECT BY TIRTA — SIDEBAR THEME ART V3
       Sidebar Web menggunakan artwork tema yang sama.
       Professional tidak disentuh.
       ========================================================= */

    @media (min-width: 900px) {

      html[data-cosmic-theme="sun"] .sidebar {
        background-image:
          linear-gradient(
            rgba(40, 12, 2, .10),
            rgba(20, 6, 1, .24)
          ),
          url("${sunArt}") !important;
      }

      html[data-cosmic-theme="moon"] .sidebar {
        background-image:
          linear-gradient(
            rgba(3, 12, 32, .08),
            rgba(2, 8, 24, .22)
          ),
          url("${moonArt}") !important;
      }

      html[data-cosmic-theme="galaxy"] .sidebar {
        background-image:
          linear-gradient(
            rgba(19, 4, 43, .08),
            rgba(10, 2, 26, .24)
          ),
          url("${galaxyArt}") !important;
      }

      html[data-cosmic-theme="blackhole"] .sidebar {
        background-image:
          linear-gradient(
            rgba(0, 10, 18, .07),
            rgba(0, 4, 10, .24)
          ),
          url("${blackholeArt}") !important;
      }

      html[data-cosmic-theme="nebula"] .sidebar {
        background-image:
          linear-gradient(
            rgba(38, 3, 30, .08),
            rgba(16, 2, 19, .24)
          ),
          url("${nebulaArt}") !important;
      }

      html[data-cosmic-theme="aurora"] .sidebar {
        background-image:
          linear-gradient(
            rgba(0, 18, 16, .04),
            rgba(0, 9, 10, .16)
          ),
          url("/aurora-background.webp") !important;
      }

      html[data-cosmic-theme="sun"] .sidebar,
      html[data-cosmic-theme="moon"] .sidebar,
      html[data-cosmic-theme="galaxy"] .sidebar,
      html[data-cosmic-theme="blackhole"] .sidebar,
      html[data-cosmic-theme="nebula"] .sidebar,
      html[data-cosmic-theme="aurora"] .sidebar {
        background-repeat: no-repeat !important;
        background-position: center center !important;
        background-size: cover !important;
        background-attachment: fixed !important;

        background-color: transparent !important;

        border-right:
          1px solid
          color-mix(
            in srgb,
            var(--pt-accent-2, #83bdfb) 30%,
            transparent
          ) !important;

        box-shadow:
          10px 0 38px rgba(0,0,0,.15),
          inset -1px 0 rgba(255,255,255,.05) !important;

        backdrop-filter:
          blur(8px)
          saturate(125%) !important;

        -webkit-backdrop-filter:
          blur(8px)
          saturate(125%) !important;
      }

      /* Jangan biarkan kepala/footer sidebar menjadi kotak gelap */
      html[data-cosmic-theme] .sidebar-head,
      html[data-cosmic-theme] .sidebar-nav,
      html[data-cosmic-theme] .sidebar-footer {
        background: transparent !important;
        background-image: none !important;
      }

      /* Menu transparan agar artwork tetap terlihat */
      html[data-cosmic-theme] .nav-item {
        background: transparent !important;
      }

      html[data-cosmic-theme] .nav-item:hover {
        background:
          color-mix(
            in srgb,
            var(--pt-accent-2, #83bdfb) 10%,
            transparent
          ) !important;
      }

      html[data-cosmic-theme] .nav-item.active {
        background:
          linear-gradient(
            135deg,
            color-mix(
              in srgb,
              var(--pt-accent, #e4d1a0) 24%,
              transparent
            ),
            color-mix(
              in srgb,
              var(--pt-accent-2, #83bdfb) 12%,
              transparent
            )
          ) !important;
      }

      /* Branding/sidebar controls tetap terlihat */
      html[data-cosmic-theme] .sidebar .brand-mark {
        background: rgba(255,255,255,.055) !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }
    }

    
    /* =========================================================
       PROJECT BY TIRTA — SIDEBAR THEME ART FINAL V4
       Sidebar memakai artwork tema yang sama dengan halaman.
       Background fixed agar posisi artwork menyatu dengan area
       utama seperti Aurora.
       Professional tidak disentuh.
       ========================================================= */

    @media (min-width: 900px) {

      html[data-cosmic-theme="sun"] .sidebar {
        background-image:
          linear-gradient(
            rgba(40, 12, 2, .12),
            rgba(15, 5, 1, .28)
          ),
          url("${sunArt}") !important;
      }

      html[data-cosmic-theme="moon"] .sidebar {
        background-image:
          linear-gradient(
            rgba(3, 12, 32, .10),
            rgba(2, 8, 24, .26)
          ),
          url("${moonArt}") !important;
      }

      html[data-cosmic-theme="galaxy"] .sidebar {
        background-image:
          linear-gradient(
            rgba(19, 4, 43, .10),
            rgba(10, 2, 26, .28)
          ),
          url("${galaxyArt}") !important;
      }

      html[data-cosmic-theme="blackhole"] .sidebar {
        background-image:
          linear-gradient(
            rgba(0, 10, 18, .08),
            rgba(0, 4, 10, .30)
          ),
          url("${blackholeArt}") !important;
      }

      html[data-cosmic-theme="nebula"] .sidebar {
        background-image:
          linear-gradient(
            rgba(38, 3, 30, .10),
            rgba(16, 2, 19, .28)
          ),
          url("${nebulaArt}") !important;
      }

      html[data-cosmic-theme="aurora"] .sidebar {
        background-image:
          linear-gradient(
            rgba(0, 18, 16, .05),
            rgba(0, 9, 10, .18)
          ),
          url("/aurora-background.webp") !important;
      }

      /* ARTWORK SIDEBAR */
      html[data-cosmic-theme="sun"] .sidebar,
      html[data-cosmic-theme="moon"] .sidebar,
      html[data-cosmic-theme="galaxy"] .sidebar,
      html[data-cosmic-theme="blackhole"] .sidebar,
      html[data-cosmic-theme="nebula"] .sidebar,
      html[data-cosmic-theme="aurora"] .sidebar {
        background-repeat: no-repeat !important;
        background-position: center center !important;
        background-size: cover !important;
        background-attachment: fixed !important;

        background-color: transparent !important;

        border-right:
          1px solid
          color-mix(
            in srgb,
            var(--pt-accent-2, #83bdfb) 28%,
            transparent
          ) !important;

        box-shadow:
          10px 0 40px rgba(0,0,0,.14),
          inset -1px 0 rgba(255,255,255,.045) !important;

        backdrop-filter:
          blur(7px)
          saturate(130%) !important;

        -webkit-backdrop-filter:
          blur(7px)
          saturate(130%) !important;

        isolation: isolate !important;
      }

      /* HEADER / NAV / FOOTER SIDEBAR TRANSPARAN */
      html[data-cosmic-theme] .sidebar-head,
      html[data-cosmic-theme] .sidebar-nav,
      html[data-cosmic-theme] .sidebar-bottom {
        background: transparent !important;
        background-image: none !important;
      }

      /* JANGAN TUTUP ARTWORK DENGAN NAV GROUP */
      html[data-cosmic-theme] .nav-group,
      html[data-cosmic-theme] .nav-group-items {
        background: transparent !important;
        background-image: none !important;
      }

      /* MENU */
      html[data-cosmic-theme] .nav-item {
        background: transparent !important;
        border-color: transparent !important;
        box-shadow: none !important;
      }

      html[data-cosmic-theme] .nav-item:hover {
        background:
          color-mix(
            in srgb,
            var(--pt-accent-2, #83bdfb) 12%,
            transparent
          ) !important;
      }

      html[data-cosmic-theme] .nav-item.active {
        background:
          linear-gradient(
            135deg,
            color-mix(
              in srgb,
              var(--pt-accent, #e4d1a0) 25%,
              transparent
            ),
            color-mix(
              in srgb,
              var(--pt-accent-2, #83bdfb) 12%,
              transparent
            )
          ) !important;

        border:
          1px solid
          color-mix(
            in srgb,
            var(--pt-accent, #e4d1a0) 38%,
            transparent
          ) !important;

        box-shadow:
          inset 0 1px rgba(255,255,255,.06),
          0 6px 20px rgba(0,0,0,.12) !important;
      }

      html[data-cosmic-theme] .nav-title {
        background: transparent !important;
        border-color: transparent !important;
      }

      /* LOGO BRAND */
      html[data-cosmic-theme] .sidebar .brand-mark {
        background: rgba(255,255,255,.06) !important;
        border: 1px solid
          color-mix(
            in srgb,
            var(--pt-accent, #e4d1a0) 30%,
            transparent
          ) !important;
        box-shadow:
          0 8px 26px rgba(0,0,0,.18),
          0 0 28px color-mix(
            in srgb,
            var(--pt-accent, #e4d1a0) 15%,
            transparent
          ) !important;
      }

      /* AURORA PALING RINGAN */
      html[data-cosmic-theme="aurora"] .sidebar {
        background-color: transparent !important;
        box-shadow:
          10px 0 34px rgba(0,0,0,.10),
          inset -1px 0 rgba(120,255,210,.10) !important;
      }
    }

    
    /* =========================================================
       PROJECT BY TIRTA — SIDEBAR ARTWORK LAYER FINAL V5
       Artwork dibuat sebagai pseudo-layer khusus.
       Ini sengaja tidak memakai background milik .sidebar,
       sehingga rule background lama tidak dapat menutup gambar.
       ========================================================= */

    @media (min-width: 900px) {

      html[data-cosmic-theme="sun"] .talenta-shell .sidebar,
      html[data-cosmic-theme="moon"] .talenta-shell .sidebar,
      html[data-cosmic-theme="galaxy"] .talenta-shell .sidebar,
      html[data-cosmic-theme="blackhole"] .talenta-shell .sidebar,
      html[data-cosmic-theme="nebula"] .talenta-shell .sidebar,
      html[data-cosmic-theme="aurora"] .talenta-shell .sidebar {
        position: relative !important;
        isolation: isolate !important;
        overflow: hidden !important;
        background-color: transparent !important;
      }

      /* ARTWORK UTAMA */
      html[data-cosmic-theme="sun"] .talenta-shell .sidebar::before,
      html[data-cosmic-theme="moon"] .talenta-shell .sidebar::before,
      html[data-cosmic-theme="galaxy"] .talenta-shell .sidebar::before,
      html[data-cosmic-theme="blackhole"] .talenta-shell .sidebar::before,
      html[data-cosmic-theme="nebula"] .talenta-shell .sidebar::before,
      html[data-cosmic-theme="aurora"] .talenta-shell .sidebar::before {
        content: "" !important;
        position: absolute !important;
        inset: 0 !important;
        z-index: 0 !important;
        display: block !important;

        background-repeat: no-repeat !important;
        background-position: center center !important;
        background-size: cover !important;

        pointer-events: none !important;

        opacity: 1 !important;
        filter: none !important;
        transform: none !important;

        border-radius: inherit !important;
      }

      html[data-cosmic-theme="sun"] .talenta-shell .sidebar::before {
        background-image:
          linear-gradient(rgba(28,8,1,.18), rgba(12,3,0,.30)),
          url("${sunArt}") !important;
      }

      html[data-cosmic-theme="moon"] .talenta-shell .sidebar::before {
        background-image:
          linear-gradient(rgba(2,9,25,.14), rgba(1,5,18,.28)),
          url("${moonArt}") !important;
      }

      html[data-cosmic-theme="galaxy"] .talenta-shell .sidebar::before {
        background-image:
          linear-gradient(rgba(12,2,30,.14), rgba(7,1,18,.30)),
          url("${galaxyArt}") !important;
      }

      html[data-cosmic-theme="blackhole"] .talenta-shell .sidebar::before {
        background-image:
          linear-gradient(rgba(0,7,13,.12), rgba(0,3,8,.32)),
          url("${blackholeArt}") !important;
      }

      html[data-cosmic-theme="nebula"] .talenta-shell .sidebar::before {
        background-image:
          linear-gradient(rgba(22,2,22,.14), rgba(10,1,14,.32)),
          url("${nebulaArt}") !important;
      }

      html[data-cosmic-theme="aurora"] .talenta-shell .sidebar::before {
        background-image:
          linear-gradient(rgba(0,10,10,.06), rgba(0,5,7,.18)),
          url("/aurora-background.webp") !important;
      }

      /* GLASS TIPIS DI ATAS GAMBAR, BUKAN KOTAK GELAP */
      html[data-cosmic-theme="sun"] .talenta-shell .sidebar::after,
      html[data-cosmic-theme="moon"] .talenta-shell .sidebar::after,
      html[data-cosmic-theme="galaxy"] .talenta-shell .sidebar::after,
      html[data-cosmic-theme="blackhole"] .talenta-shell .sidebar::after,
      html[data-cosmic-theme="nebula"] .talenta-shell .sidebar::after,
      html[data-cosmic-theme="aurora"] .talenta-shell .sidebar::after {
        content: "" !important;
        position: absolute !important;
        inset: 0 !important;
        z-index: 1 !important;
        pointer-events: none !important;

        background: linear-gradient(
          180deg,
          rgba(3,8,18,.06),
          rgba(3,8,18,.14)
        ) !important;

        box-shadow: inset -1px 0 rgba(255,255,255,.05) !important;
      }

      /* SEMUA ISI SIDEBAR DI ATAS ARTWORK */
      html[data-cosmic-theme] .talenta-shell .sidebar > * {
        position: relative !important;
        z-index: 2 !important;
      }

      html[data-cosmic-theme] .talenta-shell .sidebar-head,
      html[data-cosmic-theme] .talenta-shell .sidebar-nav,
      html[data-cosmic-theme] .talenta-shell .sidebar-bottom,
      html[data-cosmic-theme] .talenta-shell .nav-group,
      html[data-cosmic-theme] .talenta-shell .nav-group-items {
        background: transparent !important;
        background-image: none !important;
      }

      html[data-cosmic-theme] .talenta-shell .sidebar .nav-item,
      html[data-cosmic-theme] .talenta-shell .sidebar .nav-title,
      html[data-cosmic-theme] .talenta-shell .sidebar .logout {
        background: transparent !important;
        box-shadow: none !important;
      }

      html[data-cosmic-theme] .talenta-shell .sidebar .nav-item:hover {
        background: rgba(255,255,255,.07) !important;
      }

      html[data-cosmic-theme] .talenta-shell .sidebar .nav-item.active {
        background: color-mix(
          in srgb,
          var(--pt-accent, #e4d1a0) 24%,
          transparent
        ) !important;

        border-color: color-mix(
          in srgb,
          var(--pt-accent, #e4d1a0) 36%,
          transparent
        ) !important;
      }
    }

  `;

  document.head.appendChild(style);

  // Project by Tirta — Cosmic Web Card Hierarchy Cleanup V1
  // Visual-only: wrapper card transparan, isi tetap utuh.
  // Tidak berlaku untuk Professional dan tidak berlaku untuk Android.
  const hierarchyStyle = document.createElement('style');
  hierarchyStyle.id = 'project-tirta-card-hierarchy-cleanup-v1';
  hierarchyStyle.textContent = `
    @media (min-width: 900px) {

      /* BPJS: panel besar hanya membungkus heading + KPI + tabel */
      html[data-cosmic-theme] .talenta-shell .panel:has(> .page-heading + .mini-kpi-row) {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }

      /* Recruitment Command:
         panel luar hanya membungkus heading + kumpulan stat-card */
      html[data-cosmic-theme] .talenta-shell .content-grid > .panel:has(> .panel-head + .mini-kpi-row) {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }

      /* Enterprise Analytics:
         lepaskan panel luar agar KPI/list tidak menjadi card di dalam card */
      html[data-cosmic-theme] .talenta-shell .panel:has(> .mini-kpi-row):has(> .panel .metric-row) {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }

      /* Professional Suite: lepaskan panel pembungkus action-card */
      html[data-cosmic-theme] .professional-suite .content-grid > .panel:has(> .action-card-grid) {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }

      /* Inner analytics panel tetap menjadi unit data mandiri */
      html[data-cosmic-theme] .talenta-shell .panel:has(> .metric-row) {
        border-color: var(--pt-cosmic-line) !important;
      }
    }
  `;
  document.head.appendChild(hierarchyStyle);

  const hierarchyStyleV3 = document.createElement('style');
  hierarchyStyleV3.id = 'card-hierarchy-cleanup-v3';
  hierarchyStyleV3.textContent = `
    @media (min-width: 900px) {
      /* Wrapper yang hanya berisi header panel, tanpa unit konten */
      html[data-cosmic-theme] .talenta-shell .panel:has(> .panel-head):not(:has(> :not(.panel-head))) {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }
    }
  `;
  document.head.appendChild(hierarchyStyleV3);

  const hierarchyStyleV4 = document.createElement('style');
  hierarchyStyleV4.id = 'card-hierarchy-cleanup-v4';
  hierarchyStyleV4.textContent = `
    @media (min-width: 900px) {
      /* Panel yang hanya berfungsi sebagai pembungkus heading */
      html[data-cosmic-theme] .talenta-shell .panel:has(> .page-heading):not(:has(> .table-wrap)):not(:has(> .mini-kpi-row)):not(:has(> .panel-head)):not(:has(> .content-grid)):not(:has(> .form-two)) {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }
    }
  `;
  document.head.appendChild(hierarchyStyleV4);

  const hierarchyStyleV5 = document.createElement('style');
  hierarchyStyleV5.id = 'card-hierarchy-cleanup-v5';
  hierarchyStyleV5.textContent = `
    @media (min-width: 900px) {
      /* Wrapper layout tidak boleh terlihat sebagai card kedua */
      html[data-cosmic-theme] .talenta-shell .content-grid > .panel:has(> .action-card-grid),
      html[data-cosmic-theme] .talenta-shell .content-grid > .panel:has(> .mini-kpi-row) {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }

      /* Grid dan isi tetap tampil normal */
      html[data-cosmic-theme] .talenta-shell .action-card-grid,
      html[data-cosmic-theme] .talenta-shell .mini-kpi-row {
        background: transparent !important;
      }
    }
  `;
  document.head.appendChild(hierarchyStyleV5);

  const hierarchyStyleV6 = document.createElement('style');
  hierarchyStyleV6.id = 'card-hierarchy-cleanup-v6';
  hierarchyStyleV6.textContent = `
    @media (min-width: 900px) {
      /* Hapus frame besar pembungkus halaman/module */
      html[data-cosmic-theme] .talenta-shell .module-page {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        backdrop-filter: none !important;
        padding: 0 0 40px !important;
      }

      /* Toolbar hanya menjadi layout, bukan card */
      html[data-cosmic-theme] .talenta-shell .toolbar-panel {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        padding: 0 0 18px !important;
        backdrop-filter: none !important;
      }

      /* Semua field Web Cosmic tidak boleh kembali menjadi putih */
      html[data-cosmic-theme] .talenta-shell .toolbar-panel input,
      html[data-cosmic-theme] .talenta-shell .toolbar-panel select,
      html[data-cosmic-theme] .talenta-shell .toolbar-panel textarea,
      html[data-cosmic-theme] .talenta-shell .module-page input,
      html[data-cosmic-theme] .talenta-shell .module-page select,
      html[data-cosmic-theme] .talenta-shell .module-page textarea {
        background: rgba(5,16,38,.72) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
      }
    }
  `;
  document.head.appendChild(hierarchyStyleV6);

  const hierarchyStyleV7 = document.createElement('style');
  hierarchyStyleV7.id = 'card-hierarchy-cleanup-v7';
  hierarchyStyleV7.textContent = `
    /* ID Card Web — buang wrapper besar, pertahankan isi */
    html[data-cosmic-theme] .talenta-shell .id-card-designer.panel,
    html[data-cosmic-theme] .talenta-shell .id-card-pratinjau-panel.panel {
      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
      backdrop-filter: none !important;
      border-radius: 0 !important;
    }

    html[data-cosmic-theme] .talenta-shell .id-card-designer.panel {
      padding: 0 !important;
    }

    /* Vertical preview dibuat lebih proporsional di layar */
    html[data-cosmic-theme] .talenta-shell .id-card-module-vertical .id-card-pratinjau {
      width: min(100%, 300px) !important;
      max-width: 300px !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }

    html[data-cosmic-theme] .talenta-shell .id-card-module-vertical .id-card-pratinjau svg,
    html[data-cosmic-theme] .talenta-shell .id-card-module-vertical .id-card-pratinjau > svg {
      width: 300px !important;
      max-width: 100% !important;
      height: auto !important;
    }

    /* Preview tidak membuat panel luar ikut membesar */
    html[data-cosmic-theme] .talenta-shell .id-card-module-vertical .id-card-pratinjau-panel {
      min-height: 0 !important;
      padding: 0 !important;
    }
  `;
  document.head.appendChild(hierarchyStyleV7);

  const hierarchyGlobalV9 = document.createElement('style');
  hierarchyGlobalV9.id = 'card-hierarchy-cleanup-global-v9';
  hierarchyGlobalV9.textContent = `
    @media (min-width: 900px) {

      /* Lepaskan frame halaman besar */
      html[data-cosmic-theme] .talenta-shell .admin-page-frame,
      html[data-cosmic-theme] .talenta-shell .page,
      html[data-cosmic-theme] .talenta-shell .module-page,
      html[data-cosmic-theme] .talenta-shell .id-card-module {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }

      /* Lepaskan wrapper yang membungkus unit/card lain */
      html[data-cosmic-theme] .talenta-shell .panel:has(
        > .mini-kpi-row,
        > .content-grid,
        > .action-card-grid,
        > .kanban-grid,
        > .panel
      ),
      html[data-cosmic-theme] .talenta-shell .card:has(
        > .mini-kpi-row,
        > .content-grid,
        > .panel,
        > .card
      ),
      html[data-cosmic-theme] .talenta-shell .form-panel:has(
        > .panel,
        > .card
      ),
      html[data-cosmic-theme] .talenta-shell .table-card:has(
        > .panel,
        > .card
      ) {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
      }

      /* Toolbar bukan card */
      html[data-cosmic-theme] .talenta-shell .toolbar-panel {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      /* Hilangkan permukaan putih lama */
      html[data-cosmic-theme] .talenta-shell .mini-kpi,
      html[data-cosmic-theme] .talenta-shell .kanban-col,
      html[data-cosmic-theme] .talenta-shell .kanban-card,
      html[data-cosmic-theme] .talenta-shell .permission-section,
      html[data-cosmic-theme] .talenta-shell .permission-item,
      html[data-cosmic-theme] .talenta-shell .info-box {
        background: rgba(6,18,43,.64) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
      }

      /* ID Card: semua wrapper besar transparan */
      html[data-cosmic-theme] .talenta-shell .id-card-designer,
      html[data-cosmic-theme] .talenta-shell .id-card-pratinjau-panel {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      /* Vertical tetap 300px */
      html[data-cosmic-theme] .talenta-shell .id-card-module-vertical .id-card-pratinjau,
      html[data-cosmic-theme] .talenta-shell .id-card-module-vertical .id-card-pratinjau svg {
        width: 300px !important;
        max-width: 100% !important;
        height: auto !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }
    }
  `;

  document.head.appendChild(hierarchyGlobalV9);

  const cleanupV10 = document.createElement('style');
  cleanupV10.id = 'feedback-announcement-cleanup-v10';
  cleanupV10.textContent = `
    @media (min-width: 900px) {

      /* KOTAK SARAN — buang wrapper card */
      html[data-cosmic-theme] .talenta-shell .feedback-module > .feedback-list-card,
      html[data-cosmic-theme] .talenta-shell .feedback-module > .feedback-detail-card {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }

      /* Judul feedback bukan card */
      html[data-cosmic-theme] .talenta-shell .feedback-card-title {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
      }

      /* PENGUMUMAN — buang frame modul/list */
      html[data-cosmic-theme] .talenta-shell .announcement-module,
      html[data-cosmic-theme] .talenta-shell .announcement-list-card {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }

      /* Hilangkan permukaan putih dari item lama */
      html[data-cosmic-theme] .talenta-shell .announcement-item,
      html[data-cosmic-theme] .talenta-shell .notification-item,
      html[data-cosmic-theme] .talenta-shell .feedback-message {
        background: rgba(6,18,43,.64) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
      }
    }
  `;
  document.head.appendChild(cleanupV10);
  const cleanupV11 = document.createElement('style');
  cleanupV11.id = 'cosmic-global-white-surface-cleanup-v11';
  cleanupV11.textContent = `
    @media (min-width: 900px) {

      /* ===== ORGANISASI ===== */
      html[data-cosmic-theme] .talenta-shell .master-data-module {
        background: transparent !important;
        color: var(--pt-cosmic-text) !important;
      }

      html[data-cosmic-theme] .talenta-shell .master-data-module [style] {
        color: var(--pt-cosmic-text) !important;
      }

      html[data-cosmic-theme] .talenta-shell .master-data-module .master-data-table-card,
      html[data-cosmic-theme] .talenta-shell .master-data-module .master-data-shift-card,
      html[data-cosmic-theme] .talenta-shell .master-data-module .master-data-loading-box {
        background: rgba(6,18,43,.70) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
        box-shadow: none !important;
      }

      html[data-cosmic-theme] .talenta-shell .master-data-module [style*="background: rgb(255, 255, 255)"],
      html[data-cosmic-theme] .talenta-shell .master-data-module [style*="background:#ffffff"],
      html[data-cosmic-theme] .talenta-shell .master-data-module [style*="background: #ffffff"] {
        background: rgba(6,18,43,.70) !important;
      }

      /* ===== OPERASIONAL HR & PUSAT TRANSAKSI HR ===== */
      html[data-cosmic-theme] .talenta-shell .module-page .panel,
      html[data-cosmic-theme] .talenta-shell .module-page .compact-panel,
      html[data-cosmic-theme] .talenta-shell .module-page .table-panel {
        background: linear-gradient(145deg, rgba(14,27,48,.83), rgba(6,14,28,.72)) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
        box-shadow: var(--pt-cosmic-shadow) !important;
      }

      /* Jangan jadikan wrapper module sebagai card */
      html[data-cosmic-theme] .talenta-shell .module-page {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
      }

      /* ===== PENGUMUMAN ===== */
      html[data-cosmic-theme] .talenta-shell .announcement-module,
      html[data-cosmic-theme] .talenta-shell .announcement-hero,
      html[data-cosmic-theme] .talenta-shell .announcement-compose,
      html[data-cosmic-theme] .talenta-shell .announcement-list-card {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        border-radius: 0 !important;
      }

      html[data-cosmic-theme] .talenta-shell .announcement-item {
        background: rgba(6,18,43,.70) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
        box-shadow: none !important;
      }

      /* ===== SEMUA SURFACE PUTIH LAMA DI COSMIC WEB ===== */
      html[data-cosmic-theme] .talenta-shell .table-card,
      html[data-cosmic-theme] .talenta-shell .setting-card,
      html[data-cosmic-theme] .talenta-shell .info-card,
      html[data-cosmic-theme] .talenta-shell .report-card,
      html[data-cosmic-theme] .talenta-shell .feature-card,
      html[data-cosmic-theme] .talenta-shell .org-card,
      html[data-cosmic-theme] .talenta-shell .calendar-card,
      html[data-cosmic-theme] .talenta-shell .form-panel,
      html[data-cosmic-theme] .talenta-shell .detail-panel {
        background: linear-gradient(145deg, rgba(14,27,48,.83), rgba(6,14,28,.72)) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
      }
    }
  `;

  document.head.appendChild(cleanupV11);
  const cosmicWhiteFixV13 = document.createElement('style');
  cosmicWhiteFixV13.id = 'cosmic-white-surface-final-v13';
  cosmicWhiteFixV13.textContent = `
    @media (min-width: 900px) {
      html[data-cosmic-theme] .talenta-shell {
        --panel: rgba(12,24,44,.84) !important;
        --surface: rgba(10,22,42,.80) !important;
        --card: rgba(12,24,44,.84) !important;
        --card-bg: rgba(12,24,44,.84) !important;
        --frame-card-bg: rgba(12,24,44,.84) !important;
        --frame-card-bg-2: rgba(8,18,36,.76) !important;
      }

      html[data-cosmic-theme] .talenta-shell div[style*="background"] {
        background: linear-gradient(145deg,rgba(14,27,48,.84),rgba(6,14,28,.74)) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
      }

      html[data-cosmic-theme] .talenta-shell input[style*="background"],
      html[data-cosmic-theme] .talenta-shell select[style*="background"],
      html[data-cosmic-theme] .talenta-shell textarea[style*="background"] {
        background: rgba(5,16,38,.76) !important;
        color: var(--pt-cosmic-text) !important;
      }

      html[data-cosmic-theme] .talenta-shell .module-page,
      html[data-cosmic-theme] .talenta-shell .master-data-module,
      html[data-cosmic-theme] .talenta-shell .announcement-module,
      html[data-cosmic-theme] .talenta-shell .feedback-module,
      html[data-cosmic-theme] .talenta-shell .id-card-module,
      html[data-cosmic-theme] .talenta-shell .announcement-compose,
      html[data-cosmic-theme] .talenta-shell .announcement-list-card,
      html[data-cosmic-theme] .talenta-shell .announcement-hero,
      html[data-cosmic-theme] .talenta-shell .id-card-designer,
      html[data-cosmic-theme] .talenta-shell .id-card-pratinjau-panel,
      html[data-cosmic-theme] .talenta-shell .id-card-preview-panel {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
      }

      html[data-cosmic-theme] .talenta-shell .panel,
      html[data-cosmic-theme] .talenta-shell .table-panel,
      html[data-cosmic-theme] .talenta-shell .compact-panel,
      html[data-cosmic-theme] .talenta-shell .toolbar-panel,
      html[data-cosmic-theme] .talenta-shell .table-card,
      html[data-cosmic-theme] .talenta-shell .master-data-table-card,
      html[data-cosmic-theme] .talenta-shell .master-data-shift-card,
      html[data-cosmic-theme] .talenta-shell .master-data-loading-box,
      html[data-cosmic-theme] .talenta-shell .card,
      html[data-cosmic-theme] .talenta-shell .mini-kpi,
      html[data-cosmic-theme] .talenta-shell .action-card,
      html[data-cosmic-theme] .talenta-shell .feedback-list-card,
      html[data-cosmic-theme] .talenta-shell .feedback-detail-card {
        background: linear-gradient(145deg,rgba(14,27,48,.84),rgba(6,14,28,.74)) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
      }

      html[data-cosmic-theme] .talenta-shell .announcement-item {
        background: rgba(6,18,43,.72) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
        box-shadow: none !important;
      }
    }
  `;
  document.head.appendChild(cosmicWhiteFixV13);
  const cosmicReadableV14 = document.createElement('style');
  cosmicReadableV14.id = 'cosmic-operasional-readable-v14';
  cosmicReadableV14.textContent = `
    @media (min-width: 900px) {

      /* OPERASIONAL HR — hilangkan frame putih legacy */
      html[data-cosmic-theme] .talenta-shell .module-page,
      html[data-cosmic-theme] .talenta-shell .compact-panel,
      html[data-cosmic-theme] .talenta-shell .table-panel,
      html[data-cosmic-theme] .talenta-shell .toolbar-panel,
      html[data-cosmic-theme] .talenta-shell .form-panel {
        background: linear-gradient(
          145deg,
          rgba(10,22,42,.82),
          rgba(5,14,30,.74)
        ) !important;
        color: var(--pt-cosmic-text) !important;
        border-color: var(--pt-cosmic-line) !important;
        box-shadow: none !important;
      }

      /* Wrapper Operasional HR yang hanya membungkus isi */
      html[data-cosmic-theme] .talenta-shell .module-page > .panel-head,
      html[data-cosmic-theme] .talenta-shell .module-page > .page-heading,
      html[data-cosmic-theme] .talenta-shell .module-page > .section-heading {
        background: transparent !important;
        color: var(--pt-cosmic-text) !important;
        border: 0 !important;
        box-shadow: none !important;
      }

      /* Semua teks di area panel Cosmic harus terang */
      html[data-cosmic-theme] .talenta-shell .panel,
      html[data-cosmic-theme] .talenta-shell .panel *,
      html[data-cosmic-theme] .talenta-shell .compact-panel *,
      html[data-cosmic-theme] .talenta-shell .table-panel * {
        --text-color: var(--pt-cosmic-text);
      }

      html[data-cosmic-theme] .talenta-shell .panel h1,
      html[data-cosmic-theme] .talenta-shell .panel h2,
      html[data-cosmic-theme] .talenta-shell .panel h3,
      html[data-cosmic-theme] .talenta-shell .panel h4,
      html[data-cosmic-theme] .talenta-shell .panel p,
      html[data-cosmic-theme] .talenta-shell .panel label,
      html[data-cosmic-theme] .talenta-shell .panel span,
      html[data-cosmic-theme] .talenta-shell .panel strong {
        color: var(--pt-cosmic-text) !important;
      }

      /* BUTTON / TAB / ACTION yang teksnya masih gelap */
      html[data-cosmic-theme] .talenta-shell button,
      html[data-cosmic-theme] .talenta-shell [role="button"],
      html[data-cosmic-theme] .talenta-shell input[type="button"],
      html[data-cosmic-theme] .talenta-shell input[type="submit"] {
        color: #f5f9ff !important;
        text-shadow: 0 1px 2px rgba(0,0,0,.45) !important;
      }

      /* Tombol gelap dibuat punya kontras yang jelas */
      html[data-cosmic-theme] .talenta-shell .compact-panel button,
      html[data-cosmic-theme] .talenta-shell .table-panel button,
      html[data-cosmic-theme] .talenta-shell .toolbar-panel button {
        color: #ffffff !important;
      }

      /* Tombol/icon yang memakai inline background gelap */
      html[data-cosmic-theme] .talenta-shell button[style*="background"],
      html[data-cosmic-theme] .talenta-shell [role="button"][style*="background"] {
        color: #ffffff !important;
      }

      /* Select dan field */
      html[data-cosmic-theme] .talenta-shell select,
      html[data-cosmic-theme] .talenta-shell input,
      html[data-cosmic-theme] .talenta-shell textarea {
        color: var(--pt-cosmic-text) !important;
      }

      /* Placeholder tetap terbaca */
      html[data-cosmic-theme] .talenta-shell input::placeholder,
      html[data-cosmic-theme] .talenta-shell textarea::placeholder {
        color: rgba(220,232,248,.68) !important;
      }

      /* Table */
      html[data-cosmic-theme] .talenta-shell table,
      html[data-cosmic-theme] .talenta-shell th,
      html[data-cosmic-theme] .talenta-shell td {
        color: var(--pt-cosmic-text) !important;
      }

      /* Link di area operasional */
      html[data-cosmic-theme] .talenta-shell .panel a,
      html[data-cosmic-theme] .talenta-shell .compact-panel a,
      html[data-cosmic-theme] .talenta-shell .table-panel a {
        color: #d9ecff !important;
      }

      /* Hindari surface putih dari inline React */
      html[data-cosmic-theme] .talenta-shell .compact-panel div[style*="background"],
      html[data-cosmic-theme] .talenta-shell .table-panel div[style*="background"] {
        color: var(--pt-cosmic-text) !important;
      }
    }
  `;
  document.head.appendChild(cosmicReadableV14);
  const cosmicTopActionsV15 = document.createElement('style');
  cosmicTopActionsV15.id = 'cosmic-top-actions-readable-v15';
  cosmicTopActionsV15.textContent = `
    @media (min-width: 900px) {

      /* ================================
         AKSI KANAN ATAS — COSMIC WEB
         ================================ */

      html[data-cosmic-theme] .talenta-shell .page-heading-actions,
      html[data-cosmic-theme] .talenta-shell .panel-head-actions,
      html[data-cosmic-theme] .talenta-shell .toolbar-actions,
      html[data-cosmic-theme] .talenta-shell .header-actions,
      html[data-cosmic-theme] .talenta-shell .top-actions,
      html[data-cosmic-theme] .talenta-shell [class*="heading-actions"],
      html[data-cosmic-theme] .talenta-shell [class*="panel-head"][class*="action"],
      html[data-cosmic-theme] .talenta-shell [class*="toolbar"][class*="action"],
      html[data-cosmic-theme] .talenta-shell [class*="top-action"] {
        color: #ffffff !important;
      }

      html[data-cosmic-theme] .talenta-shell .page-heading-actions button,
      html[data-cosmic-theme] .talenta-shell .panel-head-actions button,
      html[data-cosmic-theme] .talenta-shell .toolbar-actions button,
      html[data-cosmic-theme] .talenta-shell .header-actions button,
      html[data-cosmic-theme] .talenta-shell .top-actions button,
      html[data-cosmic-theme] .talenta-shell [class*="heading-actions"] button,
      html[data-cosmic-theme] .talenta-shell [class*="top-action"] button,
      html[data-cosmic-theme] .talenta-shell .page-heading-actions a,
      html[data-cosmic-theme] .talenta-shell .panel-head-actions a,
      html[data-cosmic-theme] .talenta-shell .toolbar-actions a {
        background: linear-gradient(
          135deg,
          rgba(31,93,170,.92),
          rgba(17,54,111,.92)
        ) !important;
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
        border-color: rgba(130,190,255,.55) !important;
        box-shadow: 0 6px 18px rgba(0,0,0,.24) !important;
        opacity: 1 !important;
      }

      /* Teks/span di dalam tombol */
      html[data-cosmic-theme] .talenta-shell .page-heading-actions button *,
      html[data-cosmic-theme] .talenta-shell .panel-head-actions button *,
      html[data-cosmic-theme] .talenta-shell .toolbar-actions button *,
      html[data-cosmic-theme] .talenta-shell .header-actions button *,
      html[data-cosmic-theme] .talenta-shell .top-actions button *,
      html[data-cosmic-theme] .talenta-shell [class*="heading-actions"] button *,
      html[data-cosmic-theme] .talenta-shell [class*="top-action"] button * {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      /* Icon SVG ikut terang */
      html[data-cosmic-theme] .talenta-shell .page-heading-actions svg,
      html[data-cosmic-theme] .talenta-shell .panel-head-actions svg,
      html[data-cosmic-theme] .talenta-shell .toolbar-actions svg,
      html[data-cosmic-theme] .talenta-shell .header-actions svg,
      html[data-cosmic-theme] .talenta-shell .top-actions svg,
      html[data-cosmic-theme] .talenta-shell [class*="heading-actions"] svg,
      html[data-cosmic-theme] .talenta-shell [class*="top-action"] svg {
        color: #ffffff !important;
        fill: currentColor !important;
        stroke: currentColor !important;
      }

      /* Tombol/anchor kanan atas yang tidak memakai class action khusus */
      html[data-cosmic-theme] .talenta-shell .page-heading > :last-child button,
      html[data-cosmic-theme] .talenta-shell .page-heading > :last-child a,
      html[data-cosmic-theme] .talenta-shell .panel-head > :last-child button,
      html[data-cosmic-theme] .talenta-shell .panel-head > :last-child a {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      /* Bila teks berada pada span langsung */
      html[data-cosmic-theme] .talenta-shell .page-heading > :last-child button span,
      html[data-cosmic-theme] .talenta-shell .panel-head > :last-child button span {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      /* Hover/focus tetap terbaca */
      html[data-cosmic-theme] .talenta-shell .page-heading-actions button:hover,
      html[data-cosmic-theme] .talenta-shell .panel-head-actions button:hover,
      html[data-cosmic-theme] .talenta-shell .toolbar-actions button:hover,
      html[data-cosmic-theme] .talenta-shell .top-actions button:hover {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
        filter: brightness(1.14) !important;
      }
    }
  `;

  document.head.appendChild(cosmicTopActionsV15);
  const cosmicActionContrastV16 = document.createElement('style');
  cosmicActionContrastV16.id = 'cosmic-action-contrast-v16';
  cosmicActionContrastV16.textContent = `
    @media (min-width: 900px) {

      /* ACTION BUTTON COSMIC */
      html[data-cosmic-theme] .talenta-shell
      .page-heading button,
      html[data-cosmic-theme] .talenta-shell
      .panel-head button,
      html[data-cosmic-theme] .talenta-shell
      .toolbar-panel button,
      html[data-cosmic-theme] .talenta-shell
      .toolbar button,
      html[data-cosmic-theme] .talenta-shell
      .actions button,
      html[data-cosmic-theme] .talenta-shell
      .action-buttons button,
      html[data-cosmic-theme] .talenta-shell
      .page-actions button,
      html[data-cosmic-theme] .talenta-shell
      .header-actions button,
      html[data-cosmic-theme] .talenta-shell
      .top-actions button {
        background: linear-gradient(
          135deg,
          rgba(31,86,150,.96),
          rgba(18,48,93,.96)
        ) !important;
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
        border: 1px solid rgba(150,205,255,.62) !important;
        opacity: 1 !important;
        text-shadow: 0 1px 2px rgba(0,0,0,.55) !important;
      }

      /* SEMUA ISI BUTTON */
      html[data-cosmic-theme] .talenta-shell
      .page-heading button *,
      html[data-cosmic-theme] .talenta-shell
      .panel-head button *,
      html[data-cosmic-theme] .talenta-shell
      .toolbar-panel button *,
      html[data-cosmic-theme] .talenta-shell
      .toolbar button *,
      html[data-cosmic-theme] .talenta-shell
      .actions button *,
      html[data-cosmic-theme] .talenta-shell
      .action-buttons button *,
      html[data-cosmic-theme] .talenta-shell
      .page-actions button *,
      html[data-cosmic-theme] .talenta-shell
      .header-actions button *,
      html[data-cosmic-theme] .talenta-shell
      .top-actions button * {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      /* SVG / ICON */
      html[data-cosmic-theme] .talenta-shell
      .page-heading button svg *,
      html[data-cosmic-theme] .talenta-shell
      .panel-head button svg *,
      html[data-cosmic-theme] .talenta-shell
      .toolbar-panel button svg *,
      html[data-cosmic-theme] .talenta-shell
      .toolbar button svg *,
      html[data-cosmic-theme] .talenta-shell
      .actions button svg *,
      html[data-cosmic-theme] .talenta-shell
      .action-buttons button svg *,
      html[data-cosmic-theme] .talenta-shell
      .page-actions button svg *,
      html[data-cosmic-theme] .talenta-shell
      .header-actions button svg *,
      html[data-cosmic-theme] .talenta-shell
      .top-actions button svg * {
        stroke: #ffffff !important;
        fill: currentColor !important;
      }

      /* EXPORT / CETAK — termasuk tombol yang tidak memakai class action */
      html[data-cosmic-theme] .talenta-shell
      button[aria-label*="ekspor" i],
      html[data-cosmic-theme] .talenta-shell
      button[aria-label*="export" i],
      html[data-cosmic-theme] .talenta-shell
      button[aria-label*="cetak" i],
      html[data-cosmic-theme] .talenta-shell
      button[aria-label*="print" i],
      html[data-cosmic-theme] .talenta-shell
      [title*="ekspor" i],
      html[data-cosmic-theme] .talenta-shell
      [title*="export" i],
      html[data-cosmic-theme] .talenta-shell
      [title*="cetak" i],
      html[data-cosmic-theme] .talenta-shell
      [title*="print" i] {
        background: linear-gradient(
          135deg,
          rgba(31,86,150,.98),
          rgba(18,48,93,.98)
        ) !important;
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
        border-color: rgba(150,205,255,.65) !important;
        opacity: 1 !important;
      }

      /* BUTTON UMUM DI AREA COSMIC — jangan biarkan teks gelap */
      html[data-cosmic-theme] .talenta-shell
      .panel button,
      html[data-cosmic-theme] .talenta-shell
      .compact-panel button,
      html[data-cosmic-theme] .talenta-shell
      .table-panel button {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      html[data-cosmic-theme] .talenta-shell
      .panel button span,
      html[data-cosmic-theme] .talenta-shell
      .compact-panel button span,
      html[data-cosmic-theme] .talenta-shell
      .table-panel button span {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      /* Tombol yang memakai warna legacy inline */
      html[data-cosmic-theme] .talenta-shell
      button[style] {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      html[data-cosmic-theme] .talenta-shell
      button[style] span {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }
    }
  `;

  document.head.appendChild(cosmicActionContrastV16);













}
