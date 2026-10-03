import moonLogo from './assets/moon-logo.svg';

const STYLE_ID = 'tirta-canonical-loading-v58';

const LOADING_CSS = `
:root {
  --tirta-loading-bg: #030710;
}

html:has(.app-loading-screen),
body:has(.app-loading-screen),
#root:has(.app-loading-screen),
html:has(.employee-loading-screen),
body:has(.employee-loading-screen),
#root:has(.employee-loading-screen),
html:has(.login-wrap:has(.loading)),
body:has(.login-wrap:has(.loading)),
#root:has(.login-wrap:has(.loading)) {
  background: var(--tirta-loading-bg) !important;
}

.app-loading-screen,
.employee-loading-screen,
.login-wrap:has(.loading) {
  position: fixed !important;
  inset: 0 !important;
  z-index: 2147483647 !important;
  width: 100vw !important;
  height: 100dvh !important;
  min-height: 100dvh !important;
  margin: 0 !important;
  padding: 0 !important;
  display: grid !important;
  place-items: center !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
  background:
    radial-gradient(circle at 50% 45%, rgba(214,174,88,.09), transparent 28%),
    linear-gradient(180deg, #071126 0%, var(--tirta-loading-bg) 100%) !important;
}

.app-loading-card,
.employee-loading-card,
.login-wrap:has(.loading) .login-card {
  width: auto !important;
  max-width: none !important;
  min-width: 0 !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
}

.app-loading-logo,
.app-loading-brand img,
.employee-loading-logo img,
.employee-loading-logo-only,
.app-loading-logo-only {
  width: 72px !important;
  height: 72px !important;
  max-width: 72px !important;
  max-height: 72px !important;
  min-width: 72px !important;
  min-height: 72px !important;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  object-fit: contain !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  filter: drop-shadow(0 0 14px rgba(214,174,88,.34)) !important;
  animation: tirta-loading-pulse 1.6s ease-in-out infinite !important;
}

.app-loading-brand,
.employee-loading-logo {
  display: contents !important;
}

.app-loading-copy,
.employee-loading-copy,
.app-loading-indicator,
.employee-loading-bar,
.employee-loading-skeletons,
.app-loading-indicator i,
.employee-loading-bar i,
.employee-loading-skeletons i {
  display: none !important;
}

.login-wrap:has(.loading) .login-card .loading {
  position: fixed !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 72px !important;
  height: 72px !important;
  min-width: 72px !important;
  min-height: 72px !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block !important;
  color: transparent !important;
  font-size: 0 !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
}

.login-wrap:has(.loading) .login-card .loading::before {
  content: "" !important;
  display: block !important;
  width: 72px !important;
  height: 72px !important;
  margin: 0 !important;
  background: url("${moonLogo}") center / contain no-repeat !important;
  filter: drop-shadow(0 0 14px rgba(214,174,88,.34)) !important;
  animation: tirta-loading-pulse 1.6s ease-in-out infinite !important;
}

.login-loading-content {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
}

.login-loading-logo {
  width: 22px !important;
  height: 22px !important;
  object-fit: contain !important;
  display: block !important;
  animation: tirta-loading-pulse 1.6s ease-in-out infinite !important;
  filter: drop-shadow(0 0 7px rgba(214,174,88,.30)) !important;
}

.verify-id-loading {
  min-height: 72px !important;
  display: grid !important;
  place-items: center !important;
}

.verify-id-loading span {
  display: none !important;
}

.verify-id-loading::before {
  content: "" !important;
  width: 56px !important;
  height: 56px !important;
  display: block !important;
  background: url("${moonLogo}") center / contain no-repeat !important;
  filter: drop-shadow(0 0 10px rgba(214,174,88,.30)) !important;
  animation: tirta-loading-pulse 1.6s ease-in-out infinite !important;
}

@keyframes tirta-loading-pulse {
  0%, 100% {
    transform: scale(.94);
    opacity: .74;
  }
  50% {
    transform: scale(1.06);
    opacity: 1;
  }
}

.unified-login-button:disabled {
  transform: none !important;
}

@media (prefers-reduced-motion: reduce) {
  .app-loading-logo,
  .app-loading-brand img,
  .employee-loading-logo img,
  .employee-loading-logo-only,
  .app-loading-logo-only,
  .login-wrap:has(.loading) .login-card .loading::before,
  .login-loading-logo,
  .verify-id-loading::before {
    animation: none !important;
  }
}
`;

export function installLoadingStyles(): void {
  if (typeof document === 'undefined') return;
  // Web loading visuals are owned by web-reference.css.
  // Keep the existing runtime stylesheet unchanged for Android only.
  if (document.documentElement.dataset.platform === 'web') return;
  const existing = document.getElementById(STYLE_ID);
  if (existing) existing.remove();
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = LOADING_CSS;
  document.head.appendChild(style);
}
