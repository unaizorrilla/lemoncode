<script setup lang="ts">
import { ref } from 'vue'
import { useWeakMealStore } from '@/stores/weakMealStore'

const DEFAULT_WEEK_DAY = 'Sunday'

const formData = ref({
  meal: '',
  weekDay: DEFAULT_WEEK_DAY,
})

const weakMealStore = useWeakMealStore()

const handleSubmit = () => {
  weakMealStore.addMeal({
    name: formData.value.meal,
    weekDay: formData.value.weekDay as keyof typeof weakMealStore.meals,
  })

  formData.value.meal = ''
  formData.value.weekDay = DEFAULT_WEEK_DAY
}
</script>

<template>
  <div
    class="max-w-md mx-auto align-middle border border-gray-500 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <form @submit.prevent="handleSubmit">
      <div>AddMeal</div>

      <div>
        <label for="meal" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Meal</label
        >
        <input
          type="text"
          id="meal"
          placeholder="Add a new meal"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          minlength="5"
          v-model="formData.meal"
        />
      </div>

      <div>
        <label for="weekDay" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Weak Day</label
        >
        <select
          id="weekDay"
          v-model="formData.weekDay"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
