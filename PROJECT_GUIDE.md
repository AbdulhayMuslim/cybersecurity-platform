# Cybersecurity Awareness Training Platform Project Guide

This guide is the single source of truth for the Cybersecurity Awareness Training Platform architecture, general instructions, design rules, accessibility requirements, and development conventions. Read and follow it before making project changes. Update it whenever the structure, stack, branding system, or shared conventions change.

## Mandatory Global Vision Conventions

The reusable rules and structure conventions below come from `globalvision-website/PROJECT_GUIDE.md`. They are mandatory for this project. Framework-specific Global Vision rules were mapped to the existing Next.js architecture so they do not introduce Vite, Laravel, CMS, localization, or backend requirements into this static website.

1. All styling uses Tailwind CSS.
2. Component, section, page, and layout styling belongs in Tailwind utility classes inside the owning JSX file.
3. `src/app/globals.css` owns Tailwind setup, shared branding colors, fonts, light and dark class colors, essential animation keyframes, and minimal global defaults only.
4. Repeated elements must use reusable, prop-driven components.
5. The required composition is `reusable components → sections → pages`. Detailed markup, styling, data presentation, and behavior belong in reusable components and sections. Pages only import and compose sections.
6. Do not use CSS outlines or Tailwind ring utilities on clickable elements. Use accessible brand-appropriate background, border, shadow, opacity, or color changes for hover and focus feedback.
7. In mobile view, center every practical element, text block, image, control, and content group unless doing so would reduce usability, comprehension, accessibility, or form completion.
8. Use the approved AM Security brand colors: primary blue `#0091DE` and secondary green `#6EB102`. Do not change them without explicit user confirmation.
9. Use Lucide React for general interface icons. Use React Icons only for social-media brand icons.
10. Keep the codebase modular and maintainable. Reuse components and structured content instead of duplicating markup.
11. Do not add a dependency when the existing stack can implement the requirement clearly. Every dependency needs an active use case, active maintenance, and no overlap with existing tools.
12. One page component represents one route.
13. Pages only import and compose sections. They must not contain detailed UI markup, styling, data calls, content arrays, or feature behavior.
14. Page-specific sections belong under `src/app/components/sections/`.
15. Sections use reusable components for repeated cards, buttons, headings, links, and media.
16. Split a section when it contains independently understandable or reusable parts.
17. Application-specific UI, compound components, and layouts belong under `src/app/components/`.
18. Code genuinely reused by routes and features belongs under `src/app/shared/`.
19. Use semantic HTML, accessible names, keyboard interaction, and visible focus feedback.
20. Do not describe planned functionality as implemented.

## Mandatory File Structure Pattern

```text
cybersecurity-platform/
├── public/                         # Stable logos, icons, and image assets
├── src/
│   └── app/
│       ├── components/
│       │   ├── layout/             # Header, footer, and shared page shells
│       │   ├── sections/           # Route sections composed by pages
│       │   └── ui/                 # Reusable buttons, fields, cards, and controls
│       ├── shared/
│       │   ├── data/               # Shared static records and configuration
│       │   ├── hooks/              # Reusable client behavior
│       │   └── utils/              # Reusable nonvisual helpers
│       ├── login/page.js           # Sign-in route composition
│       ├── forgot-password/page.js # Password-recovery route composition
│       ├── reset-password/page.js  # Password-reset route composition
│       ├── globals.css             # Tailwind, brand tokens, fonts, defaults, keyframes
│       ├── layout.js               # Root metadata, fonts, and theme bootstrap
│       └── page.js                 # Public homepage section composition
├── PROJECT_GUIDE.md                # Architecture source of truth
├── package.json
└── next.config.mjs
```

Populate subdirectories with their first implementation instead of creating empty placeholders. Use relative imports for nearby files within one feature. The visual dependency direction is `layout → pages → sections → shared/ui`; lower component layers must not import higher layers.

## Current Status

The project is at the frontend foundation stage. Next.js App Router, JavaScript/JSX, Tailwind CSS v4, semantic light and dark theme tokens, Oxanium, Inter, JetBrains Mono, and a responsive Sentinel Academy one-page public landing page are configured. The public page introduces the cybersecurity awareness training platform, its curriculum, value proposition, and sign-in entry point. Learner accounts, lessons, quizzes, progress tracking, teams, authentication, backend APIs, databases, and persistent content are future work and must not be described as implemented.

The repository currently contains:

- `src/app/`: the Next.js public website application.
- `public/`: stable public assets.
- `PROJECT_GUIDE.md`: this guide.

Do not describe planned functionality as implemented.

## Core Rules

1. Use Next.js App Router with JavaScript and JSX only. Do not add TypeScript files.
2. Use pnpm exclusively for package operations and scripts.
3. All styling uses Tailwind CSS v4.
4. Component, section, page, and layout styling belongs in Tailwind utility classes inside the owning JSX file.
5. `src/app/globals.css` owns Tailwind setup, shared branding colors, fonts, light and dark class colors, and minimal global defaults.
6. Repeated elements must use reusable, prop driven components.
7. The required feature composition is `reusable components → sections → pages`. Detailed markup, styling, data presentation, and behavior belong in reusable components and sections. Pages only import and compose sections.
8. Do not use CSS outlines or Tailwind ring utilities on clickable elements. Use accessible brand appropriate background, border, shadow, opacity, or color changes for hover and focus feedback.
9. In mobile view, center every practical element, text block, image, control, and content group. Depart from centered alignment only where it would reduce usability, comprehension, accessibility, or form completion.
10. Use the approved Sentinel Academy brand colors.
11. The public website is a single page. Account functionality belongs behind sign-in in future account routes.
12. Use Oxanium for display headings, Inter for interface and body text, and JetBrains Mono for technical content.
13. Route loading states must mirror the order, responsive layout, and recognizable shapes of destination sections.
14. Every visible skeleton must use a future shared `SkeletonBlock` component for consistent shimmer and reduced motion behavior.
15. Use Lucide React for all general interface icons. Use React Icons only for social media brand icons.
16. Keep frontend rendering independent of future backend implementation through a dedicated service layer. Components, sections, and pages must not call backend endpoints directly.
17. Keep the public experience under `src/app/` following Next.js App Router conventions. Separate future authenticated route groups from the public page.
18. Do not add authentication, database, backend, or account persistence until that feature is actively implemented.

## Goals

- Present Sentinel Academy through a modern, responsive, accessible website.
- Deliver a clear English-first cybersecurity awareness experience at every supported viewport.
- Keep the codebase modular and maintainable.
- Reuse components and structured content instead of duplicating markup.
- Maintain consistent branding, interactions, typography, and spacing.
- Allow future pages and dynamic content integration without unnecessary complexity.

## Project Technology Architecture

| Area | Required technology | Responsibility |
| --- | --- | --- |
| Public website | Next.js App Router, JavaScript, JSX, and Tailwind CSS v4 | One-page public landing page and sign-in entry point |
| Future account experience | Next.js App Router | Signed-in learner and team interfaces |
| Future backend | To be selected when account features begin | API, validation, authentication, and business logic |
| Future persistence | To be selected when account features begin | Users, lessons, progress, teams, and content |
| General icons | Lucide React | All non-social interface icons |
| Social icons | React Icons | Social media brand icons only |

## Installed Frontend Packages

| Technology | Purpose | Declared version |
| --- | --- | --- |
| Next.js | App Router framework | `16.4.2` |
| React / React DOM | Component based user interface | `19.3.0` |
| Tailwind CSS | Utility based styling | `^4` |
| Lucide React | General interface icons | Declared in `package.json` |
| React Icons | Social media brand icons only | Declared in `package.json` |
| ESLint | Static analysis | `^9` |

Next.js manages the application module format through its App Router build.

## Required and Planned Additions

Install planned tools only when their feature is actively implemented.

| Technology | Intended use | Installation trigger |
| --- | --- | --- |
| Additional routing library | Only if a future requirement cannot be handled by Next.js App Router | Only after a demonstrated need |
| Vitest | Unit and component tests | When shared logic or interactive components expand |
| React Testing Library | User focused UI and accessibility tests | When automated component testing begins |
| Playwright | Responsive end to end testing | When critical journeys exist |
| Prettier | Automated formatting | When a formatting workflow is introduced |
| Laravel | Required API, validation, authentication, and server logic | When backend work begins |
| Future persistence | Users, lessons, progress, teams, and content | When account features begin |

Do not add a dependency when the existing stack can implement the requirement clearly. Every dependency needs an active use case, active maintenance, and no overlap with existing tools.

## Current and Intended Structure

```text
cybersecurity-platform/
├── public/                     # Stable public assets
├── src/app/                    # Next.js App Router application
│   ├── globals.css             # Tailwind, tokens, fonts, global defaults
│   ├── layout.js               # Root layout, fonts, metadata
│   └── page.js                 # One-page public website
├── jsconfig.json               # @/* import alias
├── next.config.mjs
├── eslint.config.mjs
├── package.json
├── pnpm-lock.yaml
└── PROJECT_GUIDE.md
```

Add component, data, hooks, and service directories only when their feature is implemented. Keep generated and local dependency folders such as `node_modules/` and `.next/` out of version control.

## Import Aliases

| Alias | Location |
| --- | --- |
| `@/*` | `src/*` |

Use the `@/*` alias for imports that cross multiple directories and relative imports for nearby files.

## Architecture Rules

### Application layer

- `src/app/layout.js` imports `globals.css`, configures the global fonts and metadata, and renders the application shell.
- `src/app/page.js` is the current public page boundary and composes the one-page experience.
- Future authenticated layouts must be separated from the public landing page.
- Route decisions belong in the relevant App Router layout or page.
- Do not put feature-level data access or account behavior in `layout.js`.

### Pages and sections

- One page component represents one route.
- Pages only import and compose sections. They must not contain detailed UI markup, styling, API calls, content arrays, or feature behavior.
- Page-specific sections belong under a clearly named component directory inside the owning App Router segment when extraction begins.
- Sections use reusable components for repeated cards, buttons, headings, links, and media.
- Split a section when it contains independently understandable or reusable parts.

### Components and layout

- Application-specific UI, compound components, and layouts belong under the owning App Router segment's component directory.
- Cross-boundary components are added under a shared directory only when both public and authenticated applications actively use them.
- Supply changeable content, images, links, icons, states, colors, and behavior through props.
- Prefer `children` where composition creates a clearer API.
- Support `className` where consumers need controlled visual extension.
- Do not create a component merely to hide one line of markup.
- Convert repeated controls, cards, headings, labels, icons, fields, media, and content patterns into reusable components.
- Never duplicate headers, footers, navigation, overlays, or page shells inside pages.

### Hooks and data

- Reusable stateful behavior belongs in the owning route area's hooks directory, or a shared hooks directory when both public and authenticated areas use it; hook names begin with `use`.
- Hooks return the smallest useful API and clean up listeners, timers, and observers.
- Public content arrays and navigation belong in a public data directory when extracted from the page.
- Nonvisual shared logic belongs under a shared directory; application-only logic stays under its owning route area.
- Define routes once and reuse their constants.
- Do not duplicate navigation, service, project, publication, or team data.

### Backend integration boundary

- Treat `src/shared/services/api/` as the frontend integration layer between React and Laravel. It serves the middleware-like role of isolating transport and backend contracts from presentation files.
- Keep the base URL, credentials policy, headers, request execution, response parsing, normalized errors, cancellation, and authentication handling in the API service infrastructure.
- Group future endpoint operations into domain service modules such as content, authentication, lessons, progress, and teams.
- Components and sections consume hooks or service functions; they never call `fetch`, Axios, or Laravel URLs directly.
- Convert API responses into stable frontend models in service adapters. Backend response changes should normally require edits in the API layer rather than throughout components and sections.
- Keep display components prop driven so static data, translated content, loading data, and API data use the same component contracts.
- Provide consistent loading, empty, error, and success states without coupling their presentation to Laravel response shapes.

### Translation architecture

- Add locale files only when localization is actively implemented.
- Use matching filenames and matching translation-key structures in both language directories.
- Split large translations by stable feature or namespace rather than maintaining one oversized file.
- Use stable semantic keys, not full source sentences as keys.
- English is the current public language.
- Language switching changes content and the document `lang` value but never changes the RTL direction.
- Reusable components receive translated strings through props or a translation interface; they must not duplicate literal UI copy for both languages.
- Keep future backend content fields distinct from fixed interface labels and presentation copy.

## Routing Rules

The current public route is `/` with stable in-page section IDs. Future account routes should use Next.js App Router conventions and clear authenticated route groups.

Authenticated account paths are future scope and must not be implied by the current public page.

- Centralize canonical paths and navigation data.
- Use route constants rather than repeated strings.
- Use stable section IDs and account for fixed headers with `scroll-mt-*`.
- Provide a dedicated not found page.
- Add redirects only for verified legacy URLs.
- Keep navigation labels synchronized with page and section headings.
- Do not leave `href="#"` placeholders in completed work.

## Global Design Rules

### Colors

| Name | Value | Usage |
| --- | --- | --- |
| Primary Sky Blue | `#0EA5E9` | Primary accent and calls to action |
| Secondary Lime Green | `#84CC16` | Progress, success, and secondary accent |
| Light background | `#F1F5F9` | Soft cool page background |
| Light surface | `#FFFFFF` | Default cards and raised content |
| Dark background | `#172536` | Visible deep navy page background |
| Dark surface | `#1E3044` | Default cards and raised content |

Shared branding colors, fonts, light and dark class colors, and necessary global animation definitions live in `src/app/globals.css`. The site supports explicit `.light` and `.dark` theme classes. Components consume semantic tokens rather than hardcoded theme colors. Detailed component, section, page-shell, and layout styling belongs in JSX through Tailwind utilities.

### Global stylesheet rules

- `src/app/globals.css` is the only global stylesheet for the public application.
- Keep Tailwind import/setup, font mappings, semantic design tokens, explicit `.light` and `.dark` theme palettes, focus behavior, selection styling, and minimal document defaults there.
- Keep theme-dependent colors inside `.light` and `.dark`; do not duplicate them in `:root` or scatter them through component CSS.
- Keep font variables and other theme-independent values separate from theme palettes.
- Use semantic variables in `body`, Tailwind theme mappings, and shared global behavior; components should consume semantic utilities or tokens rather than redefine global colors.
- Keep detailed component styling in JSX with Tailwind utilities. Do not turn `globals.css` into a component stylesheet.
- Preserve reduced-motion behavior and accessible focus feedback in the global stylesheet.

### Language and typography

- The public website is English-first unless localization is explicitly added later.
- Use Oxanium for display headings, Inter for interface and body text, and JetBrains Mono for technical content.
- Use one `h1` per page with a logical heading hierarchy.
- Avoid excessive font weights and very small body text.
- Avoid hyphens in page copy where natural phrasing is available.
- Always use English digits (`0-9`) in user-facing content, including localized text and numeric labels; never use Persian or Arabic-Indic digits.

### Layout and motion

- Design mobile first, then enhance at `sm`, `md`, `lg`, and `xl`.
- Reuse established maximum widths.
- Maintain balanced vertical rhythm.
- Full screen overlays must fit the viewport.
- Motion should explain state changes rather than decorate everything.
- Avoid unstable hover movement.
- Respect `prefers-reduced-motion` for nonessential motion and skeletons.

### Clickable elements

- Never apply `outline`, `outline-*`, `ring`, or `ring-*` to clickable controls.
- Hover, active, selected, and keyboard focus states must use accessible changes in border, background, text color, opacity, or shadow.
- Replacing browser focus presentation requires a clear accessible alternative.

## Responsive Standards

- Mobile: below `768px`.
- Tablet: `768px` through `1023px`.
- Desktop: `1024px` and above.
- Test around 375px, 768px, 1024px, 1366px, and 1920px.
- Test narrow and short viewports, especially for full screen navigation.
- Images must intentionally use `object-cover` or `object-contain` and never distort.
- Center all possible mobile elements, text, images, controls, and content groups unless centering harms comprehension, scanning, forms, or accessibility.

## Accessibility Rules

- Give meaningful images descriptive alternative text and decorative images empty alt text.
- Give icon only controls accessible labels.
- Make every interaction keyboard accessible.
- Use semantic `header`, `nav`, `main`, `section`, `article`, and `footer` elements.
- Use `aria-current="page"` for active navigation and breadcrumbs.
- Never remove visible focus feedback without a clear replacement.
- Maintain sufficient text and control contrast.
- Use accurate English document metadata and language attributes.
- Preserve logical DOM and keyboard order in RTL layouts.

## Asset Rules

- Put stable assets under `public/`, grouped by type and purpose.
- Reference public assets with root absolute paths such as `/assets/logo.svg`.
- Use lowercase, hyphenated public filenames and never use spaces in asset paths.
- Keep local fonts in `src/assets/fonts/<family>/` for Vite processing.
- Use descriptive lowercase filenames.
- Compress large photography before production.
- Prefer approved SVG sources for logos and simple scalable graphics.
- Do not add duplicate assets or temporary logo/icon placeholders.

## Icon Rules

- Use Lucide React for every general-purpose interface icon.
- Use React Icons only when a social media brand icon is required.
- Do not mix in other icon libraries, handwritten icon SVGs, Unicode symbols, or emoji as interface-icon substitutes when Lucide provides the required icon.
- Give icon-only interactive controls an accessible name.

## Code and Content Rules

- Use functional React components and hooks.
- Use PascalCase for components and filenames; use camelCase for functions, variables, and props.
- Use descriptive prop and handler names.
- Group imports by external dependencies, internal modules, and styles.
- Prefer named data exports and default component exports.
- Never mutate props or imported content.
- Avoid nested component definitions when they can be reused or tested.
- Clean up all timers, listeners, and observers.
- Avoid broad CSS selectors when JSX utilities can scope styling.
- Store repeated content as structured objects or arrays.
- Use stable IDs or unique keys for lists.
- Keep navigation wording synchronized with section headings.
- Do not leave placeholder links in completed work.
- Treat public marketing copy and future account learning content as separate authored content.

## Development Commands

Run commands from the repository root with pnpm:

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

The production build must pass before a completed change is handed off.

## Validation Checklist

Before completing a code or design change:

1. Run `pnpm lint`.
2. Run `pnpm build`.
3. Run `git diff --check`.
4. Check all required desktop, tablet, and mobile widths.
5. Check short viewport behavior for overlays and navigation.
6. Verify changed links and anchors.
7. Test keyboard navigation and focus feedback.
8. Confirm images load, retain proportions, and do not overflow.
9. Verify Oxanium, Inter, and JetBrains Mono remain configured.
10. Confirm no duplicated data or reusable markup.
11. Verify relevant motion with reduced motion enabled.

## Future Dynamic Platform Rules

When backend or content management work begins:

- Choose backend and persistence technologies only when authenticated account features begin.
- Load dynamic content through a dedicated service layer rather than scattered component requests.
- Keep validation, authorization, business rules, serialization, uploads, and database access out of presentation files.
- Limit public responses to required fields when public APIs are introduced.
- Protect administrative APIs with authentication and role authorization.
- Validate and sanitize server input even when frontend validation exists.
- Keep secrets in environment files and never commit credentials.
- Keep React presentation files insulated from endpoint paths and raw Laravel response structures so normal backend changes remain localized to services and adapters.
- Provide consistent loading, empty, success, and error states.
- Update this guide before describing future backend, account routes, pages, or dependencies as implemented.

## Documentation Maintenance

- Update this guide when dependencies change.
- Update route documentation when routes are implemented.
- Update the structure after meaningful architectural changes.
- Record new global tokens and interaction rules.
- Keep planned technology separate from installed technology.
- Treat this file as the primary project reference.
