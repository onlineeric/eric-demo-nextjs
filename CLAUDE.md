# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Scripts
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run typecheck` - Run TypeScript type checking

### Environment Setup
- Copy `.env.local.example` to `.env.local` for environment variables demo
- Required for SSR page to work properly with API calls
- Uses HeroUI configuration in `hero.ts` (Tailwind config is in this file)

## Project Architecture

### Tech Stack
- **Next.js 15+ (App Router)** with TypeScript
- **HeroUI (NextUI)** component library with Framer Motion
- **Tailwind CSS v4** for styling
- **src/ directory** structure with `@/*` import alias

### App Structure
This is a **Next.js learning/demo application** that teaches Next.js concepts through practical examples:

#### Route Organization
- Uses **route groups** `(dashboard)` for shared layout without affecting URL structure
- All main pages share a **Topbar + Sidebar layout** in `src/app/(dashboard)/layout.tsx`
- **Dashboard layout**: CSS Grid with topbar spanning full width, sidebar + main content below

#### Key Concept Pages
Each page demonstrates a specific Next.js concept:
- `/` - Home/intro page
- `/csr` - Client-Side Rendering with useEffect fetch
- `/ssr` - Server-Side Rendering (force-dynamic)
- `/ssg` - Static Site Generation (force-static)
- `/isr` - Incremental Static Regeneration (30s revalidate)
- `/rsc` - React Server Components (server data + client interactivity)
- `/api-demo` - Route Handlers demonstration
- `/actions` - Server Actions with form handling
- `/dynamic` - Dynamic routes with [id] and [...slug] examples
- `/error-demo` - Error handling with error.tsx, not-found.tsx
- `/middleware-demo` - Middleware request/response modification
- `/images` - Image optimization with next/image
- `/env-vars` - Environment variables (server vs public)
- `/navigation` - Client-side navigation without reload
- `/dark-mode` - Dark mode implementation with next-themes + HeroUI
- `/ui-components` - HeroUI component showcase

#### Architecture Patterns

**Component Structure:**
- `src/components/` - Shared components (Topbar, Sidebar)
- Server Components by default, Client Components marked with 'use client'
- Server Components for data fetching, Client Components for interactivity

**Data Fetching Patterns:**
- **CSR**: Client-side with useEffect + fetch
- **SSR**: Server-side with force-dynamic and no cache
- **SSG**: Build-time with force-static and force-cache
- **ISR**: Background revalidation with revalidate export

**Middleware Configuration:**
- `src/middleware.ts` demonstrates request/response modification
- Adds custom headers, handles redirects, basic auth checks
- Configured with matcher to exclude Next.js internals

**API Routes:**
- `/api/time` - Simple time endpoint returning JSON
- Used by CSR, SSR, and API demo pages

**Error Handling:**
- Route-level error boundaries with `error.tsx`
- Custom 404 pages with `not-found.tsx`
- Global error boundary with `global-error.tsx`

#### Configuration Files
- **next.config.ts**: Image optimization config for external domains (picsum.photos)
- **hero.ts**: HeroUI theme configuration (acts as Tailwind config)
- **tsconfig.json**: TypeScript config with `@/*` path alias, strict mode enabled
- **postcss.config.js**: Tailwind v4 + autoprefixer setup

## Development Guidelines

### Code Conventions
- Use TypeScript strictly (`allowJs: false`)
- Server Components by default, explicitly mark Client Components
- Use `@/*` import alias for src/ directory imports
- Follow Next.js App Router patterns (avoid Pages Router patterns)

### Testing Features
- Use Network tab to observe different rendering patterns
- Check View Source to see server-rendered vs client-rendered content
- Test error scenarios in `/error-demo/*` routes
- Monitor console for middleware logs during development

### Adding New Features
When extending this demo app:
1. Follow existing patterns for Server vs Client Components
2. Add new navigation items to `src/components/Sidebar.tsx`
3. Use the shared dashboard layout for consistency
4. Include explanatory content on each page for learning purposes

## Important Notes
- This is a **teaching/demo repository** - code is intentionally simple and well-commented
- Error pages only work in production; development shows error overlay
- Middleware logs appear in terminal running dev server
- External API calls use worldtimeapi.org and jsonplaceholder.typicode.com