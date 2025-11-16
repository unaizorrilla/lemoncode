import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFavouriteStore = defineStore('useFavouriteStore', {
  state: () => {
    const meals = ref<string[]>([])

    function addFavourite(meal: { name: string }) {
      if (!meals.value.includes(meal.name)) {
        meals.value.push(meal.name)
      }
    }

    function removeFromFavourite(meal: { name: string }) {
      meals.value = meals.value.filter(m => m !== meal.name)
    }

    function containsMeal(mealName: string) : boolean {
      return meals.value.includes(mealName)
    }

    return { meals, addFavourite, removeFromFavourite, containsMeal }
  },
 persist: true
});

