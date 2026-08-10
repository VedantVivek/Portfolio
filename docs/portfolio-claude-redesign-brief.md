# Vedant Vivek Portfolio — Complete Context Brief for Claude

**Purpose of this document:** Paste this into Claude as the full redesign brief/prompt. It describes the current portfolio in depth (section by section: background, tone, texture, content, impression, attractiveness) so Claude can propose and implement next-level improvements without guessing.

**Owner:** Vedant Vivek  
**Role positioning:** Software Quality Engineer @ Zinnia (also targets QA Automation / Full-Stack)  
**Stack of site:** Next.js 16.3.0, React 19.2.8, Tailwind CSS v4, Framer Motion 13, GSAP 3.15 + ScrollTrigger, Lenis 1.3 smooth scroll, lucide-react, react-icons, clsx/tailwind-merge  
**Repo path:** `vedant-portfolio`  
**Page order (actual `app/page.tsx`):** Navbar → Hero → Selected Work (Projects) → Experience → About → Skills → Also Built (More Projects) → Background/Credentials → Contact → Footer  
**Verified against codebase:** 2026-08-07 (re-audited for accuracy)

---

## HOW TO USE THIS WITH CLAUDE

Copy everything below the line into Claude, then add your request, for example:

> Using the portfolio context below, redesign [section X] to feel more recruiter-impressive, distinctive (not AI-template), and consistent with the paper/ink/signal system. Prefer concrete measurable outcomes over feature lists. Keep accessibility and reduced-motion support. Do not introduce purple gradients, cream+terracotta, or broadsheet newspaper layouts.

---

# FULL PORTFOLIO CONTEXT (START HERE)

## 1. Candidate & site goal

**Who:** Vedant Vivek — Software Quality Engineer at Zinnia (Noida). Background spans API/UI automation (Playwright, Selenium, TypeScript, Python), business analysis internship at same company, full-stack student projects (Next.js Event Finder), frontend LocalEstate, and Power BI / Python analytics side work. Campus leadership as Management Head at Parola (JIIT).

**Audience:** Recruiters and hiring managers scanning in under 30 seconds for reliability, impact, and hireability.

**Single job of the site:** Prove that Vedant ships automation that holds up in production *and* can build product when needed — then convert to Resume / Email / Contact.

**Open to:** Full-time software engineering roles where quality and product craft both matter. Open to relocate / remote-friendly teams.

**Contact:** vedantvivek496@gmail.com · +91-8279544936 · LinkedIn / GitHub present · LeetCode / GFG exist in data but are unused in most UI.

---

## 2. Global design system (must preserve unless redesigning tokens intentionally)

### Colors (`app/globals.css`)
| Token | Hex | Role |
|-------|-----|------|
| `--paper` | `#f2f0ec` | Warm off-white page base |
| `--paper-raised` | `#faf9f7` | Raised cards / surfaces |
| `--ink` | `#12151a` | Near-black text + dark section bands |
| `--muted` | `#5c6570` | Secondary body text |
| `--line` | `#d5d1c8` | Hairline borders / rules |
| `--signal` | `#1f6b4a` | Forest green accent (brand signal) |
| `--signal-soft` | `#d4e8dc` | Soft green fill / light text on dark |

**Body atmosphere:** Soft green + ink radial washes on `--paper`, plus fixed noise grain at ~3% opacity.

### Typography
- **Display:** Outfit (`font-display`) — bold section titles, hero name
- **Body:** Source Sans 3
- **Mono:** IBM Plex Mono — eyebrows (`11px`, wide tracking), tech chips, assertion tape, meta

### Motion philosophy
- Framer Motion for reveals, hover, carousels; GSAP ScrollTrigger on Experience timeline
- Shared ease: `[0.22, 1, 0.36, 1]`
- Primitives: `Reveal`, `MediaReveal`, `TextReveal` (word stagger), `CountUp`, `DrawLine`, `usePrefersReducedMotion`
- Ambient drifting blurred orbs on many paper sections
- Reduced-motion respected

### Shared visual recipe (overused — causes sameness)
Almost every paper section uses: mono green eyebrow → Outfit H2 via TextReveal → muted lead → DrawLine → bordered `paper-raised` cards with signal hover → floating green/ink blobs.

### Hard constraints / anti-patterns (owner preference)
- Must **not** look AI-generated / templated
- Avoid: purple-on-white / purple-indigo gradients; warm cream + terracotta + serif; broadsheet dense newspaper columns; excessive glow orbs; pill spam; card spam in heroes; generic Inter/Roboto look
- Prefer editorial, work-first, recruiter-scannable craft (Squarespace-portfolio energy, not SaaS landing page)
- Keep content truthful; improve presentation and hierarchy

---

## 3. Overall narrative arc & impression

**Intended arc:** Brand (Hero) → Product proof (Projects) → Employment proof (Experience) → Identity/conversion (About) → Toolkit (Skills) → Secondary analytics work (More Projects) → Education/leadership (Credentials) → Hire CTA (Contact).

**Current first impression:**
- Hero feels strong and distinctive (full-bleed portrait + name as brand + PASS assertion tape).
- After hero, many sections feel *similar*: warm paper, green accent, same eyebrow/title pattern, same card borders, same floating blobs.
- Recruiter proof is strongest in **Experience metrics** (10+ APIs, 50% effort cut, 900+ UI fields) and **Leadership metrics** (170+ colleges, 550+ participants).
- Positioning tension: Hero sells **QA automation reliability**; Featured projects sell **student full-stack/frontend**; analytics work is secondary. Metrics and case studies don’t fully align.

**Attractiveness overall:** Professional and cleaner than average student portfolios, but not yet “next level.” Atmosphere has improved recently, yet LocalEstate media gap, empty live demos, cert links, and repeated section chrome hold it back.

---

## 4. Section-by-section deep analysis

### 4.0 Navbar
**Purpose:** Persistent navigation + Resume CTA + scroll progress.

**Background / tone / texture:** Transparent blur over hero (`bg-ink/55`) then light paper bar after scroll; 2px signal progress line.

**Content:** Brand “Vedant” · links Work / Experience / About / Contact · Resume download. Skills/Credentials not in nav.

**Impression:** Competent, modern. Active underline via `layoutId`.

**Weaknesses:** Skills & Background omitted from nav; mobile menu is plain paper drop.

**Upgrade opportunities:** Include Skills or Credentials if important; stronger mobile drawer; optional “Open to work” micro-status.

---

### 4.1 Hero (`#home`)
**Purpose:** Instant brand + positioning + primary CTAs in one viewport.

**Background:** Full `bg-ink`. Full-bleed profile photo from ~26% width on desktop with left/bottom ink gradients. Soft drifting signal blur.

**Tone:** Confident, dark, cinematic. Name is the hero brand signal.

**Texture:** Photographic + gradient overlays (not flat).

**Content hierarchy:**
1. Mono: “Software Quality Engineer · Zinnia”
2. H1: Vedant / Vivek (huge Outfit)
3. Subhead: “Reliable software through automation.”
4. Intro: automation that catches breakage before users do
5. CTAs: View work · Download resume
6. Assertion tape: `PASS · zinnia.api.spec.ts · 10 endpoints · 2.4s` (**hardcoded in `Hero.tsx`**, not read from `personalInfo.assertionTape` even though that string exists in data)
7. ScrollCue component (links to `#projects`; hidden when reduced motion)

**Motion:** Hero stagger entrance; parallax on image/content; fade on scroll; blob drift.

**Impression / attractiveness:** Strongest section. Feels intentional and recruiter-credible. Brand-first (name dominates).

**Weaknesses:** Assertion tape is clever but may be cryptic for non-engineers; no explicit “open to work” in hero; photo treatment could be more editorial; assertion tape data-duplication risk.

**Upgrade opportunities:** Optional availability chip; clearer one-line value for non-technical recruiters; stronger mobile crop of photo; ensure CTA contrast always passes; wire assertion tape from `personalInfo.assertionTape`.

---

### 4.2 Selected Work / Projects (`#projects`)
**Purpose:** Case studies proving he can ship product (problem → approach → outcomes).

**Background:** Multi-layer warm paper gradient (`#ebe7df` → `#e8e4dc`), stronger green/ink radials, SVG plus texture, diagonal green wash, three drifting blobs. Per-project frosted panel + colored wash behind each article.

**Tone:** Editorial case-study, warm, slightly “portfolio showcase.”

**Texture:** Grain/plus pattern + glass-frost frames + deep shadows on media.

**Content:**
- Eyebrow “Case studies” · H2 “Selected work” · lead about shipping & proving
- Meta “02 featured” (rendered as `0{featuredProjects.length}`)
- **Event Finder** (Full-Stack Product / Individual Project): Next.js, TypeScript, MongoDB, Clerk, Stripe, Swiper.js — **7 images** under `/public/projects/event-finder/` (01-home … 07-mobile-events); carousel, tilt, spotlight, ken-burns, autoplay ~3.8s + progress; Problem/Approach + feature-like impact bullets (UI shows first 4 of 6); GitHub `https://github.com/VedantVivek/Event_Finder`; `liveDemo: ""`; unused data: `architecture[]`, `accent: "cyan"`
- **LocalEstate** (Frontend Experience / Individual Project): JavaScript, HTML, CSS, Swiper.js — **no `images` key / no `/public/projects/localestate` folder**; dark placeholder with category/title/tagline + “Screenshots coming soon”; GitHub `https://github.com/VedantVivek/localEstate`; `liveDemo: ""`; unused `accent: "violet"`

**Motion:** Rich on Event Finder; LocalEstate has tilt/spotlight but thin visual substance.

**Impression:** Event Finder looks impressive. LocalEstate looks unfinished and hurts the section. Impact bullets read as features, not measured outcomes.

**Attractiveness:** High for Event Finder media; medium-low for section as a whole due to asymmetry + warm sameness with other paper sections.

**Critical gaps:**
- LocalEstate screenshots missing (owner will add later)
- No live demos
- No automation/SDET featured case study despite hero QA positioning
- `architecture` field in data unused in UI

**Upgrade opportunities:**
1. Temporary LocalEstate visual should feel intentional until images arrive
2. Add measurable outcomes or label bullets as “Capabilities”
3. Add a quality/automation case study or rebalance hero positioning
4. Wire live demos or remove the affordance
5. Make project backgrounds more distinctive per case (not only wash color)
6. Surface stack architecture visually

---

### 4.3 Experience (`#experience`)
**Purpose:** Employment proof — the strongest recruiter section.

**Background:** Warm paper gradient + soft 72px grid mask + green/ink blobs.

**Tone:** Serious, professional, “employed engineer.”

**Texture:** Dark impact strip + bordered raised role cards + scrubbed timeline.

**Content:**
- Eyebrow “Career path” · H2 “Experience”
- Side meta “Zinnia · 2026–Present”
- Dark stats band (**hardcoded in `Experience.tsx` as `impactStats`, NOT imported from `portfolioStats`**):
  - **10+** “API endpoints automated” (hint: Regression coverage)
  - **50%** “Manual effort reduced” (hint: Release efficiency)
  - **900+** “UI fields validated” (hint: Carrier configs)
- Note: `portfolioStats` in data has **four** items in different order/labels: 10+ REST endpoints, 900+ UI fields, 50% manual effort, **3+ browser environments** — the 3+ browsers stat is **not shown** in the Experience strip
- Role 1: Software Quality Engineer (Current Role) — July 2026 – Present — Playwright, TypeScript, Selenium, Postman, REST APIs, Python, SQL, JIRA — achievements include API regression (10+), 50% effort cut, 900+ field Playwright engine across insurance carriers, Selenium across 3+ browsers
- Role 2: Business Analyst Intern — January 2026 – June 2026 — SQL, Postman, REST APIs, JIRA, Confluence, Apache JMeter — 8+ product enhancements, 3+ sprint releases, 15+ API endpoints validated, JMeter load testing

**Motion:** GSAP scrub timeline + card fade; CountUp; pulse on current role; staggered chips/bullets; card hover lift.

**Impression:** Most credible section for hiring. Clear BA → SQE progression at one company.

**Weaknesses:** Stats duplicated/drift between `portfolioStats`, `impactStats`, and achievement copy; label mismatch (“API” vs “REST”); 3+ browsers missing from strip; only one employer; tech chip overload.

**Upgrade opportunities:** Single source of truth for metrics; include or drop the 3+ browsers stat intentionally; add product/domain context (insurance carriers); trim chips; optional company/product naming; link achievements to Skills proof.

---

### 4.4 About (`#about`)
**Purpose:** Positioning + open-to-work + conversion paths.

**Background:** Soft paper gradient + one green blob.

**Tone:** Personal but recruiter-oriented.

**Texture:** Pillar mini-panels + sticky “Recruiter snapshot” aside with signal edge bar + ink email CTA.

**Content:**
- “Open to work” pulse badge
- Headline: “I break software so users don’t have to.”
- Bio paragraphs (SQE + product builder; Zinnia ownership)
- Three pillars: Automation that holds / Product when needed / Clarity with stakeholders
- Snapshot: Status, Current role @ Zinnia, Location
- CTAs: Download resume, Talk to me, LinkedIn, GitHub, email

**Motion:** TextReveal, stagger, DrawLine, pillar underlines, aside hover nudge.

**Impression:** Clear conversion section with a strong headline. Somewhat redundant after Experience already proved the same claims.

**Weaknesses:** Placed late (after Projects + Experience); pillars repeat earlier messages; `personalInfo.roles` unused; LeetCode/GFG unused.

**Upgrade opportunities:** Shorten to snapshot + one anecdote + CTAs; move earlier OR keep late but thinner; show target titles; optional response-time line.

---

### 4.5 Skills (`#skills`)
**Purpose:** Keyword scan for ATS/recruiters.

**Background:** Full `bg-ink` contrast break; emerald/green blurs (some raw Tailwind emerald/lime vs token signal).

**Tone:** Technical inventory, dark, energetic.

**Texture:** Marquee strip + frosted category cards + bordered skill chips.

**Content:**
- “Skills that ship” · “The stack behind reliable releases”
- Marquee (**hardcoded in `Skills.tsx`**, not derived from data): Playwright, TypeScript, Selenium, Next.js, Python, REST APIs, Postman, React, JMeter, MongoDB, Power BI, Agile
- Six categories from `skillCategories` (exact titles):
  1. **Automation & Testing** — Playwright, Selenium, REST Assured, TestNG, Postman, Apache JMeter, API Testing, Regression Testing, Performance Testing, Data-Driven Testing
  2. **Programming** — TypeScript, Python, JavaScript, SQL, C, C++
  3. **Full-Stack Development** — Next.js, React.js, Node.js, Express.js, REST APIs, MongoDB, HTML, CSS
  4. **Quality Processes** (brief previously mislabeled this) — STLC, Defect Life Cycle, Smoke Testing, Manual Testing, Cross-Browser Testing, UAT Support, Agile, Scrum
  5. **Tools & Collaboration** (brief previously mislabeled this) — Git, GitHub, JIRA, Confluence, VS Code, Vercel
  6. **Data & Analytics** — Relational Databases, Data Cleaning, KPI Tracking, Outlier Detection, Trend Analysis, Power BI, Power Query, DAX
- Local icon/blurb meta in Skills.tsx uses raw Tailwind emerald/lime accents (not only `--signal`)

**Motion:** Infinite marquee; card hover lift; chip stagger/pop.

**Impression:** Useful keyword bank; visually common “skills grid + marquee” pattern.

**Weaknesses:** No proficiency/recency; marquee can diverge from data; HTML/CSS/VS Code dilute signal; emerald accents inconsistent with tokens; Navbar scroll-spy watches `#skills` but Skills is **not** a nav link.

**Upgrade opportunities:** Primary vs working vs familiar; lead with automation stack; tie each category to one proof metric; generate marquee from data; reduce chip noise; decide whether Skills belongs in nav.

---

### 4.6 Also Built / More Projects (`#more-work`)
**Purpose:** Secondary analytics/BI proof.

**Background:** Flat `bg-paper` — **least atmospheric** paper section.

**Tone:** Quiet secondary gallery.

**Texture:** Light bordered cards; dark browser chrome around dashboard screenshots (`object-contain`).

**Content:**
- H2 “Also built” · section id `#more-work`
- **Blinkit Sales Analysis** (Data Analysis) — Python, Pandas, NumPy, Matplotlib, Seaborn, Jupyter — 1 image — GitHub `Blink-IT-analysis-in-Python`
- **AdventureWorks Sales Dashboard** (Business Intelligence) — Power BI, Power Query, DAX, Data Modeling, Excel — **5 images in data** (`dashboard`, `products`, `customers`, `map`, `decomposition`); disk also has unused `category-tooltip.png` — GitHub `Adventure-Sales-Dashboard`
- **Blinkit Sales Dashboard** (Analytics Dashboard) — Power BI, Power Query, DAX, Data Modeling — 1 image — GitHub `Blink-It-Dashboard-`
- Repo CTA label in UI: “Repository”; accents in data (`cyan`/`blue`/`violet`) unused by UI

**Motion:** Stagger enter, carousel, sheen, slight hover rotate.

**Impression:** Shows data literacy; visually flatter and less “premium” than Selected Work.

**Weaknesses:** Assignment-generic copy; no insight KPIs; two Blinkit items overlap; title “Also built” undersells.

**Upgrade opportunities:** Match light atmosphere of Projects; add 2–3 insight bullets per project; rename section (“Data & BI”); differentiate or merge Blinkit pieces; lightbox for dashboards.

---

### 4.7 Background / Credentials (`#credentials`)
**Purpose:** Education, certifications, leadership beyond the IDE.

**Background:** Warm paper gradient + orbs (same family as other paper sections).

**Tone:** Credibility / soft-skills + academics.

**Texture:** Icon headers; JIIT dark education card vs light school card; cert cards with issuer initials; large dark leadership panel with 2×2 CountUp metrics.

**Content:**
- Education: JIIT B.Tech ECE, CGPA 8.00/10, Noida (2022–2026); St. Joseph’s School, Class XII (CBSE), 95%, Puranpur (2020–2021)
- Certs: Cisco Networking Academy — Data Analytics Essentials (Professional Certificate); Deloitte (Forage) — Data Analytics Job Simulation (Virtual Experience Program)
  - Data references `image: /certificates/cisco.png` and `/certificates/deloitte.png` and `link: ""`
  - **Verified:** `/public/certificates` folder does **not exist**; images cannot render even if UI tried; links empty
- Leadership: Management Head, Parola: Literary Hub of JIIT (June 2024 – May 2025) — promoted JOUST; 170+ colleges; 9 competitions; 550+ participants; ~20% participation increase
- Note: `components/sections/Education.tsx` exists but **`return null`** — education UI lives only inside Credentials

**Motion:** Staggers, hover lifts, CountUp, leadership glow pulse.

**Impression:** Leadership metrics are a standout differentiator for a junior candidate. Certs feel weaker without verification links/assets.

**Weaknesses:** Empty cert URLs; missing cert image assets on disk; “Background” H2 is vague; section long; XII may be optional for full-time screens.

**Upgrade opportunities:** Add cert files + URLs; lead with leadership metrics; tighter H2 naming; optional ECE→engineering bridge line; delete or repurpose dead `Education.tsx`.

---

### 4.8 Contact (`#contact`)
**Purpose:** Convert hiring interest.

**Background:** Solid `bg-ink` — simpler than Skills/Hero (no texture/blobs).

**Tone:** Direct hire CTA.

**Texture:** Minimal — underline form fields, magnetic submit.

**Content:**
- H2 from `contactInfo.heading`: “Hiring for quality engineering or product?”
- Description + availability: “Open to Full-Time Software Engineering Opportunities”
- Email (copy button), phone (`tel:`), location
- Social icons in UI: **LinkedIn + GitHub only** (LeetCode/GFG exist in `contactInfo.socials` and `personalInfo.socialLinks` but are **not rendered** here)
- Form fields → composes `mailto:` (explicit “nothing stored” note in UI)

**Motion:** TextReveal; copy confirmation; MagneticButton submit.

**Impression:** Clear but not climactic. Mailto is honest but lower-converting than a real endpoint.

**Upgrade opportunities:** Formspree/backend or Calendly; match Hero/Skills atmospheric weight; response SLA; role focus line; surface LeetCode/GFG if relevant to screening.

---

### 4.9 Footer
**Purpose:** Close brand + socials + back to top.

**Background:** `bg-ink`. Simple.

**Impression:** Fine. Minimal.

**Upgrade opportunities:** Tiny availability note; secondary nav links.

---

## 5. Cross-cutting strengths

1. Cohesive paper / ink / signal token system (not random rainbow)
2. Hero is brand-first and distinctive
3. Experience metrics are recruiter-gold
4. Event Finder media system is high-craft
5. Leadership quantified outcomes are rare and strong
6. Motion system exists and respects reduced motion
7. Case-study structure (problem/approach) beats generic project cards

---

## 6. Cross-cutting weaknesses (priority order)

1. **Positioning mismatch:** QA automation hero vs student product featured work
2. **LocalEstate unfinished** (no screenshots) damages Selected Work
3. **Empty proof links:** live demos, cert links
4. **Impact language** often = feature lists, not outcomes
5. **Section sameness:** same eyebrow/H2/blob/card recipe across paper sections
6. **About redundancy** after Experience
7. **Skills** as flat tag clouds without proficiency
8. **More Projects** visually underpowered + generic analytics copy
9. **Data drift risk:** duplicated stats in multiple places
10. **Contact** underwhelming as final conversion moment

---

## 7. Content inventory (facts Claude must not invent)

### Employment
- Zinnia — Software Quality Engineer (July 2026 – Present) — Noida, Uttar Pradesh — Current Role
- Zinnia — Business Analyst Intern (January 2026 – June 2026) — Internship

### Quantified highlights (from experience + leadership)
- 10+ REST/API endpoints automated (regression framework)
- 50% manual validation effort reduced
- 900+ UI fields validated (Playwright + TypeScript, insurance carriers)
- 3+ browser environments (Selenium + Python) — in achievements + `portfolioStats`, not in Experience UI strip
- BA intern: 8+ product enhancements, 3+ sprint releases, 15+ API endpoints validated with Postman/SQL
- Leadership: JOUST promotion; 170+ colleges; 9 competitions; 550+ participants; ~20% participation increase

### Target roles in data (`personalInfo.roles`, mostly unused in UI)
- Software Quality Engineer
- QA Automation Engineer
- Full-Stack Developer

### Featured projects
- Event Finder — full-stack events + tickets — GitHub `Event_Finder` — 7 images present — liveDemo empty
- LocalEstate — responsive real-estate frontend — GitHub `localEstate` — **no images on disk** — liveDemo empty

### More / analytics projects
- Blinkit Sales Analysis — Python stack — 1 image
- AdventureWorks Sales Dashboard — Power BI — 5 wired images (+ unused `category-tooltip.png` on disk)
- Blinkit Sales Dashboard — Power BI — 1 image

### Education
- Jaypee Institute of Information Technology — B.Tech Electronics and Communication — CGPA 8.00 / 10 — Noida — 2022–2026
- St. Joseph's School — Class XII (CBSE) — 95% — Puranpur — 2020–2021

### Certifications
- Cisco Networking Academy — Data Analytics Essentials — Professional Certificate — link empty — image path missing on disk
- Deloitte (Forage) — Data Analytics Job Simulation — Virtual Experience Program — link empty — image path missing on disk

### Contact / socials
- Email: vedantvivek496@gmail.com
- Phone: +91-8279544936
- Location: Noida, Uttar Pradesh, India
- Resume asset: `/Vedant-Vivek-Resume.pdf` (exists)
- Profile image: `/vedant-profile.jpg` (exists)
- LinkedIn + GitHub rendered in UI
- LeetCode + GeeksforGeeks in data only (not rendered in Contact/About)

---

## 8. Technical notes for implementers

- Framework: Next.js App Router 16.3.0; React 19.2.8; TypeScript
- Root layout wraps app in `SmoothScroll` (Lenis `duration: 1.2`, disabled when reduced motion); adds `html.lenis` class
- Shared UI: `Container` (`max-w-6xl`), `Button` (primary/secondary/ghost), `MagneticButton` (Contact submit), `ScrollCue` (Hero), `SectionTitle` (mostly unused)
- Motion: `lib/motion.tsx` + `components/ui/motion.ts`
- Data: `data/portfolio.ts` — **should** be single source of truth, but currently several values are hardcoded in components (Experience `impactStats`, Hero assertion tape, Skills marquee)
- Dead/unused code: `components/sections/Education.tsx` returns null; project/cert `accent` colors unused; cert images missing; `architecture` unused in Projects UI
- Images present: event-finder (7), blinkit-python (1), blinkit-dashboard (1), adventureworks (6 files / 5 wired)
- Images missing: LocalEstate set; `/public/certificates/*`
- SEO metadata (`app/layout.tsx`): title “Vedant Vivek | Software Quality Engineer”; keywords include SDET, Playwright, Selenium, etc.
- Agent note: `AGENTS.md` warns this Next.js version may differ from training data — check `node_modules/next/dist/docs/` before API changes
- Do not break glyph clipping fixes in `globals.css` (display headings overflow visible)
- Prefer extending existing motion primitives over inventing new animation systems
- Keep mobile responsive; first viewport of Hero must remain brand-first

---

## 8b. Accuracy corrections found in re-audit (important)

These were wrong or incomplete in the first brief draft and are now fixed:
1. Skills category titles are **Quality Processes** and **Tools & Collaboration** (not “Quality Engineering” / “Tools & Platforms”)
2. Cert image paths are not merely “unused” — the **`/public/certificates` directory does not exist**
3. Hero assertion tape is **hardcoded**, despite `personalInfo.assertionTape` existing
4. Experience strip does **not** use `portfolioStats` and omits the **3+ browsers** stat
5. BA intern quantified achievements (8+/3+/15+) were missing from inventory
6. Dead `Education.tsx` stub was omitted
7. AdventureWorks has an extra unused image file on disk
8. LeetCode/GFG are in contact data but **not shown** in Contact UI
9. Exact package versions and Lenis/MagneticButton/ScrollCue infrastructure were under-specified

---

## 9. Recommended redesign priorities (for Claude)

### P0 — Credibility & completeness
1. LocalEstate: intentional placeholder OR screenshots when provided; never look broken
2. Wire or remove live demo / cert verification links
3. Rewrite project/analytics bullets toward outcomes or clearly label capabilities
4. Align featured work with QA positioning OR add an automation case study

### P1 — Recruiter scannability
5. Experience: single-source metrics + domain context
6. About: shorten; stronger conversion; less repetition
7. Skills: proficiency tiers; lead with automation stack
8. Contact: stronger finale atmosphere + better convert path

### P2 — Distinctiveness (anti-AI-template)
9. Break section sameness: vary rhythm, density, and signature moments (not more blobs)
10. Give each major section one memorable signature (Hero already has assertion tape; Experience has metrics strip; Credentials has leadership grid — Projects/More/Skills need clearer signatures)
11. Tighten typography hierarchy and whitespace so it feels editorial, not generated

### P3 — Polish
12. Nav completeness
13. Footer utility
14. Performance: image sizes, animation cost on low-end devices

---

## 10. Success criteria for a “next level” version

A recruiter should be able to answer in 20 seconds:
1. Who is this? → Vedant Vivek, SQE at Zinnia
2. Why hire? → Automates API/UI regression at scale (10+, 50%, 900+) and can ship product
3. Proof? → Experience metrics + Event Finder case study + leadership numbers
4. How to hire? → Resume + email in one click, obvious open-to-work

Visually, the site should feel like **one intentional editorial system**, not eight similar sections with green accents. Motion should create hierarchy and presence, not noise. Nothing should look unfinished (especially LocalEstate and empty links). Nothing should look like a generic AI portfolio template.

---

## 11. Prompt instructions for Claude (attach your ask after this)

When proposing or implementing changes:
- Stay inside the paper/ink/signal system unless proposing a deliberate token upgrade with rationale
- Prefer fewer, stronger signature moments over more decoration
- Do not invent employers, metrics, or technologies
- Call out when content (not just CSS) must change to improve recruiter impression
- Preserve accessibility: focus states, reduced motion, semantic headings, alt text
- Deliver mobile-safe layouts
- Avoid purple gradients, terracotta-cream clichés, glassmorphism spam, emoji, and glow-heavy dark mode aesthetics
- If redesigning a section, state: (a) recruiter job of section, (b) signature element, (c) what you removed to reduce template feel

**End of portfolio context brief.**
