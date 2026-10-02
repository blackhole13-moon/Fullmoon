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
  `;

  document.head.appendChild(style);
}
