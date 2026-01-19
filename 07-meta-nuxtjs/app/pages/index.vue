<template>
  <div class="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950">
    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <NuxtImg
        src="/hero-cottage.jpg"
        alt="Cabaña rural en un entorno natural"
        class="absolute inset-0 w-full h-full object-cover brightness-75"
        sizes="100vw"
        loading="eager"
      />
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Rural Retreats
        </h1>
        <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 drop-shadow-md">
          Discover Your Perfect Country Cottage Getaway
        </p>
        <NuxtLink
          to="/cottages"
          class="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View Cottages
        </NuxtLink>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-6">
          Your Perfect Country Getaway
        </h2>
        <p class="text-lg text-stone-600 dark:text-stone-300 max-w-3xl mx-auto mb-12">
          At Rural Retreats, we have been connecting travelers with the best country cottages in Spain for over 15 years. We offer unique accommodations where tranquility, nature, and comfort come together to create unforgettable experiences.
        </p>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg">
            <div class="text-4xl mb-4">🏡</div>
            <h3 class="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
              Charming Homes
            </h3>
            <p class="text-stone-600 dark:text-stone-300">
              Carefully selected properties that combine rural authenticity with all modern comforts.
            </p>
          </div>
          <div class="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg">
            <div class="text-4xl mb-4">🌿</div>
            <h3 class="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
              Natural Settings
            </h3>
            <p class="text-stone-600 dark:text-stone-300">
              Prime locations surrounded by nature, perfect for disconnecting from the urban pace.
            </p>
          </div>
          <div class="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-lg">
            <div class="text-4xl mb-4">⭐</div>
            <h3 class="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
              Premium Experience
            </h3>
            <p class="text-stone-600 dark:text-stone-300">
              Personalized attention and exclusive services to make your stay perfect from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-16 bg-stone-200/50 dark:bg-stone-800/50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-stone-800 dark:text-stone-100 text-center mb-12">
          Our Featured Properties
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="relative h-64 rounded-xl overflow-hidden group">
            <NuxtImg
              src="/cottage-1.jpg"
              alt="Casa rural con jardín"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="sm:100vw md:33vw"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span class="absolute bottom-4 left-4 text-white font-semibold">
              Forest House
            </span>
          </div>
          <div class="relative h-64 rounded-xl overflow-hidden group">
            <NuxtImg
              src="/cottage-2.jpg"
              alt="Cabaña de montaña"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="sm:100vw md:33vw"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span class="absolute bottom-4 left-4 text-white font-semibold">
              Mountain Retreat
            </span>
          </div>
          <div class="relative h-64 rounded-xl overflow-hidden group">
            <NuxtImg
              src="/cottage-3.jpg"
              alt="Villa rural moderna"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="sm:100vw md:33vw"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span class="absolute bottom-4 left-4 text-white font-semibold">
              Valley Villa
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-6">
          Ready for your next rural adventure?
        </h2>
        <p class="text-lg text-stone-600 dark:text-stone-300 mb-8">
          Explore our full collection of country cottages and find the perfect retreat for you.
        </p>
        <NuxtLink
          to="/cottages"
          class="inline-flex items-center gap-2 bg-stone-800 dark:bg-stone-100 hover:bg-stone-900 dark:hover:bg-white text-white dark:text-stone-900 font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Cottages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </NuxtLink>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-stone-800 dark:bg-stone-950 text-stone-300 py-12 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h3 class="text-2xl font-bold text-white mb-4">Rural Retreats</h3>
        <p class="mb-6">Your destination for authentic rural experiences</p>
        <div class="flex justify-center gap-6 text-sm">
          <span>📍 Spain</span>
          <span>📞 +34 900 123 456</span>
          <span>✉️ info@ruralretreats.es</span>
        </div>
        <p class="mt-8 text-stone-500 text-sm">
          © 2026 Rural Retreats. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>