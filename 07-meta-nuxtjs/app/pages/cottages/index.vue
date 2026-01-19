<template>
    <main class="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950">
        <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <!-- Breadcrumb -->
            <nav class="mb-6">
                <NuxtLink to="/"
                    class="text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 transition-colors">
                    ← Back to Home
                </NuxtLink>
            </nav>

            <header class="mb-12 text-center">
                <h1 class="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                    Country Cottages
                </h1>
                <p class="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
                    Discover our unique collection of country cottages for an unforgettable vacation.
                </p>
            </header>

            <!-- Loading -->
            <div v-if="pending" class="flex justify-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            </div>

            <!-- Error -->
            <div v-else-if="error" class="text-center py-12">
                <p class="text-red-600">{{ error.message }}</p>
            </div>

            <!-- Grid -->
            <div v-else class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <article v-for="cottage in cottages" :key="cottage.id"
                    class="bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <NuxtImg :src="cottage.imageUrl" :alt="cottage.name" class="w-full h-48 object-cover" />
                    <div class="p-6">
                        <h2 class="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-2">
                            {{ cottage.name }}
                        </h2>
                        <p class="text-stone-600 dark:text-stone-300 text-sm mb-2">
                            📍 {{ cottage.address }}, {{ cottage.country }}
                        </p>
                        <p class="text-amber-600 font-bold text-lg mb-4">
                            {{ cottage.price }}€/night
                        </p>
                        <NuxtLink :to="`/cottages/${cottage.id}`"
                            class="block text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-full transition-colors">
                            View Details
                        </NuxtLink>
                    </div>
                </article>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const { getAll } = useCottages()
const { data: cottages, pending, error } = await getAll()
</script>