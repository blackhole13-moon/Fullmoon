import fs from 'node:fs';

const app = fs.readFileSync('src/App.tsx','utf8');
const dashboard = fs.readFileSync('src/components/admin/dashboard/DashboardAdmin.tsx','utf8');
const theme = fs.readFileSync('src/theme/professionalTheme.ts','utf8');
const checks = [
  ['Project by Tirta branding', /Project by Tirta/.test(app)],
  ['cosmic theme switcher', /ThemeControl|CosmicThemeSwitcher/.test(dashboard + app)],
  ['five themes registered', ['sun','moon','galaxy','blackhole','nebula'].every((id)=>new RegExp(`"${id}"\\s*:`).test(theme))],
  ['star motion', /@keyframes pt-stars/.test(theme)],
  ['theme-specific motion', /@keyframes pt-(sun-breathe|moon-drift|galaxy-rotate|blackhole-orbit|nebula-flow)/.test(theme)],
  ['reduced motion', /prefers-reduced-motion/.test(theme)],
  ['focus-visible', /focus-visible/.test(theme)],
];
const failed = checks.filter(([,ok])=>!ok);
if (failed.length) throw new Error(`Presentation audit failed: ${failed.map(([n])=>n).join(', ')}`);
console.log(`Presentation audit passed: ${checks.length} cosmic UI checks.`);
