
## Live Landing Page 
Check out the live landing page here: [Aaplishala Product Landing Page](https://aaplishalaproduct.netlify.app/)

## Landing Page Preview
<video src="https://github.com/user-attachments/assets/27b2d361-7173-4d12-9121-72f3f33c9c75" width="100%" controls></video>

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

