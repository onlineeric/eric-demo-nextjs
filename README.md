# Next.js Exercise (HeroUI + Tailwind)

Learn Next.js by building and running this app. Each page demonstrates one concept:
CSR, SSR, SSG, ISR, client-side navigation, RSC, Route Handlers (API), Server Actions,
Dynamic Routes, Error Handling, Middleware, Image Optimization, and Environment Variables.

## Setup

1. `cp .env.local.example .env.local` (optional - for environment variables demo)
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:3000`

## Scripts

- `npm run dev` - Start development server
- `npm run build && npm run start` - Build and run production
- `npm run lint` - Check code quality
- `npm run typecheck` - TypeScript type checking

## What to Try

### Core Rendering Patterns
- `/csr` - Client-side data fetching (classic SPA behavior)
- `/ssr` - Server-side rendering (fresh data on each request)
- `/ssg` - Static site generation (built at build time)
- `/isr` - Incremental static regeneration (revalidates periodically)

### Navigation & Routing
- `/navigation` - Client-side navigation without full reload
- `/dynamic` - Dynamic route segments with [id] and [...slug] patterns
- `/dynamic/123` - Single dynamic parameter example
- `/dynamic/products/electronics/phones` - Catch-all route example

### Server Components & Data Fetching
- `/rsc` - Server vs Client Components with parallel vs sequential data fetching
- `/api-demo` - Route Handlers (built-in API endpoints)
- `/actions` - Server Actions (form handling without separate API)

### Advanced Features
- `/error-demo` - Error handling with error.tsx and not-found.tsx
- `/middleware-demo` - Middleware for request/response modification
- `/images` - Image optimization with next/image component
- `/env-vars` - Environment variables (server-only vs public)

### Error Testing
- `/error-demo/server-error` - Trigger server error (demonstrates error.tsx)
- `/error-demo/client-error` - Trigger client error
- `/error-demo/nonexistent-page` - Test 404 handling (not-found.tsx)

### Middleware Examples
- `/old-path` - Redirects to middleware demo page
- `/protected/secret` - Requires auth cookie (redirects if missing)

## Key Learning Points

### 1. Rendering Patterns
Compare how the same content is loaded differently:
- **CSR**: Loading state → API call → content (in browser)
- **SSR**: Immediate content (rendered on server per request)
- **SSG**: Immediate content (pre-built at build time)
- **ISR**: Immediate content (revalidates in background)

### 2. Dynamic Routes
- `[id]` - Single dynamic segment (e.g., `/dynamic/123`)
- `[...slug]` - Catch-all routes (e.g., `/dynamic/a/b/c`)
- Access params via `params` prop in page components

### 3. Error Handling
- `error.tsx` - Catches runtime errors in route segments
- `not-found.tsx` - Custom 404 pages per route
- `global-error.tsx` - Root-level error boundary

### 4. Data Fetching Best Practices
- Use Promise.all() for parallel data fetching
- Avoid waterfall patterns (sequential awaits)
- Server Components for data, Client Components for interactivity

### 5. Middleware
- Runs before every request on the Edge Runtime
- Perfect for auth, redirects, header modification
- Configure paths with `matcher` in config

### 6. Image Optimization
- `next/image` provides automatic optimization
- Lazy loading, responsive images, WebP/AVIF formats
- Requires width/height or fill prop for layout stability

### 7. Environment Variables
- Server-only: `VARIABLE_NAME` (secure, not in client bundle)
- Public: `NEXT_PUBLIC_VARIABLE_NAME` (accessible everywhere)
- Loaded at build time from .env files

## File Structure Highlights

```
src/
├── middleware.ts                 # Request/response middleware
├── app/
│   ├── layout.tsx               # Root layout
│   ├── global-error.tsx         # Global error boundary
│   ├── (dashboard)/             # Route group (doesn't affect URL)
│   │   ├── layout.tsx          # Shared dashboard layout
│   │   ├── page.tsx            # Home page
│   │   ├── [concept]/page.tsx  # Individual concept pages
│   │   ├── dynamic/
│   │   │   ├── [id]/page.tsx   # Single param route
│   │   │   └── [...slug]/page.tsx # Catch-all route
│   │   └── error-demo/
│   │       ├── error.tsx       # Error boundary
│   │       └── not-found.tsx   # 404 page
│   └── api/
│       └── time/route.ts       # API route handler
└── components/
    ├── Topbar.tsx              # Navigation header
    └── Sidebar.tsx             # Navigation sidebar
```

## Development Tips

1. **Use the Network tab** to observe differences between rendering patterns
2. **Check View Source** to see server-rendered HTML vs client-rendered content
3. **Monitor console logs** for middleware and data fetching patterns
4. **Test error scenarios** to understand error boundaries
5. **Inspect headers** to see middleware modifications

## Notes

- This is a teaching repo: minimal, commented, and safe to copy into real projects
- All concepts use real API calls to demonstrate authentic behavior
- Error pages only show in production; development shows error overlay
- Middleware logs appear in the terminal running the dev server

## Next Steps

After exploring this app, try:
1. Adding authentication with NextAuth.js
2. Implementing a database with Prisma
3. Adding real-time features with WebSockets
4. Deploying to Vercel or another platform
5. Adding tests with Jest and React Testing Library