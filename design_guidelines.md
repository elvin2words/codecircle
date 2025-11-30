## Design Approach

**Reference-Based Approach**: Modern developer portfolio inspired by contemporary tech portfolios with dark theme aesthetics, similar to Linear and Vercel portfolios.

## Core Design Principles

- **Dark Theme Foundation**: Deep dark backgrounds with vibrant purple/blue accent colors
- **Code-Centric Aesthetic**: Developer-focused design with code snippets and technical elements
- **Smooth Animations**: Gentle scroll animations, typewriter effects, and hover transitions
- **Clean Minimalism**: Focus on content with generous whitespace

## Color Palette

- **Background**: Deep dark navy/black (#0a0a0f to #1a1a2e range)
- **Primary Accent**: Vibrant purple/violet (#8b5cf6, #a855f7)
- **Secondary Accent**: Electric blue (#3b82f6, #60a5fa)
- **Text Primary**: Pure white (#ffffff)
- **Text Secondary**: Light gray (#94a3b8, #cbd5e1)
- **Card Backgrounds**: Dark elevated surfaces (#1e1e2e, #2a2a3e with subtle transparency)

## Typography System

- **Primary Font**: Inter or similar modern sans-serif
- **Code Font**: Fira Code or JetBrains Mono for code snippets
- **Hero Headline**: 4xl-6xl, bold weight, white with gradient effect
- **Section Headings**: 3xl-4xl, semibold, white
- **Subheadings**: xl-2xl, medium weight
- **Body Text**: base-lg, regular weight, light gray
- **Code Snippets**: sm-base, monospace, syntax highlighted

## Layout & Spacing

**Spacing Units**: Use Tailwind spacing of 4, 8, 12, 16, 20, 24 for consistency (p-4, p-8, py-12, py-16, py-20, py-24)

- **Section Padding**: py-20 to py-32 on desktop, py-12 to py-16 on mobile
- **Container Max Width**: max-w-7xl for full sections, max-w-6xl for content
- **Grid Systems**: 3-column for skills, 3-column for projects (responsive to 1 column mobile)

## Component Library

### Navigation

- Sticky top navigation with backdrop blur
- Logo on left, nav links center/right
- Smooth scroll to sections on click
- Mobile hamburger menu with slide-in drawer

### Hero Section

- Full viewport height (min-h-screen)
- Centered content with animated typewriter effect on headline
- Two CTA buttons (primary purple, secondary outline)
- Animated "Scroll Down" indicator at bottom
- Gradient text effect on main headline
- Particles or subtle animated background pattern

### Project Cards

- Glass-morphism style cards with dark backgrounds
- Project image with overlay on hover
- Technology tags as small badges (rounded-full, purple/blue backgrounds)
- Category labels (e.g., "Featured", "E-commerce")
- Hover: Image scales slightly, overlay darkens, "Live Demo" button appears
- Card shadow increases on hover

### Skills Section

- Grouped by category (Frontend, Backend, Tools)
- Icon + skill name in grid layout
- Subtle hover animation (scale or glow effect)
- Card-based presentation with dark backgrounds

### Contact Form

- Two-column layout: form on left, contact info on right (stacks on mobile)
- Input fields with dark backgrounds, light borders
- Focus state: purple border glow
- Send button with purple gradient background
- Contact info cards with icons

## Animations & Interactions

- **Scroll Animations**: Fade-in and slide-up on scroll using Framer Motion or AOS
- **Typewriter Effect**: Hero headline types out character by character
- **Hover Effects**: Scale transforms (1.02-1.05), glow effects, smooth transitions
- **Button Interactions**: Gradient shift, subtle scale on hover
- **Smooth Scrolling**: Native smooth scroll behavior between sections
- **Project Filter**: Smooth fade transitions when filtering categories

## Images

- **Hero Section**: No large background image - use dark gradient or particle effect background
- **Project Cards**: Each project has a featured image (800x600 aspect ratio approximately)
- **About Section**: Optional developer avatar/photo in circular frame
- **Image Treatment**: Rounded corners (rounded-lg to rounded-xl), subtle hover scale effect

## Filtering & Interactivity

- Project category filters: All, Corporate, E-commerce, Dashboards, Portfolio
- Active filter highlighted with purple background
- Smooth fade animations when projects filter

## Accessibility

- Maintain WCAG AA contrast ratios (white text on dark backgrounds)
- Keyboard navigation support
- Focus indicators with purple outlines
- Screen reader friendly labels

## Responsive Breakpoints

- Mobile: Single column, stacked layouts
- Tablet (md): 2-column where appropriate
- Desktop (lg+): Full 3-column grids, side-by-side layouts

This portfolio prioritizes technical credibility through code aesthetics, smooth modern interactions, and a sophisticated dark theme that appeals to developer audiences.
