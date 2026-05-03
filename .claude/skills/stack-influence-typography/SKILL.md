---
name: stack-influence-typography
description: Stack Influence brand typography rules. Use whenever editing CSS, headlines, body copy, overlines, or italic highlights on a Stack Influence landing page. Defines the two-typeface system (Inter Tight + Instrument Serif Italic), exact weights/letter-spacing/sizes per role, and the "highlight one phrase per headline" rule. Trigger on font-weight, font-family, letter-spacing, or .header-itals/.preheader/.section-title edits.
---

# Stack Influence Typography

## Type system

Two typefaces, four roles. Never introduce a third typeface or a different italic.

| Role | Typeface | Weight | Style | Size | Letter-spacing | Case |
|---|---|---|---|---|---|---|
| **Main headers** (h1, h2, `.section-title`) | Inter Tight | 500 (Medium) | Roman | as designed | -1% (`-0.01em`) | Sentence case |
| **Overlines** (`.preheader`) | Inter Tight | 500 (Medium) | Roman | small | 30% (`0.3em`) | ALL CAPS |
| **Text highlight** (`.header-itals`) | Instrument Serif | 400 | Italic | parent + 2px (`calc(1em + 2px)`) | inherits | mixed |
| **Paragraphs** (body, `.autotab-copy`) | Inter Tight | 400 (Regular) | Roman | 16px | normal | sentence case |

CSS variables already defined in `:root`:
- `--primary-type: Intertight, Arial, sans-serif`
- `--secondary-type: Instrumentserif, "Times New Roman", sans-serif`

Use these variables, not raw font names.

## Loaded font weights

Only these are bundled in `public/fonts/` — do not reference others without adding `@font-face`:

- **Inter Tight**: 300, 400, 500 (each in normal + italic)
- **Instrument Serif**: 400 normal, 400 italic

Requesting weight 700 or 600 will fall back and look wrong. Use 500 for Medium, 400 for Regular.

## The headline highlight rule

Headlines use Instrument Serif Italic to spotlight **one** word or short phrase per line — the outcome, the value, or the contrast. Examples from the brand deck:

- "Grow on *Marketplaces* with everyday creators"
- "Stack Influence *how it works*"
- "Automate influencers for *Amazon listing growth*"

Constraints:
- **Max three words** in italic. One or two is better.
- **Mid or end of the headline only** — never start a sentence with the italic style.
- The italic must be the *meaningful* word, not a connector ("on", "with", "for" should stay Inter Tight).
- The Inter Tight portion must be the **majority** of the header.

### Always use `<HeaderItals>` — never the raw span

Use the shared component at [src/shared/HeaderItals.tsx](src/shared/HeaderItals.tsx):

```tsx
import HeaderItals from '../../shared/HeaderItals.tsx'

<h1>Automate influencers for<HeaderItals>Amazon listing growth</HeaderItals></h1>
<div>Trusted by<HeaderItals>thousands</HeaderItals>of eCommerce brands</div>
```

The component adds a single space before the `<span className="header-itals">` and another after. Do **not** add `{' '}` yourself when using `<HeaderItals>` — the component already handles spacing on both sides.

**Why a component, not a raw span?** JSX collapses line breaks between adjacent text and elements to **nothing** (not whitespace). So this:

```tsx
Trusted by
<span className="header-itals">thousands</span>
of eCommerce brands
```

renders as `Trusted bythousandsof eCommerce brands`. The `.header-itals` CSS adds 0.2rem padding which is too small to read as a word break, so the visual is broken. The `<HeaderItals>` component bakes the spaces in so you can't forget.

If you ever see a headline rendering with words mashed together around an italic, search for `className="header-itals"` (raw span usage) and replace with `<HeaderItals>`.

## Where these rules live in the codebase

Both pages have their own copy of the typography (Webflow exports). Keep them in sync:

- [src/pages/how-it-works/styles/stylesheet_0.css](src/pages/how-it-works/styles/stylesheet_0.css) — lines 2 (body), 3 (h1), 4 (h2), `.preheader`, `.section-title`, `.header-itals`
- [src/pages/amazon-growth/styles/stylesheet_0.css](src/pages/amazon-growth/styles/stylesheet_0.css) — same selectors, same rules

If you change a value in one, change it in the other. (One day, lift to a shared `src/styles/typography.css` — not done yet because the rest of stylesheet_0 differs per page.)

## Font path gotcha

The `@font-face` declarations live in `stylesheet_1.css` for both pages. Their `src` URLs **must be absolute** (`url("/fonts/...ttf")`) because the CSS file lives at `src/pages/<page>/styles/` and the fonts live at `public/fonts/` (served at `/fonts/`).

If you ever see the page rendering in Times New Roman instead of Instrument Serif, the @font-face URLs were probably written as relative paths (`url("fonts/...")`) — the browser then tries to resolve them next to the CSS file, gets Vite's SPA fallback (HTML with 200 OK), and silently fails to load the font. The CSS rules still apply weights/sizes, but the font family falls back to the next family in the stack (Times New Roman).

Verify with `document.fonts.check('400 16px Instrumentserif')` — should return `true`.

## Common mistakes to avoid

- **Don't use `font-weight: 300`** for body text — that's Light, not Regular. The brand is 400.
- **Don't use `font-weight: 400`** for h1/h2 — the brand calls for Medium (500). The site looked too thin before this was fixed.
- **Don't use `letter-spacing: 0.1rem`** on `.preheader` — that's ~14% at 0.7rem font-size. The spec is 30% (`0.3em`).
- **Don't use multiplicative sizing** (`1.07em`) for `.header-itals` — the spec is additive `+2px`. Use `calc(1em + 2px)`.
- **Don't bold an italic highlight** (`font-weight: 700` on `.header-itals`). The italic is the emphasis; weight stays at 400.
- **Don't use `text-transform: uppercase`** anywhere except `.preheader` overlines. Headlines and body are sentence case.

## Verification checklist when reviewing typography changes

In the browser dev tools (or via `getComputedStyle`):

- [ ] `body` font-weight is `400`
- [ ] `h1`, `h2`, `.section-title` font-weight is `500` and letter-spacing is `-0.272px` (1% of 27.2px) or equivalent for the size
- [ ] `.preheader` letter-spacing is `0.3em` of its font-size
- [ ] `.header-itals` is italic, weight 400, and ~2px larger than its parent
- [ ] No font-family other than Intertight or Instrumentserif on user-facing content

You can verify quickly with:
```js
['body', '.section-title.hero', '.header-itals', '.preheader', '.autotab-copy']
  .map(sel => {
    const el = document.querySelector(sel);
    if (!el) return [sel, 'NOT FOUND'];
    const cs = getComputedStyle(el);
    return [sel, { weight: cs.fontWeight, size: cs.fontSize, ls: cs.letterSpacing, family: cs.fontFamily }];
  })
```
