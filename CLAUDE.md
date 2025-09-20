# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `npm run dev` - Start development server at http://localhost:4321
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run format` - Format all files with Prettier

### Code Quality Checks

- `npx astro check` - Run TypeScript type checking for Astro files

## Architecture

### Tech Stack

- **Astro 5.8** - Static site generator with island architecture
- **React 19** - For interactive components
- **TypeScript** - Strict mode enabled
- **Tailwind CSS v4** - Utility-first CSS with Vite plugin
- **MDX** - For rich content with components

### Project Structure

- `src/pages/` - File-based routing, each `.astro` file becomes a route
- `src/components/` - Reusable Astro components (Hero, FAQ, Features, etc.)
- `src/layouts/` - Page layouts containing:
  - `components/` - Layout-specific components
  - `shortcodes/` - MDX shortcode components (Button, Accordion, Video, etc.)
- `src/content/` - Content collections for structured content
- `src/types/` - TypeScript type definitions

### Import Path Aliases

```typescript
@/components/* → ./src/layouts/components/*
@/shortcodes/* → ./src/layouts/shortcodes/*
@/helpers/* → ./src/layouts/helpers/*
@/partials/* → ./src/layouts/partials/*
@/* → ./src/*
```

### Key Architectural Decisions

- **Mobile-first**: 80% of users expected on smartphones
- **Multilingual**: 4-language support (JP, EN, CN, ES) with custom i18n
- **Component-based**: Astro components for static parts, React for interactivity
- **Performance-focused**: Static generation with selective hydration

### Legal Pages

- `src/pages/terms.astro` - Terms of Service (利用規約) with client-side language switching
- `src/pages/privacy.astro` - Privacy Policy (プライバシーポリシー) with client-side language switching
- Both pages use JavaScript for dynamic language detection via URL parameters (`?lang=`)
- Content is embedded directly in page scripts for optimal performance
- Company: Cor.株式会社 (https://cor-jp.com/)
- Last updated: 2025年9月20日
