<script lang="ts" setup>
import DayMealDetail from './DayMealDetail.vue'
import { useWeakMealStore } from '@/stores/weakMealStore'
import { useFavouriteStore } from '@/stores/favouriteStore'

const weakMealStore = useWeakMealStore()
const favouriteStore = useFavouriteStore()
</script>

<template>
  <div class="flex flex-col gap-y-10">
    <h2 class="text-lg font-semibold mb-4">Meals for the Week</h2>
    <div v-for="day in Object.keys(weakMealStore.meals)" :key="day">
      <DayMealDetail
        :day="day"
        :meals="weakMealStore.meals[day as keyof typeof weakMealStore.meals] ?? []"
        @addFavourite="favouriteStore.addFavourite({ name: $event })"
        @deleteMeal="weakMealStore.deleteMeal({ name: $event, weekDay: day as keyof typeof weakMealStore.meals })"
      />
    </div>
  </div>
</template>
