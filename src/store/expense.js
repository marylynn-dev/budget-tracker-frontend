// Utilities
import { defineStore } from 'pinia'
import { get } from '@/services/apis/api'

export const useExpenseStore = defineStore('expenseStore', {
  state: () => ({
    expenses: [],
  }),

  //define actions for the store
  actions: {
    async getExpenses() {
      try {
        this.expenses = await get()
        console.log(this.expenses)
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {

  }
})
