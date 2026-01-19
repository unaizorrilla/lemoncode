
# Metaframeworks NextJs

This contains all the files to complete the mandatory lab for module of Metaframeworks.

We implemented a sample of Nuxt app with next features:

 - Dynamic SSR
 - Showing ISR with revalidate
 - Showing SSG with generate Static params

We create a API on the same project, this is not usual obviously but for the purpose of the demo is enought. Due this to create to production build you need to run the project on a different process than the process to create the build.


# Setup

Open the code using the Reopen in Container feature from Dev Containers extension in VS Code.

# Install dependencies

To install dependencies execute the following command:

```bash
npm install
```

# Run

```bash
npm run dev
```

And open the url from the output http://localhost:3000 

# Build for production


```bash
npm run build
```

## 🔄 Rendering Strategies Explained

### SSR (Server-Side Rendering)

**What it is:** The page is rendered on the server for every request.

**How it works:**
1. User requests a page
2. Server fetches data and renders HTML
3. HTML is sent to the browser
4. Vue hydrates the page for interactivity

**Pros:** Always fresh data, good SEO
**Cons:** Slower response times, more server load

**Nuxt config:** Default behavior (no configuration needed)

---

### SSG (Static Site Generation)

**What it is:** Pages are pre-rendered at build time as static HTML files.

**How it works:**
1. During `npm run build`, Nuxt generates HTML files
2. These files are served directly (no server processing)
3. Vue hydrates the page for interactivity

**Pros:** Fastest response times, can be served from CDN
**Cons:** Data is stale until next build

**Nuxt config:**
```typescript
routeRules: {
  '/': { prerender: true }
}
```

---

### ISR (Incremental Static Regeneration)

**What it is:** A hybrid approach - static pages that regenerate after a specified time.

**How it works:**
1. First request: page is rendered and cached
2. Subsequent requests: cached version is served
3. After cache expires: page regenerates in background
4. Next request gets the fresh version

**Pros:** Fast responses + relatively fresh data
**Cons:** Data can be stale for the cache duration

**Nuxt config:**
```typescript
routeRules: {
  '/cottages': { isr: 60 }  // Regenerates every 60 seconds
}
```

---

## ⚙️ Project Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    // SSG: Pre-rendered at build time
    '/': { prerender: true },

    // ISR: Regenerates every 60 seconds
    '/cottages': { isr: 60 },

    // SSG: Pre-rendered detail pages
    '/cottages/cottage-1': { prerender: true },
    '/cottages/cottage-2': { prerender: true },
    '/cottages/cottage-3': { prerender: true },

    // API caching
    '/api/cottages': { cache: { maxAge: 10 } }
  }
})
```

## 🏗️ Build Output

After running `npm run build`, you'll see the pre-rendering process:

```
ℹ Prerendering 6 routes...
  ├─ / (45ms)
  ├─ /cottages (120ms)
  ├─ /cottages/cottage-1 (85ms)
  ├─ /cottages/cottage-2 (82ms)
  └─ /cottages/cottage-3 (80ms)
✓ Generated public assets
```

### Output Folder Structure

```
.output/
├── public/                          # Static assets & pre-rendered pages
│   ├── index.html                   # / (SSG - pre-rendered)
│   ├── _nuxt/                       # JS/CSS bundles
│   └── cottages/
│       ├── index.html               # /cottages (ISR - initial render)
│       ├── cottage-1.html           # /cottages/cottage-1 (SSG)
│       ├── cottage-2.html           # /cottages/cottage-2 (SSG)
│       └── cottage-3.html           # /cottages/cottage-3 (SSG)
└── nitro/
    ├── dev/
    └── dist/
```
