import Image from "next/image";
import Link from "next/link";
import type { CountryCottage } from "@/app/api/cottages/route";

interface CottageCardProps {
  cottage: CountryCottage;
}

export default function CottageCard({ cottage }: Readonly<CottageCardProps>) {
  return (
    <Link
      href={`/cottages/${cottage.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] dark:bg-stone-800"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={cottage.imageUrl}
          alt={cottage.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-100">
          {cottage.name}
        </h3>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-300 flex items-center gap-1">
          <span>📍</span> {cottage.address}
        </p>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          {cottage.country}
        </p>
        <div className="mt-4 flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-700">
          <span className="text-2xl font-bold text-amber-600 dark:text-amber-500">
            ${cottage.price.toLocaleString()}
          </span>
          <span className="text-sm text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-700 px-3 py-1 rounded-full">
            por noche
          </span>
        </div>
      </div>
    </Link>
  );
}
