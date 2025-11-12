import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWeakMealStore = defineStore('useWeakMealStore', () => {
  const meals = ref({
    Sunday: [] as string[],
    Monday: [] as string[],
    Tuesday: [] as string[],
    Wednesday: [] as string[],
    Thursday: [] as string[],
    Friday: [] as string[],
    Saturday: [] as string[],
  })

  function addMeal(meal: { name: string; weekDay: keyof typeof meals.value }) {
    meals.value[meal.weekDay].push(meal.name)
  }

  function deleteMeal(meal: { name: string; weekDay: keyof typeof meals.value }) {
    meals.value[meal.weekDay] = meals.value[meal.weekDay].filter(m => m !== meal.name)
  }

  return { meals, addMeal, deleteMeal }
})

