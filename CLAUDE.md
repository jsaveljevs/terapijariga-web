# TerapijaRiga.lv - Project Guidelines

## Important Terminology Rules

### Job Title Terminology (CRITICAL)
**ALWAYS use "psychotherapy specialist" instead of "psychotherapist"**

| Language | Correct | Incorrect |
|----------|---------|-----------|
| English | Psychotherapy specialist | Psychotherapist |
| Latvian | Psihoterapijas speciāliste | Psihoterapeite / Psihoterapeits |
| Russian | Специалист по психотерапии | Психотерапевт |

This applies to:
- Page titles and meta descriptions
- Headings (H1, H2, etc.)
- Body content
- Structured data (JSON-LD schemas)
- Alt text and any other text content

### Why This Matters
The term "psychotherapist" implies a licensed medical professional in some jurisdictions. "Psychotherapy specialist" more accurately describes the professional qualification and avoids potential legal/regulatory issues.

---

## SEO Guidelines

### Target Keywords by Language

**Latvian (Primary):**
- psihoterapijas speciāliste Rīgā
- geštalta terapija
- trauksme, panikas lēkmes
- izdegšana
- attiecību grūtības

**Russian:**
- специалист по психотерапии в Риге
- гештальт-терапия
- тревога, панические атаки
- выгорание

**English:**
- psychotherapy specialist Riga
- Gestalt therapy Latvia
- anxiety, panic attacks
- burnout

### Internal Linking
Each content page should link to at least 2 other relevant pages (About, Services, FAQ, Contact).

---

## Technical Notes

- Site uses Astro with i18n (lv, ru, en)
- Translations are in `src/i18n/ui.ts`
- Structured data (JSON-LD) is in page files
- Sitemap is manually maintained in `public/sitemap.xml`
