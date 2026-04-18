# AGENTS.md

## Central planning source

For RapidDraft planning and operating context, read:

- `C:\Users\adeel\.codex\AGENTS.md`
- `C:\Users\adeel\OneDrive\100_Knowledge\203_TextCAD\01_Product_Project_Management\00_Project_Management_n_skills\AGENTS.md`
- `C:\Users\adeel\OneDrive\100_Knowledge\203_TextCAD\01_Product_Project_Management\00_Project_Management_n_skills\01_tracks\go-to-market\MASTER_PLAN.md`
- `C:\Users\adeel\OneDrive\100_Knowledge\203_TextCAD\01_Product_Project_Management\00_Project_Management_n_skills\01_tracks\go-to-market\TRACKING.md`
- `C:\Users\adeel\OneDrive\100_Knowledge\203_TextCAD\01_Product_Project_Management\00_Project_Management_n_skills\04_playbooks\RAPIDDRAFT_ACCESS_AND_HOSTED_SURFACES.md`
- `C:\Users\adeel\OneDrive\100_Knowledge\203_TextCAD\01_Product_Project_Management\00_Project_Management_n_skills\04_playbooks\RAPIDDRAFT_WEBSITE_DEPLOYMENT_AND_DOMAIN_ROUTING.md`

## Repo scope

This repo is the marketing and pilot-demo website for RapidDraft, including custom-domain tenant
pages such as `somic.rapiddraft.ai` and `webasto.rapiddraft.ai`.

## Source-of-truth rule

This repo must be treated as Git-driven.

Do not assume the non-git local copy at `D:\02_Code\15_RapidDraft_website` is the deploy source of
truth.

The production Netlify site is connected to:

- repo: `adeelyj/rapiddraft_website`
- branch: `codex/rapiddraft-changes`
- site: `rapiddraft`

If a change is made locally but not pushed to the tracked branch, Netlify can keep serving older
content even when custom domains and DNS are already correct.

## Local worktree rule

On this machine, prefer the Git-backed worktrees under `D:\02_Code\16_rapiddraft_website_*`.

If you need to verify which branch is authoritative, check Netlify build settings before editing or
deploying.

## Technical workflow

- Keep tenant host routing explicit and config-driven.
- When adding a new tenant hostname, update the tenant config, registry, and any shared page copy
  that was previously company-specific.
- Keep deployment notes and verification rules in repo-local docs aligned with the actual Netlify
  setup.

## Validation

- Run `npm run build` for website changes.
- Verify the expected commit reached the Netlify-tracked branch.
- Verify the relevant hostname renders the intended tenant page instead of the generic homepage.
