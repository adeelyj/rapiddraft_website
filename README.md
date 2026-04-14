# RapidDraft Website

## Deploy Source Of Truth

Netlify production for this site is Git-connected and should be treated as branch-driven, not folder-driven.

The source of truth is the GitHub repo branch that Netlify watches:

`adeelyj/rapiddraft_website` -> `codex/rapiddraft-changes`

Current hosted site identity:

- Netlify site: `rapiddraft`
- Netlify site id: `9b777f3c-0133-45ac-bfbd-d275bc7642e3`
- custom domain: `rapiddraft.ai`
- domain aliases: `rapiddraft.io`, `pitch.rapiddraft.ai`, `somic.rapiddraft.ai`, `webasto.rapiddraft.ai`

Useful local paths on this machine:

1. Git-backed worktree on `main`: `D:\02_Code\16_rapiddraft_website_live`
2. Git-backed worktree used for branch edits and deploy work: `D:\02_Code\16_rapiddraft_website_codex`
3. Non-git local copy that should not be treated as deploy truth: `D:\02_Code\15_RapidDraft_website`

Important:

1. Do not assume `D:\02_Code\15_RapidDraft_website` is the live source of truth. That local copy can be useful for inspection, but Netlify will keep serving whatever is on the watched Git branch.
2. When a subdomain tenant page like `somic.rapiddraft.ai` or `webasto.rapiddraft.ai` is added or updated, make the code change in the Git-backed website worktree, push the watched branch, then verify the deploy.
3. Custom-domain setup is a separate step from content deploy. A tenant page will still show stale or generic content if DNS is correct but the watched branch does not contain the tenant config.

Recommended release checklist for tenant pages:

1. Update the tenant config and shared page logic in the Git-backed website repo.
2. Run `npm run build` locally.
3. Push the change to the Netlify-watched branch.
4. Confirm the new production deploy in Netlify.
5. Confirm Netlify site domain aliases include the tenant hostname.
6. Confirm Cloudflare DNS points the tenant hostname at Netlify.
7. Verify the hostname renders the tenant page, not the generic homepage.

## Cloudflare Web Analytics

This site can load Cloudflare Web Analytics without changing the Netlify hosting setup.

1. In Cloudflare Web Analytics, create a site for `rapiddraft.ai` if you want one token to cover the main site and subdomains.
2. If you want `pitch.rapiddraft.ai` tracked separately, create a second site for `pitch.rapiddraft.ai`.
3. In Netlify, open `Site configuration -> Environment variables` and add one or both of these values:
   - `VITE_CLOUDFLARE_WEB_ANALYTICS_TOKEN`
   - `VITE_CLOUDFLARE_PITCH_WEB_ANALYTICS_TOKEN`
4. Trigger a new deploy in Netlify after saving the variables.

The app loads the pitch token only on `pitch.rapiddraft.ai`. Otherwise it falls back to the main token.

## Vite Template Notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
