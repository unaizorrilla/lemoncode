import Link from "next/link";
import { cottagesApiClient } from "./api/cottages-api-client";
import CottageCard from "./components/CottageCard";
import { Metadata } from "next";

// just for learning purpose.. this is our static metadata to the page
export const metadata: Metadata = {
  title: "Country Cottages",
  description:
    "Discover our unique collection of country cottages for an unforgettable vacation.",
  openGraph: {
    title: "Country Cottages",
    description:
      "Explore our collection of unique country cottages for an unforgettable vacation.",
  },
};

export default async function Cottages() {
  
  const cottages = await cottagesApiClient.getCottages();

  return (
    <main className="min-h-screen bg-linear-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link
            href="/"
            className="text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </nav>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            Country Cottages
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            Discover our unique collection of country cottages for an unforgettable vacation. 
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cottages.map((cottage) => (
            <CottageCard key={cottage.id} cottage={cottage} />
          ))}
        </div>
      </div>
    </main>
  );
}