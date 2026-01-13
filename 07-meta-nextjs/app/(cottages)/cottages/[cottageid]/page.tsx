import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cottagesApiClient } from "../api/cottages-api-client";

type Params = Promise<{ cottageid: string }>;

// Pre-generate static pages at build time
// we limit to first 3 cottages for demo purposes
export async function generateStaticParams() {
  const cottages = await cottagesApiClient.getCottages();

  return cottages.slice(0,3).map((cottage) => ({
    cottageid: cottage.id,
  }));
}

// just for learning purpose.. this is our static metadata to the page
// we can add async calls to fetch dynamic data for metadata
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { cottageid } = await params;
  const cottage = await cottagesApiClient.getCottageById(cottageid);

  if (!cottage) {
    return {
      title: "Cottage not found",
      description: "The cottage you are looking for does not exist.",
    };
  }

  return {
    title: `${cottage.name} | Country Cottages`,
    description: `${cottage.name} in ${cottage.country}. ${cottage.address}. from $${cottage.price}/night.`,
    openGraph: {
      title: cottage.name,
      description: `Rent ${cottage.name} in ${cottage.country} from $${cottage.price}/night`,
      images: [cottage.imageUrl],
    },
  };
}

export default async function CottageDetail({ params }: { params: Params }) {
  const { cottageid } = await params;
  const cottage = await cottagesApiClient.getCottageById(cottageid);

  if (!cottage) {
    return (
      <main className="min-h-screen bg-linear-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-stone-800">
            <h1 className="mb-4 text-3xl font-bold text-stone-800 dark:text-stone-100">
              Cottage not found
            </h1>
            <p className="mb-8 text-stone-600 dark:text-stone-300">
              Sorry, the cottage you are looking for does not exist or has been removed.
            </p>
            <Link
              href="/cottages"
              className="inline-block rounded-xl bg-amber-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
            >
              ← Back to Cottages
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/cottages"
            className="text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400"
          >
            ← Back to Cottages
          </Link>
        </nav>

        {/* Hero Image */}
        <div className="group relative mb-8 h-80 w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={cottage.imageUrl}
            alt={cottage.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              {cottage.name}
            </h1>
          </div>
        </div>

        {/* Content Card */}
        <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-stone-800">
          {/* Address */}
          <div className="mb-4 flex items-center gap-2 text-stone-600 dark:text-stone-300">
            <span className="text-xl">📍</span>
            <span className="text-lg">{cottage.address}</span>
          </div>

          {/* Country Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700 dark:bg-stone-700 dark:text-stone-300">
              🌍 {cottage.country}
            </span>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-stone-200 dark:border-stone-700" />

          {/* Price Section */}
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-1 text-sm text-stone-500 dark:text-stone-400">
                Precio por noche
              </p>
              <p className="text-4xl font-bold text-amber-600 dark:text-amber-500">
                ${cottage.price}
              </p>
            </div>
            <p className="text-stone-500 dark:text-stone-400">
              Taxes included
            </p>
          </div>

          {/* Reserve Button */}
          <button
            type="button"
            className="w-full rounded-xl bg-amber-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-amber-700 hover:shadow-lg"
          >
            Reserve Now
          </button>
        </div>
      </div>
    </main>
  );
}