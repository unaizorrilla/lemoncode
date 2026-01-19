<script setup lang="ts">
// Obtener el parámetro :id de la ruta
const route = useRoute()
const id = route.params.id as string

// Usar el composable para obtener el cottage
const { getById } = useCottages()
const { data: cottage, pending, error } = await getById(id)

// Si no existe, mostrar error 404
if (!cottage.value && !pending.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Cottage not found'
  })
}
</script>

<template>
  <main class="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950">
    <div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="mb-6">
        <NuxtLink
          to="/cottages"
          class="text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 transition-colors"
        >
          ← Back to Cottages
        </NuxtLink>
      </nav>

      <!-- Loading -->
      <div v-if="pending" class="flex justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600 text-xl">{{ error.message }}</p>
        <NuxtLink
          to="/cottages"
          class="mt-4 inline-block text-amber-600 hover:text-amber-700"
        >
          ← View all cottages
        </NuxtLink>
      </div>

      <!-- Cottage Detail -->
      <article v-else-if="cottage" class="bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden">
        <!-- Image -->
        <NuxtImg
          :src="cottage.imageUrl"
          :alt="cottage.name"
          class="w-full h-64 sm:h-96 object-cover"
        />

        <!-- Content -->
        <div class="p-8">
          <header class="mb-6">
            <h1 class="text-3xl sm:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-2">
              {{ cottage.name }}
            </h1>
            <p class="text-stone-600 dark:text-stone-300 text-lg">
              📍 {{ cottage.address }}, {{ cottage.country }}
            </p>
          </header>

          <!-- Price -->
          <div class="mb-8 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
            <p class="text-amber-600 dark:text-amber-400 font-bold text-2xl">
              {{ cottage.price }}€ <span class="text-base font-normal">/night</span>
            </p>
          </div>

          <!-- Book Button -->
          <button
            class="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Book Now
          </button>
        </div>
      </article>
    </div>
  </main>
</template>