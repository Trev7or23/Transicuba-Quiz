---
name: Vialité Precision
colors:
  surface: '#10141a'
  surface-dim: '#10141a'
  surface-bright: '#353940'
  surface-container-lowest: '#0a0e14'
  surface-container-low: '#181c22'
  surface-container: '#1c2026'
  surface-container-high: '#262a31'
  surface-container-highest: '#31353c'
  on-surface: '#dfe2eb'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dfe2eb'
  inverse-on-surface: '#2d3137'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#ca8100'
  on-tertiary-container: '#3e2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#10141a'
  on-background: '#dfe2eb'
  surface-variant: '#31353c'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-tabular:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

The design system is crafted for high-stakes, high-focus learning and theoretical driving certification. The interface projects quiet authority, surgical clarity, and modern technical elegance. By eliminating ambient clutter and high-cognitive-load ornamentation, the system prioritizes legal and situational road comprehension under simulated test conditions.

### Target Audience & Mindset
- Learners, seasoned drivers renewing credentials, and professional transit examinees.
- Users often experience moderate test anxiety; the interface must feel reassuring, orderly, and objectively fair rather than punitive or gamified to distraction.

### Visual Style: Precision Minimalist Dark
The design synthesizes modern utilitarian minimalism with subtle atmospheric depth:
- Deep oceanic slate and charcoal backgrounds evoke focus and battery-conscious comfort.
- Structural elements rely on crisp hairline borders (low-contrast outlines) and muted translucent overlays rather than heavy skeuomorphism.
- Kinetic feedback is instantaneous and deliberate: micro-transitions on option selection and state reveals give an authoritative, digital-instrument feel.

## Colors

The palette is tuned specifically for sustained readability in prolonged study sessions, balancing a nocturnal core with mathematically distinct semantic status markers.

### Palette Roles
- **Base Canvas (`#0D1117`):** Neutral dark slate absorbing background distractions, reducing screen glare during nighttime practice.
- **Primary Accent (`#6366F1`):** Electric Indigo. Dictates interactive progress indicators, primary commitment actions, selected states, and focus halos.
- **Success / Correct (`#10B981`):** Emerald. Validates correct rules and answers. Applied with low-opacity surface fills (`rgba(16, 185, 129, 0.12)`) and sharp emerald borders to avoid harsh visual shock.
- **Warning / Incorrect (`#F59E0B`):** Amber Caution. Highlights infractions, failed choices, and critical legal road warnings. Paired with `rgba(245, 158, 11, 0.12)` for feedback containers.
- **Surfaces & Layers:**
  - Surface Tier 1 (Cards, Modals): `#161B22`
  - Surface Tier 2 (Interactive inputs, inactive options): `#21262D`
  - Subtle Borders & Dividers: `#30363D`
  - High-Contrast Borders (Hover/Active): `#484F58`
- **Text & Foreground:**
  - High Emphasis: `#F0F6FC`
  - Medium Emphasis (Hints, metadata, legal citations): `#8B949E`
  - Low Emphasis (Disabled, track outlines): `#484F58`

## Typography

The typography relies on **Inter** throughout all tiers to guarantee high legibility under pressure and consistent screen rendering across mobile and desktop environments.

### Rules & Formatting
- **Tabular Figures (`tnum`):** All timers, question counters (`14/40`), scores, road speed limit badges, and article references must enforce OpenType `font-variant-numeric: tabular-nums;` to prevent layout jitters during countdowns.
- **Question Statements:** Set in `headline-md` or `headline-lg` with tightened tracking (`-0.015em`) and relaxed line heights to promote rapid optical scanning of complex transit scenarios.
- **Hierarchy:** Reserve uppercase treatments solely for small category badges (`label-md`) and legal citation anchors, spaced at `+0.04em`.

## Layout & Spacing

The layout is optimized around the cognitive archetype of a driver's assessment console: distraction-free, vertically oriented, and centered.

### Layout Philosophy
- **Focused Central Well:** On desktop displays, the assessment engine does not expand into a wide multi-column dashboard. It locks into an ergonomic central container measuring between **560px and 640px** maximum width.
- **Vertical Linear Flow:** Information proceeds strictly downward:
  1. Top utility anchor (progress tracking, tabular countdown, session exit).
  2. Contextual visual container (traffic signs, intersection diagrams, official illustrations).
  3. Question headline and legal scenario statement.
  4. Single-column list of mutually exclusive option cards.
  5. Pinned or trailing action tray (validation, next question, explanation drawer).
- **Responsive Adaptations:**
  - **Desktop (≥ 1024px):** Centered modal card container (`max-width: 620px`) floating against `#0D1117` with `space-2xl` top/bottom margins.
  - **Tablet (768px – 1023px):** Centered container (`max-width: 580px`) with `margin-tablet` side clearance.
  - **Mobile (< 768px):** Edge-to-edge canvas with `margin` (16px) dynamic padding. Interactive controls maintain a minimum target height of 48px to accommodate one-handed thumb interaction.

## Elevation & Depth

This system avoids heavy, artificial drop shadows in favor of **tonal layering**, **diffuse tinted glows**, and **ghost outlines**. Depth communicates operational state rather than dramatic height.

### Depth Hierarchy
- **Level 0 (Canvas):** `#0D1117`. Flat base layer.
- **Level 1 (Module Container / Test Card):** `#161B22` framed by a 1px solid border in `#30363D`. Complemented by an ultra-soft atmospheric shadow: `0 12px 32px -4px rgba(0, 0, 0, 0.5)`.
- **Level 2 (Selectable Items / Default Cards):** `#21262D` with an initial hairline border of `#30363D`.
- **Level 3 (Focused / Active Selection):** The selected option elevates tonally with a saturated border (`#6366F1`) and a directional ambient glow: `0 0 0 1px #6366F1, 0 4px 16px -2px rgba(99, 102, 241, 0.25)`.
- **Feedback Overlays:** Modals and explanatory slide-overs utilize an ultra-fine backdrop blur (`backdrop-filter: blur(12px)`) over `rgba(13, 17, 23, 0.8)`.

## Shapes

The design system deploys a standardized `roundedness: 2` (base 8px / 0.5rem radius) scaling up to modern, friendly structural envelopes:

- **Base Elements (Buttons, Inputs, Badges):** `rounded` (0.5rem / 8px). Creates crisp, click-accurate form targets.
- **Option Tiles & Scenario Media Containers:** `rounded-lg` (1rem / 16px). Softens visual density and encloses complex diagrams neatly.
- **Main Exam Console Container:** `rounded-xl` (1.5rem / 24px) on desktop; transitions to `rounded-lg` on mobile viewports.
- **Pill Counters & Badges:** `rounded-full` strictly reserved for tabular counter chips, category badges, and question navigation dots.

## Components

### 1. Test Option Tile (Radio Replacement)
- **Structure:** Full-width card with horizontal layout containing an index token (`A`, `B`, `C`, `D`), the rule description, and an absolute validation indicator.
- **Resting:** Background `#161B22`, border 1px solid `#30363D`, text `#F0F6FC`.
- **Hover:** Background `#21262D`, border 1px solid `#484F58`.
- **Selected:** Background `rgba(99, 102, 241, 0.08)`, border 1.5px solid `#6366F1`.
- **Correct State:** Background `rgba(16, 185, 129, 0.1)`, border 1.5px solid `#10B981`, checkmark icon displayed.
- **Incorrect State:** Background `rgba(245, 158, 11, 0.1)`, border 1.5px solid `#F59E0B`, alert cross displayed.

### 2. Primary & Secondary Buttons
- **Primary Action (Confirm / Next):** Solid `#6366F1` background, `#FFFFFF` text, bold `label-lg`, 48px height. Subtle hover state at `#4F46E5`. Disabled state uses `#21262D` background with `#484F58` text.
- **Secondary / Ghost Action (Review Later / Discard):** Transparent background, 1px solid `#30363D`, hover fills to `#21262D`.

### 3. Exam Header & Tabular Metrics Bar
- Positioned at the top of the test card.
- Incorporates a continuous 4px progress line using `#6366F1` on a `#21262D` track.
- Pairs a tabular remaining-time clock with an amber alert threshold when sub-5 minutes remaining.

### 4. Road Scenario Media Canvas
- Enclosure for official traffic signals and intersection top-downs.
- Framed in `#161B22` with an inner border of `#30363D` to isolate dark graphics from the canvas. Images sit on an internal neutral slate plate (`#090D13`) to preserve official road color accuracy (red yields, blue mandatory signs, yellow cautions).

### 5. Legal Explanation Drawer (Feedback Box)
- Appears immediately upon validation.
- Employs a left accent border (3px solid `#10B981` or `#F59E0B`), dark tinted background (`#161B22`), clear reference to the specific Transit Code article, and concise remedial instruction.