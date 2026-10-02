# Mobile App Setup

## PWA — Android + iOS

Bernadya now includes a Web App Manifest, service worker, install metadata, and app icons.

- Android: open the deployed site in Chrome/compatible browser and use **Install app** / **Add to Home screen**.
- iPhone/iPad: open the deployed site in Safari → Share → **Add to Home Screen**.

The service worker caches the application shell and static assets only. Supabase authentication, API traffic, and HRIS data are intentionally excluded from the cache.

## Native Android/iOS with Capacitor

The repository contains a Capacitor configuration so native projects can be generated from the same React/Vite app.

Prerequisite: **Node 24.x** for this project.

```bash
npm ci
npm run build
npx cap sync android
# Generate iOS separately on macOS when needed:
npx cap add ios
npx cap sync ios
```

Then, for the Android project already included in this repository:

```bash
cd android
./gradlew assembleDebug
```

Or open it in Android Studio after `npx cap sync android`.

Android release: open the generated Android project in Android Studio, configure signing, build an `.aab`, and publish through Google Play Console.

iOS release: open the generated iOS project on macOS/Xcode, configure signing/team, archive, and submit through App Store Connect.

### Security

Never put a Supabase service-role key in the mobile app. Only the public/anon client key belongs in the client environment. HRIS authorization and sensitive data remain controlled by Supabase RLS and server-side policies.
