# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` or `pnpm dev` - Start development server on http://localhost:3000
- `npm run build` - Build production version  
- `npm start` - Start production server (requires build first)
- `npm run lint` - Run ESLint for code quality checks

### Development Workflow
- The project uses pnpm as the preferred package manager (evidenced by pnpm-lock.yaml)
- Hot reload is enabled for rapid development
- TypeScript compilation happens automatically during development

### Testing & Quality
- ESLint is configured with Next.js recommendations
- TypeScript strict mode is enabled for type safety
- No explicit test runner is configured

## Architecture Overview

### Project Structure
This is a Next.js 14 application using the App Router pattern for AapliShala, a school management system landing page.

#### Core Directories
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components organized by purpose
  - `sections/` - Page sections (hero, features, testimonials, etc.)
  - `ui/` - Base UI components using shadcn/ui pattern
- `src/lib/` - Shared utilities, configuration, and helper functions
- `public/` - Static assets including device mockups and brand assets

#### Key Architecture Patterns
- **Component-driven design**: Sections are composed of reusable UI components
- **Configuration-based content**: All content, features, and metadata centralized in `src/lib/config.tsx`
- **Type-safe development**: Full TypeScript implementation with strict mode
- **CSS-in-JS approach**: Tailwind CSS with custom design tokens and animations

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS with custom animations and shadcn/ui components
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion for complex animations and scroll effects
- **Icons**: Lucide React and React Icons

### Key Components & Configuration

#### Site Configuration (`src/lib/config.tsx`)
Central configuration file containing:
- Site metadata and SEO settings
- Feature definitions with icons and descriptions
- Content for all sections (hero, features, benefits, FAQ, etc.)
- Pricing plans and testimonials
- This is the primary file to modify for content updates

#### UI System
- Built on shadcn/ui pattern with customizable components
- Custom Tailwind configuration with CSS variables for theming
- Consistent component API using class-variance-authority for variants
- Path alias `@/*` maps to `src/*` for clean imports

#### Animation System
- Framer Motion integration for page transitions and scroll animations
- Custom easing functions in `src/lib/animation.ts`
- Scroll-based animations throughout the hero section
- Tailwind custom animations for marquee, borders, and accordions

### Development Guidelines

#### Component Development
- All UI components follow the shadcn/ui pattern in `src/components/ui/`
- Section components are feature-specific and live in `src/components/sections/`
- Use the `cn()` utility from `src/lib/utils.ts` for conditional class merging
- Leverage TypeScript for prop types and configuration interfaces

#### Content Management
- All site content is managed through `src/lib/config.tsx`
- Image assets should be placed in `public/` directory
- Use the `siteConfig` object for consistent branding and metadata
- SEO metadata is handled via `constructMetadata()` utility

#### Styling Approach
- Tailwind CSS with custom design tokens defined in `tailwind.config.ts`
- CSS variables enable dynamic theming (dark mode ready)
- Custom animations and keyframes for advanced interactions
- Mobile-first responsive design principles

#### Image Handling
- Next.js Image component configured for `localhost` and `randomuser.me` domains
- Device mockups are core to the design (Device-1.png through Device-9.png)
- Brand assets include logos and app store badges
- Images are optimized automatically by Next.js

### Environment Configuration
- Next.js configuration in `next.config.mjs` handles image domains
- TypeScript paths configured for `@/*` alias
- Development runs on `http://localhost:3000`
- Production URL controlled via `NEXT_PUBLIC_APP_URL` environment variable
