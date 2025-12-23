# PDM Platform Web App Blueprint

## Goals
- Deliver a single-page HTML/CSS/JS experience that communicates the PDM system structure and seven AI personas.
- Model the multi-phase build plan and interaction framework defined in the source materials.
- Provide hooks for a future Google Gemini powered reasoning backend routed through a Vercel serverless function.

## Page Structure
1. **Hero & Overview** – high-level pitch for the PDM system and quick links to core sections.
2. **Phased Build Roadmap** – timeline component covering phases 1-7 from the build summary PDF.
3. **Stack & Modules** – highlight core modules (Profile System, Logic Engine, Interaction Layer, Familiarization Engine, Integrity Layer, ECHO™, CARE™, Prompt Guard, Red/Blue Team, Bundles, Ethics).
4. **Interaction Framework** – explain owner input channels, order-of-operations impact, and battlefield roles per the 11 Stack document.
5. **AI Persona Roster** – seven cards with detail drawers summarizing mandate, tone, best-use triggers, and collaboration links.
6. **Gemini Integration Preview** – simple prompt console that POSTs to `/api/gemini` (to be wired to Gemini) and displays stubbed responses.
7. **Footer** – contact CTA and deployment notes.

## Data Model Notes
- Static JSON-like objects embedded in `app.js` for phases, modules, interaction flows, and persona content.
- Persona entries capture: `name`, `callsign/tagline`, `role`, `overview`, `highlights`, `collaborators`, and `usageTriggers`.
- Interaction framework modeled as three arrays: owner input channels, sequencing examples, and battlefield roles.

## Frontend Behavior
- Navigation uses smooth scrolling.
- Persona cards toggle detail visibility with JavaScript (no external dependencies).
- Timeline scrolls horizontally on small screens and stacks on larger displays.
- Gemini console currently mocks a response and displays a warning until backend is configured.

## Styling Approach
- Responsive CSS grid/flex with utility classes; minimal custom properties for color palette.
- Typography based on system fonts for speed; accent colors derived from BCM themes (deep navy, gold, neutral gray).

## Backend Hook
- HTTP Cloud Function `geminiProxy` (Node 18, `functions/index.js`) proxies front-end requests to the Gemini API.
- Deployment currently halted by missing Cloud Build service-account permission (`builds.run`)—resolve the IAM block before re-running `firebase deploy --only functions`.
- Function reads the API key from Firebase config (`firebase functions:config:set gemini.key=...`) and exposes it via `/api/gemini` thanks to a Hosting rewrite.
- Earlier Vercel stub has been removed to avoid duplicate endpoints.

## Deployment Considerations
- Static assets live in `web/` for Firebase Hosting and Vercel routing.
- `.env.local` (documented only) will store `GEMINI_API_KEY` for the serverless function.
- Future enhancements: integrate vector memory API, authentication, and agent task orchestration modules.
- Static site artifacts now live in `web/` so Firebase Hosting can serve them without exposing build materials.
- `firebase.json` configures Hosting with caching headers and excludes sensitive folders such as `PDM_Material/`.
- `.firebaserc` pins the Firebase project alias to `francis-pdm-system`; update with `firebase use <project_id> --alias default` if you rename the project.
- Project bootstrap: `firebase projects:create francis-pdm-system --display-name "Francis PDM System"`.
- Configure Gemini key with `firebase functions:config:set gemini.key="<API KEY>"`.
- Deploy both surfaces via `firebase deploy --only functions,hosting` **after upgrading the project to the Firebase Blaze plan** (required to enable Cloud Functions APIs).
- Until Blaze is enabled, deploy hosting-only via `firebase deploy --only hosting`; the current static build is live at `https://francis-pdm-system.web.app`.

## Vercel Notes
- `vercel.json` rewrites `/` to the `web/` directory and exposes `/api/gemini` via an `@vercel/node` function.
- The API route expects `GEMINI_API_KEY`; add it to Vercel with `vercel env add GEMINI_API_KEY production` (and optionally preview/dev) before deploying.
- Deploy with `vercel link --project francis-pdm --yes` (update the project slug if needed) followed by `vercel deploy --prod --confirm`.
- The Vercel function mirrors the Firebase proxy logic for Gemini so client code works across both platforms.
- Latest production deployment: `https://francis-4g1d843kb-majesticsoftwares-projects.vercel.app`.
