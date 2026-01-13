export default function Loading() {
  return (
    <main className="min-h-screen bg-linear-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb skeleton */}
        <div className="mb-8">
          <div className="h-5 w-32 animate-pulse rounded bg-stone-200 dark:bg-stone-700" />
        </div>

        {/* Hero image skeleton */}
        <div className="relative mb-8 h-80 w-full animate-pulse rounded-2xl bg-stone-200 dark:bg-stone-700" />

        {/* Content card skeleton */}
        <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-stone-800">
          {/* Title skeleton */}
          <div className="mb-6 h-10 w-3/4 animate-pulse rounded bg-stone-200 dark:bg-stone-700" />

          {/* Address skeleton */}
          <div className="mb-4 flex items-center gap-2">
            <div className="h-5 w-5 animate-pulse rounded-full bg-stone-200 dark:bg-stone-700" />
            <div className="h-5 w-48 animate-pulse rounded bg-stone-200 dark:bg-stone-700" />
          </div>

          {/* Country badge skeleton */}
          <div className="mb-6">
            <div className="inline-block h-7 w-24 animate-pulse rounded-full bg-stone-200 dark:bg-stone-700" />
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-stone-200 dark:border-stone-700" />

          {/* Price section skeleton */}
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="mb-2 h-4 w-20 animate-pulse rounded bg-stone-200 dark:bg-stone-700" />
              <div className="h-10 w-32 animate-pulse rounded bg-stone-200 dark:bg-stone-700" />
            </div>
            <div className="h-5 w-24 animate-pulse rounded bg-stone-200 dark:bg-stone-700" />
          </div>

          {/* Button skeleton */}
          <div className="h-14 w-full animate-pulse rounded-xl bg-stone-200 dark:bg-stone-700" />
        </div>
      </div>
    </main>
  );
}
