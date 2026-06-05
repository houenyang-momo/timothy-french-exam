# Codex Build Prompt: Timothy's French Grammar Practice Exam

## Task
Build a complete, deployable, single-page HTML web application for a French grammar practice exam targeting a middle school student (Timothy, ~CM2/6ème level). The app must be responsive for iPad use.

## Output Location
/Users/oracle/JARVIS/Daily-Ops/Family/timothy-french-exam/index.html

## Design Requirements

### Visual Style
- Warm, kid-friendly design inspired by the school materials (there's a smiling sun character motif)
- Clean, modern UI with rounded corners and soft shadows
- Large touch-friendly buttons and inputs (iPad target)
- Color scheme: warm oranges, yellows, blues (like the notebook pages)
- Fonts: system fonts, large sizes (16px+ base on iPad)
- Full French language UI (titles, instructions, button text, feedback)
- Each section should have a colored header matching the subject

### Layout
- Single-page app with section navigation (tab bar or card-based)
- Header showing: app title, current section, and progress
- Each section has 5-8 questions
- Questions appear one at a time or in a scrollable list per section
- Clear "Next" / "Previous" buttons
- Submit/Check answers with instant feedback
- Results page at the end showing score by section

### Technical
- Single `index.html` file with embedded CSS and JavaScript (no external dependencies)
- Use vanilla JavaScript (no React, no frameworks — just one file that works opened from filesystem)
- All data stored client-side (no backend)
- Responsive CSS using flexbox/grid, media queries for iPad (1024px+)
- Use CSS custom properties for theming
- Keyboard accessible and touch-friendly

## Exam Content — 5 Sections

### SECTION 1: L'adjectif (The Adjective)
Questions covering:
1. **Definition identification** — "Qu'est-ce qu'un adjectif qualificatif ?" (multiple choice)
2. **Find the adjective** — Given a sentence, identify the adjective(s)
3. **Agreement** — Choose the correct adjective form (genre et nombre)
4. **Placement** — Where can the adjective be placed? (avant/après/loin du nom)
5. **Meaning change** — "un pauvre garçon" vs "un garçon pauvre" — which meaning is correct?
6. **Pronoun specification** — Can an adjective describe a pronoun? (Oui/Non)

Create 6 questions for this section testing: definition, identification, agreement (genre/nombre), placement rules, and meaning change by placement.

### SECTION 2: Les compléments circonstanciels (CC)
Questions covering:
1. **Definition** — What are CCs? (peuvent être déplacés ou supprimés)
2. **Identification** — Find the CC in sentences and identify its type (lieu/temps/manière/cause)
3. **CC de lieu** — Identify location complements
4. **CC de temps** — Identify time complements
5. **CC de manière** — Identify manner complements
6. **CC de cause** — Identify cause complements

Create 6 questions: definition, identify CC type, match the question word (où/quand/comment/pourquoi), add a CC to a sentence.

### SECTION 3: Le complément du nom (CdN)
Questions covering:
1. **Definition** — Gives details on a noun, introduced by a preposition
2. **Identification** — Find the CdN in "un gâteau au chocolat"
3. **Prepositions** — What prepositions introduce CdN? (à, de, par, pour, sans, avec, en)
4. **Contracted articles** — Identify "au, aux, du, des"
5. **Composition** — CdN can be: prep + nom, prep + pronom, prep + verbe infinitif, prep + adverbe
6. **Removability** — Can the CdN be removed?

Create 6 questions covering identification, prepositions, composition types, and removability.

### SECTION 4: COD / COI — Le complément du verbe
Questions covering:
1. **Definition** — Complements the verb, indispensable (not movable/removable like CC)
2. **COD** — Direct, no preposition, answers Qui ? Quoi ?
3. **COI** — With preposition (à, de), answers À qui ? À quoi ? De qui ? De quoi ?
4. **Identification** — Identify if underlined part is COD or COI
5. **Question words** — Which question to find COD vs COI
6. **Pronominalization** — Replace with pronoun (le, la, les, l')

Create 6 questions: COD vs COI identification, question word matching, and pronominalization.

### SECTION 5: Le Futur Simple — Conjugaison
Questions covering:
1. **1st group endings** — -ai, -as, -a, -ons, -ez, -ont
2. **Auxiliaries** — être (serai) and avoir (aurai)
3. **Regular verbs** — Conjugate trouver, grandir, vendre
4. **Irregular stems** — vouloir→voudr-, pouvoir→pourr-, voir→verr-, faire→fer-, venir→viendr-
5. **-yer verbs** — nettoyer→nettoier-, essuyer→essuier-
6. **Mixed conjugation** — Fill in the blank with correct futur simple form

Create 6 questions: verb conjugation fill-in, matching subjects to endings, irregular stem identification.

## Question Formats
Use these interactive formats:
- **Multiple choice** (4 options, single correct) — good for definitions and concept questions
- **Fill-in-the-blank** (text input with auto-check) — good for conjugation and agreement
- **Click-to-select** (tap the correct word in a sentence) — good for identification
- **True/False** — good for rule comprehension

## Feedback System
- After answering each question, show immediately: ✓ correct (green) or ✗ incorrect (red)
- Show the correct answer when wrong, with a brief explanation
- Track score per section and overall
- At the end show a results dashboard: score per section with percentage and encouraging message
- "Tu as réussi !" for good scores, "Continue à t'entraîner !" for lower scores

## Progress Tracking
- Show progress bar for the whole exam
- Show section progress (e.g., "Question 3/6")
- Visually indicate completed sections
- Allow navigation back to review past answers

## Deployment Info
This will be deployed as a static site (Netlify or GitHub Pages). The single HTML file is all that's needed. Make sure all assets are inline (no external images or fonts).
