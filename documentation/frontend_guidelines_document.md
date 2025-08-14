# Frontend Guideline Document

This document outlines the architecture, design principles, styling, and tooling used in our content-generation platform’s frontend. It will help developers and non-technical stakeholders alike understand how the UI is built, organized, and maintained.

## 1. Frontend Architecture

### Frameworks and Libraries
- **React 18 + TypeScript**: User interfaces are built with React for component-based structure and TypeScript for static typing and early error detection.
- **Vite**: Development server and build tool offering fast startup, hot-module replacement, and lean production bundles.
- **React Query**: Manages server state (API calls, caching, background updates) for Outline Generation, Summary Creation, etc.
- **Redux Toolkit**: Manages global UI state (theme mode, user preferences, inputs) in a predictable way.

### Scalability, Maintainability, Performance
- Component-based architecture ensures clear separation of concerns and easy reuse.
- TypeScript interfaces define component props and API responses, reducing bugs as the app grows.
- Lazy loading and code splitting (see Section 7) keep initial bundle sizes small.
- A modular folder structure (see Section 4) makes it simple to onboard new features or teams.

## 2. Design Principles

### Usability
- Clear, concise layouts guide users through key flows: outline creation, summary generation, customization, export.
- Progressive disclosure of controls—only show the options relevant to the current step.

### Accessibility (a11y)
- All interactive elements meet WCAG 2.1 AA standards: proper color contrast, keyboard focus, ARIA labels.
- Semantic HTML tags ( `<button>`, `<nav>`, `<main>` ) and landmarks ensure screen-reader compatibility.

### Responsiveness
- Mobile-first CSS design: layouts adapt fluidly from phones to desktops.
- Flexbox and CSS Grid are used for dynamic grid and card arrangements.

### Consistency
- Shared tokens for spacing, typography, and color ensure a uniform look and feel.
- A single theme configuration in `tailwind.config.js` (Section 3) governs all UI elements.

## 3. Styling and Theming

### Styling Approach
- **Tailwind CSS** (utility-first methodology):
  - Encourages small, reusable utility classes rather than large, custom CSS files.
  - Speeds up UI adjustments and ensures consistent spacing and typography.

### Theming
- Central theme file (`tailwind.config.js`) defines colors, font sizes, and breakpoints.
- Dark and light mode support via `class` strategy on the `<html>` element.

### Visual Style
- **Modern flat design** with subtle **glassmorphism** on key overlay panels (semi-transparent cards with soft backdrop blur).

### Color Palette
- Primary: Indigo – #4F46E5
- Secondary: Emerald – #10B981
- Accent: Amber – #F59E0B
- Neutral Light: Gray – #F3F4F6
- Neutral Dark: Gray – #111827
- Error: Red – #EF4444

### Typography
- **Font Family**: Inter (system-fallbacks: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`)
- **Base sizes** set in Tailwind: `text-base` = 1rem (16px), scale up for `h1`, `h2`, etc.

## 4. Component Structure

### Folder Layout (Atomic Design)
```
/src
  /components
    /atoms       # Buttons, inputs, icons
    /molecules   # Form groups, card items
    /organisms   # Header, Sidebar, ExportPanel
    /templates   # Page layouts (OutlinePage, SummaryPage)
    /pages       # Routed components
```

### Reusability and Maintenance
- Each component lives in its own folder with `.tsx`, `.test.tsx`, and optional `.scss` or Storybook stories.
- Clear naming and modular exports prevent circular dependencies.
- Shared utility hooks (`useApi`, `useTheme`) live in `/hooks` for cross-component reuse.

## 5. State Management

### Server State (Remote Data)
- **React Query** handles data fetching, caching, and background updates for:
  - Outline templates
  - Generated summaries
  - Analytics metrics

### Global UI State
- **Redux Toolkit** stores:
  - Current step in multi-step flows (outline, customization, export)
  - User preferences (theme, language)
  - Collaboration session data (if multiple editors are active)

### Local State
- Simple form inputs or toggle switches are managed locally via `useState` or `useReducer` when scope is confined to a single component.

## 6. Routing and Navigation

- **React Router v6** manages client-side routes.
- Key routes:
  - `/outline` – Outline Generation dashboard
  - `/summary` – Summary Creation workspace
  - `/settings` – Customization options
  - `/share` – Collaboration & sharing panel

- **Layout Routes**: Shared layout (`<AppShell>`) with header, sidebar, and main content area for consistent navigation.

## 7. Performance Optimization

### Code Splitting & Lazy Loading
- Use `React.lazy` and `Suspense` to load heavy components (e.g. Analytics charts) only when needed.

### Asset Optimization
- Compress images (SVGs optimized via SVGO).
- Serve fonts via Google Fonts with `display=swap`.

### Bundler Configuration
- Vite’s production build enables tree shaking and minification by default.
- Analyze bundle size with `rollup-plugin-visualizer` to spot large dependencies.

## 8. Testing and Quality Assurance

### Unit & Integration Testing
- **Jest** + **React Testing Library** for:
  - Component rendering and behavior
  - Hook logic (`useApi`, `useTheme`)
  - Redux slice reducers and selectors

### End-to-End Testing
- **Cypress** (or Playwright) scripts to simulate user flows:
  - Generating an outline
  - Customizing and exporting a summary
  - Real-time collaboration scenarios

### Linting & Formatting
- **ESLint** with Airbnb style guide + TypeScript rules.
- **Prettier** for consistent code formatting.
- **Husky** + **lint-staged** run checks on pre-commit.

## 9. Conclusion and Overall Frontend Summary

Our frontend is a modern, component-driven React application optimized for performance, accessibility, and collaborative content creation. By combining utility-first styling (Tailwind CSS), robust state management (React Query & Redux Toolkit), and thorough testing, we ensure a maintainable codebase and a smooth user experience—no matter the device or user needs. The clear folder organization, shared theme tokens, and lazy-loading strategies let us scale the platform with confidence as we add new features or onboard new developers.