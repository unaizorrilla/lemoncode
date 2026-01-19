<script setup lang="ts">
interface Cottage {
  id: number
  name: string
  description: string
  image: string
  price: number
  location: string
  guests: number
}

defineProps<{
  cottage: Cottage
}>()
</script>

<template>
  <article class="bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
    <div class="relative h-48 overflow-hidden">
      <NuxtImg
        :src="cottage.image"
        :alt="cottage.name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="sm:100vw md:50vw lg:33vw"
      />
    </div>
    <div class="p-6">
      <div class="flex justify-between items-start mb-2">
        <h2 class="text-xl font-semibold text-stone-800 dark:text-stone-100">
          {{ cottage.name }}
        </h2>
        <span class="text-amber-600 font-bold">{{ cottage.price }}€/night</span>
      </div>
      <p class="text-stone-600 dark:text-stone-300 text-sm mb-4">
        {{ cottage.description }}
      </p>
      <div class="flex justify-between items-center text-sm text-stone-500 dark:text-stone-400">
        <span>📍 {{ cottage.location }}</span>
        <span>👥 {{ cottage.guests }} guests</span>
      </div>
      <NuxtLink
        :to="`/cottages/${cottage.id}`"
        class="mt-4 block text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
      >
        View Details
      </NuxtLink>
    </div>
  </article>
</template>