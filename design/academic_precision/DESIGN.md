---
name: Academic Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#818486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is anchored in **Minimalism** with a focus on high-utility professional environments. It is designed specifically for coaching institutes where clarity, focus, and institutional trust are paramount. 

The aesthetic avoids unnecessary ornamentation, favoring generous whitespace to reduce cognitive load during complex quiz management tasks. The emotional response should be one of calm efficiency and premium reliability. By utilizing subtle depth and a restricted color palette, the UI directs all attention toward the content and data, ensuring a scalable experience for both administrators and students.

## Colors

This design system utilizes a sophisticated monochromatic base with high-contrast accents. 

- **Primary (#0F172A):** A deep, authoritative Slate Blue used for primary headings, navigation backgrounds, and high-emphasis interactions.
- **Secondary (#3B82F6):** A vibrant academic blue used for primary actions, progress indicators, and active states.
- **Tertiary (#F8FAFC):** A cool-tinted off-white used for background surfaces to soften the glare of pure white screens.
- **Neutral (#64748B):** A balanced slate grey for secondary text and supportive UI elements.

All interactive elements must maintain a minimum 4.5:1 contrast ratio against their background. Status colors (Success, Warning, Error) should be used sparingly and tinted with a slight blue undertone to maintain palette harmony.

## Typography

The typography system relies on **Manrope** for its modern, geometric construction that maintains high legibility in dense data environments. **Inter** is utilized for smaller labels and utility text due to its exceptional clarity at small scales.

- **Headlines:** Use tight letter-spacing (-0.02em) for larger sizes to maintain a premium "editorial" feel.
- **Body Text:** Standard body text should never drop below 16px to ensure accessibility for long-form quiz content.
- **Hierarchy:** Use font weight (Medium to Bold) rather than color to establish hierarchy between titles and descriptions.

## Layout & Spacing

The design system employs a **Fixed Grid** model for administrative dashboards to ensure predictable data alignment, while using a centered **Fluid Column** for student-facing quiz interfaces.

- **Grid:** A 12-column grid on desktop, 8-column on tablet, and 4-column on mobile.
- **Rhythm:** All margins and paddings must be multiples of 8px (the "unit").
- **Breakpoints:**
  - Mobile: < 768px (16px margins)
  - Tablet: 768px - 1024px (24px margins)
  - Desktop: > 1024px (Max-width 1280px with 40px margins)

## Elevation & Depth

To maintain a premium feel, the design system avoids heavy shadows. Depth is communicated through **Tonal Layers** and **Ambient Shadows**.

1.  **Level 0 (Base):** `Tertiary` color (#F8FAFC) used for the main application background.
2.  **Level 1 (Surface):** Pure white (#FFFFFF) for cards and content containers. Use a very soft, diffused shadow: `0 4px 12px rgba(15, 23, 42, 0.03)`.
3.  **Level 2 (Overlay):** Used for dropdowns and modals. Use a more defined shadow to separate from cards: `0 12px 32px rgba(15, 23, 42, 0.08)`.
4.  **Interaction:** On hover, buttons and cards may shift from Level 1 to a slightly more pronounced shadow, never exceeding 10% opacity.

## Shapes

The shape language is **Soft**, striking a balance between the clinical sharp edges of traditional enterprise software and the overly playful curves of consumer apps. 

- **Base Radius:** 0.25rem (4px) for small components like checkboxes and input fields.
- **Standard Radius:** 0.5rem (8px) for buttons and standard cards.
- **Large Radius:** 0.75rem (12px) for large containers or promotional sections.

This subtle rounding reinforces the professional and organized nature of the coaching environment.

## Components

### Buttons
- **Primary:** Solid `#3B82F6` with white text. 8px radius. Use horizontal padding of 24px for standard buttons.
- **Ghost:** No background, `#0F172A` text. Used for secondary actions in headers.
- **Outline:** 1px stroke of `#E2E8F0` with `#0F172A` text.

### Input Fields
- Background is always pure white.
- 1px border using `#E2E8F0`. On focus, the border changes to `#3B82F6` with a 2px soft glow (shadow).
- Labels are positioned above the field using `label-sm`.

### Cards
- White background, 8px radius, and Level 1 Ambient Shadow.
- Card headers should have a subtle 1px bottom border (#F1F5F9) to separate title from content.

### Navigation
- **Side Nav:** Dark theme background (`#0F172A`) with inactive links at 60% opacity. Active link indicated by a 4px left-side secondary blue bar.
- **Breadcrumbs:** Use `label-sm` with a chevron separator, ensuring the current page is clearly distinguished in `#0F172A`.

### Quiz Specifics
- **Progress Bar:** 4px height, using `#3B82F6` for the fill and `#E2E8F0` for the track.
- **Option Chips:** Used for multiple-choice questions. 8px radius, 1px border. On select, background becomes a 10% opacity version of the secondary blue with a 2px blue border.