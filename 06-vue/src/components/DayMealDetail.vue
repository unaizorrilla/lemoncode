<script setup lang="ts">
import { useFavouriteStore } from '@/stores/favouriteStore'
const favouriteStore = useFavouriteStore()

const $props = defineProps<{
  day: string
  meals: string[]
}>()

const $emit = defineEmits<{
  (e: 'addFavourite', mealName: string): void,
  (e: 'deleteMeal', mealName: string, day: string): void
}>()

function color(meal: string): 'red' | 'white' {
  return favouriteStore.containsMeal(meal) ? 'red' : 'white'
}
</script>
<template>
  <div class="flex flex-col gap-y-5 border p-4 rounded">
    <div class="text-lg font-medium text-gray-900 dark:text-white">{{ $props.day }} Meals</div>
    <div v-for="meal in $props.meals" :key="meal">
      <div class="flex flex-row justify-between items-center gap-4">
        <h3 class="text-xs font-medium text-gray-900 dark:text-white">{{ meal }}</h3>
        <div class="flex flex-row gap-x-3">
          <button
            class="rounded-md bg-slate-800 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" @click="$emit('addFavourite', meal)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="color(meal)" class="w-4 h-4">
              <path
                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </button>
          <button
            class="rounded-md bg-slate-800 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" @click="$emit('deleteMeal', meal, $props.day)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4">
             <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
