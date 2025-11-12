<script setup lang="ts">
import { useRouter } from 'vue-router'

const navigation = {
  home: {
    title: 'My Favourites',
    path: 'favourites',
  },
  favourites: {
    title: 'Home',
    path: 'home',
  },
}

const router = useRouter()

const navigateTo = () => {
  const entry = router.currentRoute.value.name as keyof typeof navigation
  router.push({ name: navigation[entry].path })
}
</script>

<template>
  <header class="border-b border-dark-border bg-dark-card">
    <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <p class="text-2xl font-bold">Meal Planner</p>
        <button
          @click="navigateTo"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
        >
          {{
            navigation[(router.currentRoute.value.name as keyof typeof navigation) ?? 'home'].title
          }}
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
I
