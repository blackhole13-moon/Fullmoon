import { StrictMode } from 'react';
import { Capacitor } from '@capacitor/core';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './locales/LanguageContext';
import { registerPwa } from './pwa';
import { initializeCosmicTheme, installProjectByTirtaTheme } from './theme/professionalTheme';
import { installLoadingStyles } from './loading-real-final-v57.15';
import { installProjectTirtaAndroidPolish } from './theme/projectTirtaAndroidPolish';
import { installWebFinalPolish } from './theme/webFinalPolish';

import './styles/web-reference.css';

const platform = Capacitor.getPlatform();
document.documentElement.dataset.platform = platform;
if (platform === 'web' && !document.documentElement.dataset.cosmicTheme) {
  document.documentElement.dataset.cosmicTheme = 'sun';
}

async function bootstrap() {
  registerPwa();

  // Native-only polish/background styles must never enter the web bundle's
  // global stylesheet cascade. The employee portal uses the same background
  // component on Android and iOS, so both native platforms load these styles.
  if (platform !== 'web') {
    await Promise.all([
      import('./styles/android-cosmic-background.css'),
      import('./styles/android-login-profile-polish.css'),
      import('./styles/login-safe-background.css'),
    ]);
  }

  installProjectByTirtaTheme();
  if (platform === 'web') installWebFinalPolish();
  if (platform === 'android') {
    initializeCosmicTheme();
    installProjectTirtaAndroidPolish();
  }
  installLoadingStyles();

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>
  );
}

void bootstrap();
