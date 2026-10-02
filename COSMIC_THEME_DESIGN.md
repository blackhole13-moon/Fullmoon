# Project by Tirta — Cosmic Future UI

## Design direction

Project by Tirta menggunakan satu bahasa visual futuristik: dark glass surfaces, soft depth, luminous borders, centered command search, large KPI cards, compact status pills, and a persistent cosmic theme switcher.

## Themes

- **Matahari** — warm gold / solar orange
- **Bulan** — moon silver / midnight blue
- **Galaksi** — violet / electric blue
- **Blackhole** — singularity black / cyan ring / gold
- **Nebula** — cosmic pink / blue haze

The layout stays structurally consistent across themes. The ambience, glow, accent color, and cosmic background change with the active theme.

## CSS policy

All standalone CSS source files were removed. Legacy component styles were preserved inside `src/theme/professionalTheme.ts` and installed at runtime together with the new future UI layer. This avoids breaking existing class-based components while keeping the repository free of separate `.css` source files.

## Interaction

The theme control is available as the `Semesta` switcher at the bottom of the screen for authenticated HR/employee views. The selected theme is stored in `localStorage` under `project-tirta-cosmic-theme` and synchronized through the `project-tirta-theme-change` browser event.
