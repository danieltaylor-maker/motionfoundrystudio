# Motion Foundry website

Static site for motionfoundrystudio.com — a trading name of Eko Create UK Ltd.

- `index.html`, `styles.css`, `thanks.html` — the whole site, no build step.
- Hosting: Netlify project `motionfoundrystudio`, deploys `main` automatically.
- Contact form: Netlify Forms (`brief`), notifications to info@eko-create.com.

## How changes are made
1. Work happens on a branch; Netlify builds a deploy preview from the pull request.
2. Dan reviews the preview. Nothing merges to `main` (live) without his approval.
3. Each change is archived as a dated zip in Google Drive › Motion Foundry Website Builds › Claude. Never overwrite earlier builds.

Backup of the original May 2026 site: branch `backup-2026-05-original`.
