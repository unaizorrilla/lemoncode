# Metaframeworks NextJs

This contains all the files to complete the mandatory lab for module of Metaframeworks.

We implemented a sample of NextJs app with next features:

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

The easy way is open two terminals. On the first one execute `npm run dev` to open the projects. On the other terminal execute `npm run build` to create the production build. 

Once the build finished you should seed something like 

> rentvillages@0.1.0 build
> next build

▲ Next.js 16.1.1 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 1103.2ms
✓ Finished TypeScript in 971.4ms
✓ Collecting page data using 15 workers in 298.1ms
✓ Generating static pages using 15 workers (9/9) in 1794.8ms
✓ Finalizing page optimization in 10.1ms

Route (app)                Revalidate  Expire
┌ ○ /
├ ○ /_not-found
├ ƒ /api/cottages
├ ƒ /api/cottages/[id]
├ ○ /cottages                      1m      1y
└ ● /cottages/[cottageid]
  ├ /cottages/cottage-1
  ├ /cottages/cottage-2
  └ /cottages/cottage-3


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand

Check / is static and /cottages or cottages/[cottageId] are ISR and SSG

# About NextJ

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

