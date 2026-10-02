import { StrictMode } from 'react';
import { Capacitor } from '@capacitor/core';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './locales/LanguageContext';
import { registerPwa } from './pwa';
import { initializeCosmicTheme, installProjectByTirtaTheme } from './theme/professionalTheme';
import { installLoadingStyles } from './loading-real-final-v57.15';
import { installProjectTirtaAndroidPolish } from './theme/projectTirtaAndroidPolish';

import './styles/project-tirta-web-v1.css';
import './styles/android-cosmic-background.css';
registerPwa();
document.documentElement.dataset.platform = Capacitor.getPlatform();

//
// Web/PWA juga wajib memasang runtime stylesheet utama.
// Inisialisasi Cosmic khusus Android tetap dipisahkan.
//

installProjectByTirtaTheme();
if (Capacitor.getPlatform() === 'android') {
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
import './styles/android-login-profile-polish.css';
