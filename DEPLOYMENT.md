# AfriLynq deployment correction

The previous deployment failed because the repository still contained a PostCSS configuration that referenced `@tailwindcss/postcss`, while that package was not installed.

This version intentionally uses plain CSS and contains a plugin-free `postcss.config.mjs`.

## Important repository cleanup
Before pushing, delete any old PostCSS/Tailwind configuration files that may remain in the repository, especially:
- `postcss.config.js`
- `postcss.config.cjs`
- `tailwind.config.js`
- `tailwind.config.ts`

Keep only this project's `postcss.config.mjs`.

## Vercel
No environment variables are required for this frontend foundation.
Build command: `npm run build`
Framework: Next.js
Node: use the Vercel default/current supported Node version.
