# Motion Foundry website

Static site for motionfoundrystudio.com — a trading name of Eko Create UK Ltd.

- `index.html`, `styles.css`, `app.js`, `assets/`, `thanks.html` — no build step.
- Base build by ChatGPT (23 Oct 2026, see CHATGPT_VERIFICATION.md); Claude added Netlify form handling, footer, metadata and thanks page.
- Hosting: Netlify project `motionfoundrystudio`, deploys `main` automatically.
- Contact form: Netlify Forms (`brief`), notifications to info@eko-create.com.

## How changes are made
1. Work happens on a branch; Netlify builds a deploy preview from the pull request.
2. Dan reviews the preview. Nothing merges to `main` (live) without his approval.
3. Each change is archived as a dated zip in Google Drive › Motion Foundry Website Builds › Claude. Never overwrite earlier builds.
4. ChatGPT may write builds and briefs; Claude reviews and deploys.

Backup of the original May 2026 site: branch `backup-2026-05-original`.

## Temporary imagery (must be replaced before launch)
All images in `assets/` are crops from the AI-generated design mockup, not real work or real client logos.
