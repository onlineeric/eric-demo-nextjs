# Next.js + HeroUI (NextUI) Demo App — **Enhanced Generation Prompt**

> **Goal**
> Generate a complete, runnable **Next.js (App Router)** demo app (TypeScript) that teaches a SPA developer the comprehensive Next.js concepts through a real layout: **top title bar + left sidebar** navigation.
> UI library: **HeroUI (NextUI)** with **Tailwind CSS**.
> Each page explains and demonstrates one concept: **CSR, SSR, SSG, ISR, client-side navigation, RSC, Route Handlers (API), Server Actions, Dynamic Routes, Error Handling, Middleware, Image Optimization, Environment Variables**.
> The repo should be a clean reference I can reuse later.

---

## High-Level Requirements

* Use **Next.js (latest stable) App Router**, **TypeScript**, **Tailwind CSS**, **HeroUI (NextUI)**.
* Project uses `/src` directory with import alias `@/*`.
* Global layout: **Topbar** + **Sidebar**. Sidebar links to concept pages.
* Pages (under a `(dashboard)` route group):

  * `/` (Home / Intro)
  * `/csr` (Client-Side Rendering)
  * `/ssr` (Server-Side Rendering)
  * `/ssg` (Static Site Generation)
  * `/isr` (Incremental Static Regeneration)
  * `/navigation` (Client-side Navigation)
  * `/rsc` (React Server Components with parallel data fetching)
  * `/api-demo` (Route Handlers)
  * `/actions` (Server Actions)
  * `/dynamic` (Dynamic Routes with [id] and [...slug] examples)
  * `/error-demo` (Error Handling demonstration)
  * `/middleware-demo` (Middleware features)
  * `/images` (Image Optimization with next/image)
  * `/env-vars` (Environment Variables server vs client)
* Include a working **Route Handler** at `/api/time` returning JSON.
* Include a **Server Action** example that processes a simple form.
* Include **Middleware** (`src/middleware.ts`) demonstrating request/response modification.
* Include **Dynamic Routes** with both `[id]` and `[...slug]` patterns.
* Include **Error Handling** with `error.tsx`, `not-found.tsx`, and `global-error.tsx`.
* Include **Image Optimization** examples with `next/image` component.
* Include **Environment Variables** demonstration (server-only vs public).
* Enhanced **RSC page** showing parallel vs sequential data fetching patterns.
* Keep code **clear, minimal, well-commented**.
* Ship with **README.md** explaining how to run and what to try.

---

## Tech Stack & Conventions

* **Next.js** (App Router, `src/` directory, TypeScript).
* **Tailwind CSS** configured with **HeroUI (NextUI)** plugin.
* **HeroUI** packages:

  * `@heroui/react`
  * `@heroui/theme`
  * `@tailwindcss/postcss` (required for Tailwind v4 with HeroUI)
* **Framer Motion** if required by HeroUI.
* Import alias: `@/*` (configured in `tsconfig.json`).
* Keep server-only code (secrets, Node APIs) in **Server Components** / **Route Handlers**; DOM/interaction in **Client Components**.
* Use **English** for all code and comments.

---

## Repository Output

Produce a repository with the following structure and **exact files** (populate files with the code shown below):

```
nextjs-exercise/
  package.json
  tsconfig.json
  next.config.ts
  postcss.config.js
  tailwind.config.ts
  .eslintrc.json
  .gitignore
  README.md
  .env.local.example
  public/
    favicon.svg
    demo-image.svg
  src/
    middleware.ts
    app/
      layout.tsx
      globals.css
      providers.tsx
      (dashboard)/
        layout.tsx
        page.tsx
        csr/page.tsx
        ssr/page.tsx
        ssg/page.tsx
        isr/page.tsx
        navigation/page.tsx
        navigation/loading.tsx
        rsc/page.tsx
        rsc/ui/Counter.tsx
        api-demo/page.tsx
        actions/page.tsx
        actions/ui/ActionForm.tsx
        actions/actions.ts
        dynamic/page.tsx
        dynamic/[id]/page.tsx
        dynamic/[...slug]/page.tsx
        error-demo/page.tsx
        error-demo/error.tsx
        error-demo/not-found.tsx
        error-demo/server-error/page.tsx
        error-demo/client-error/page.tsx
        middleware-demo/page.tsx
        middleware-demo/RefreshButton.tsx
        images/page.tsx
        env-vars/page.tsx
      api/
        time/route.ts
      global-error.tsx
      protected/secret/page.tsx
    components/
      Topbar.tsx
      Sidebar.tsx
```

---

## File Contents (exact)

### `package.json`

```json
{
  "name": "nextjs-exercise",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@heroui/react": "latest",
    "@heroui/theme": "latest",
    "@tailwindcss/postcss": "latest",
    "framer-motion": "latest",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "autoprefixer": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "postcss": "latest",
    "tailwindcss": "latest",
    "typescript": "latest"
  }
}
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "es2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"]
    },
    "baseUrl": "."
  },
  "include": ["next-env.d.ts", "src/**/*", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `next.config.ts`

```ts
// Minimal Next.js config; extend if needed
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  }
};

export default nextConfig;
```

### `postcss.config.js`

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
};
```

### `tailwind.config.ts`

```ts
import { nextui } from "@heroui/theme";

export default {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: [nextui()]
};
```

### `.eslintrc.json`

```json
{
  "extends": ["next/core-web-vitals"]
}
```

### `.gitignore`

```
node_modules
.next
.env*
dist
.DS_Store
```

### `.env.local.example`

```
# Used by SSR page to fetch its own API when needed
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### `README.md`

```md
# Next.js Exercise (HeroUI + Tailwind)

Learn Next.js by building and running this app. Each page demonstrates one concept:
CSR, SSR, SSG, ISR, client-side navigation, RSC, Route Handlers (API), Server Actions.

## Scripts
- `npm run dev`
- `npm run build && npm run start`

## What to try
- Compare `/csr` (client fetch) vs `/ssr` (server on each request) vs `/ssg` (build-time) vs `/isr` (revalidate).
- Use `/navigation` to move between pages without full reload.
- Inspect `/rsc` (server fetch + client interactivity).
- Hit `/api-demo` (built-in API).
- Submit the form on `/actions` (Server Actions).
```

---

## App Shell

### `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Minimal global tweaks */
html, body { height: 100%; }
```

### `src/app/providers.tsx`

```tsx
'use client';

import { HeroUIProvider } from "@heroui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
```

### `src/app/layout.tsx`

```tsx
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Next.js Exercise",
  description: "Learn Next.js by pages (HeroUI + Tailwind)",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

---

## Shared Layout (Topbar + Sidebar)

### `src/components/Topbar.tsx`

```tsx
'use client';
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/react";

export default function Topbar() {
  return (
    <Navbar maxWidth="full" className="border-b">
      <NavbarBrand className="font-semibold">Next.js Exercise</NavbarBrand>
      <NavbarContent justify="end" className="text-sm opacity-70">
        SPA → Next.js learning path
      </NavbarContent>
    </Navbar>
  );
}
```

### `src/components/Sidebar.tsx`

```tsx
'use client';
import Link from "next/link";
import { Listbox, ListboxItem } from "@heroui/react";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/csr", label: "CSR" },
  { href: "/ssr", label: "SSR" },
  { href: "/ssg", label: "SSG" },
  { href: "/isr", label: "ISR" },
  { href: "/navigation", label: "Client-side Navigation" },
  { href: "/rsc", label: "RSC (Server vs Client)" },
  { href: "/api-demo", label: "Route Handlers (API)" },
  { href: "/actions", label: "Server Actions" },
  { href: "/dynamic", label: "Dynamic Routes" },
  { href: "/error-demo", label: "Error Handling" },
  { href: "/middleware-demo", label: "Middleware" },
  { href: "/images", label: "Image Optimization" },
  { href: "/env-vars", label: "Environment Variables" }
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="w-64 border-r p-3">
      <Listbox
        aria-label="Lessons"
        disallowEmptySelection
        selectedKeys={[path]}
        onSelectionChange={() => {}}
      >
        {items.map((it) => (
          <ListboxItem
            key={it.href}
            href={it.href}
            as={Link}
            className={path === it.href ? "font-semibold" : ""}
          >
            {it.label}
          </ListboxItem>
        ))}
      </Listbox>
    </aside>
  );
}
```

### `src/app/(dashboard)/layout.tsx`

```tsx
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[16rem_1fr] min-h-dvh">
      <div className="col-span-2">
        <Topbar />
      </div>
      <Sidebar />
      <main className="p-4">{children}</main>
    </div>
  );
}
```

---

## Pages (Lessons)

### Home — `src/app/(dashboard)/page.tsx`

```tsx
export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Welcome</h1>
      <p>This app teaches Next.js rendering models and platform features page by page:</p>
      <ul className="list-disc pl-5">
        <li>CSR / SSR / SSG / ISR</li>
        <li>Client-side navigation</li>
        <li>RSC (Server vs Client Components)</li>
        <li>Route Handlers (API)</li>
        <li>Server Actions</li>
      </ul>
      <p>Use the sidebar to explore each topic. Inspect Network/HTML to observe differences.</p>
    </div>
  );
}
```

### CSR — `src/app/(dashboard)/csr/page.tsx`

```tsx
'use client';
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [time, setTime] = useState<string>("loading...");
  useEffect(() => {
    fetch("/api/time").then(r => r.json()).then(d => setTime(d.now));
  }, []);
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">CSR (Client-Side Rendering)</h2>
      <p>Data is fetched in the browser after hydration—classic SPA behavior.</p>
      <p className="mt-3">Time from API: <b>{time}</b></p>
    </section>
  );
}
```

### SSR — `src/app/(dashboard)/ssr/page.tsx`

```tsx
// Force server render on every request (no caching)
export const dynamic = "force-dynamic";

import { headers } from 'next/headers';

export default async function SSRPage() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? `${protocol}://${host}`;
  
  const res = await fetch(`${baseUrl}/api/time`, { cache: "no-store" });
  const data = await res.json();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">SSR (Server-Side Rendering)</h2>
      <p>Rendered on the server for each request (check View Source).</p>
      <p className="mt-3">Server time: <b>{data.now}</b></p>
    </section>
  );
}
```

### SSG — `src/app/(dashboard)/ssg/page.tsx`

```tsx
// Fully static at build time
export const dynamic = "force-static";

export default async function SSGPage() {
  const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC", { cache: "force-cache" });
  const data = await res.json();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">SSG (Static Site Generation)</h2>
      <p>Built once at build time. Rebuild to update content.</p>
      <p className="mt-3">UTC at build: <b>{data.datetime}</b></p>
    </section>
  );
}
```

### ISR — `src/app/(dashboard)/isr/page.tsx`

```tsx
// Revalidate in the background every 30 seconds
export const revalidate = 30;

export default async function ISRPage() {
  const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC");
  const data = await res.json();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">ISR (Incremental Static Regeneration)</h2>
      <p>Static page that revalidates on a schedule.</p>
      <p className="mt-3">UTC now: <b>{data.datetime}</b></p>
    </section>
  );
}
```

### Client-side Navigation — `src/app/(dashboard)/navigation/page.tsx`

```tsx
'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavPage() {
  const router = useRouter();
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Client-side Navigation</h2>
      <div className="space-x-3">
        <Link href="/ssr" className="underline">Go to SSR</Link>
        <button className="px-3 py-1 border rounded" onClick={() => router.push("/csr")}>
          Go to CSR
        </button>
      </div>
      <p>Page transitions happen without full reloads.</p>
    </section>
  );
}
```

### Optional Loading UI — `src/app/(dashboard)/navigation/loading.tsx`

```tsx
export default function Loading() {
  return <p>Loading page…</p>;
}
```

### RSC (Server vs Client) — `src/app/(dashboard)/rsc/page.tsx`

```tsx
import Counter from "./ui/Counter";

async function getData() {
  // Server-only fetch; result is not in the client bundle
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", { cache: "no-store" });
  return res.json();
}

export default async function RSCPage() {
  const todo = await getData();
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">RSC (Server vs Client Components)</h2>
      <p>Parent is a Server Component (data fetching). Child is a Client Component for interactivity.</p>
      <pre className="bg-content1 p-3 rounded">{JSON.stringify(todo, null, 2)}</pre>
      <Counter />
    </section>
  );
}
```

### `src/app/(dashboard)/rsc/ui/Counter.tsx`

```tsx
'use client';
import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div className="flex items-center gap-2">
      <button className="px-2 border rounded" onClick={() => setN(n - 1)}>-</button>
      <span>{n}</span>
      <button className="px-2 border rounded" onClick={() => setN(n + 1)}>+</button>
    </div>
  );
}
```

### Route Handlers (API) — `src/app/api/time/route.ts`

```ts
export async function GET() {
  return Response.json({ now: new Date().toISOString() });
}
```

### API Demo Page — `src/app/(dashboard)/api-demo/page.tsx`

```tsx
import { headers } from 'next/headers';

export default async function APIDemoPage() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? `${protocol}://${host}`;
  
  const res = await fetch(`${baseUrl}/api/time`, { cache: "no-store" });
  const data = await res.json();
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Route Handlers (API)</h2>
      <p>Built-in API inside the app directory.</p>
      <p className="mt-3">API time: <b>{data.now}</b></p>
    </section>
  );
}
```

### Server Actions

#### Server action function — `src/app/(dashboard)/actions/actions.ts`

```ts
'use server';

export async function toUpper(formData: FormData) {
  const s = (formData.get('text') as string) ?? "";
  return s.toUpperCase();
}
```

#### Client form — `src/app/(dashboard)/actions/ui/ActionForm.tsx`

```tsx
'use client';

import { useState, useTransition } from "react";
import { toUpper } from "../actions";

export default function ActionForm() {
  const [result, setResult] = useState<string>("");
  const [pending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        startTransition(async () => {
          const res = await toUpper(formData);
          setResult(res);
        });
      }}
      className="space-x-2"
    >
      <input name="text" placeholder="type here" className="px-2 py-1 border rounded" />
      <button className="px-3 py-1 border rounded" disabled={pending}>
        {pending ? "..." : "Uppercase"}
      </button>
      {result && <span className="ml-3">Result: <b>{result}</b></span>}
    </form>
  );
}
```

#### Page — `src/app/(dashboard)/actions/page.tsx`

```tsx
import ActionForm from "./ui/ActionForm";

export default function ActionsPage() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Server Actions</h2>
      <p>Handle a form without writing a separate POST API by calling a server function directly.</p>
      <ActionForm />
    </section>
  );
}
```

---

## Group Layout Mount — `(dashboard)/layout.tsx` is already set

All lesson pages live under `/src/app/(dashboard)/` so they share the Topbar + Sidebar shell.

---

## Acceptance Checklist

### Core Functionality
* [ ] **Builds and runs**: `npm run dev`, `npm run build && npm run start`.
* [ ] **HeroUI (NextUI)** theme works; Tailwind classes apply.
* [ ] **Topbar + Sidebar** visible on all lesson pages.

### Original Core Features
* [ ] `/csr`: fetch happens client-side (inspect Network after hydrate).
* [ ] `/ssr`: HTML contains data on each refresh (no cache).
* [ ] `/ssg`: content fixed until rebuild.
* [ ] `/isr`: content updates after `revalidate` window on next request.
* [ ] `/navigation`: client-side navigation without full reload; optional `loading.tsx` shows.
* [ ] `/rsc`: demonstrates parallel vs sequential data fetching patterns with Suspense.
* [ ] `/api/time`: returns `{ now: ISOString }`.
* [ ] `/api-demo`: renders time from the built-in API.
* [ ] `/actions`: form calls server action and renders transformed result.

### Enhanced Features
* [ ] `/dynamic`: demonstrates dynamic routes with examples and navigation.
* [ ] `/dynamic/123`: single parameter route works and displays route data.
* [ ] `/dynamic/products/electronics/phones`: catch-all route works and shows slug array.
* [ ] `/error-demo`: explains error handling concepts with working examples.
* [ ] `/error-demo/server-error`: triggers server error caught by `error.tsx`.
* [ ] `/error-demo/client-error`: triggers client error caught by error boundary.
* [ ] `/error-demo/nonexistent-page`: shows custom `not-found.tsx` page.
* [ ] `/middleware-demo`: shows headers added by middleware and explains concepts.
* [ ] `/old-path`: redirects to `/middleware-demo` via middleware.
* [ ] `/protected/secret`: demonstrates auth check (redirects without cookie).
* [ ] `/images`: demonstrates `next/image` optimization with various examples.
* [ ] `/env-vars`: shows server-only vs public environment variables.
* [ ] **Middleware**: `src/middleware.ts` runs and adds custom headers.
* [ ] **Error boundaries**: `global-error.tsx` exists for root-level errors.
* [ ] **External images**: `next.config.ts` configured for picsum.photos domain.

---

## Notes for the Generator

* Generate all files with the exact contents above (adjust imports if your scaffolder requires different file extensions).
* If the environment requires it, include `NEXT_PUBLIC_BASE_URL=http://localhost:3000` in `.env.local` during local run.
* Keep the code idiomatic and minimal—this is a teaching/reference repo.
