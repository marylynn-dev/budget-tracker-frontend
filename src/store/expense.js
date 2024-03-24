// Utilities
import { defineStore } from 'pinia'
import { get } from '@/services/expense'

export const useExpenseStore = defineStore('expenseStore', {
  state: () => ({
    expenses: [],
  }),

  //define actions for the store
  actions: {
    async getExpenses() {
      try {
        this.expenses = await get()
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {

  }
})
