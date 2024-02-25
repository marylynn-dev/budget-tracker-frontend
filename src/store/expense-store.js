// Utilities
import { defineStore } from 'pinia'
import { get } from '@/services/api'

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
    getExpensesByMonthYear(state, { month, year }) {
      return state.expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getMonth() === month - 1 && expenseDate.getFullYear() === year; // Month index starts from 0
      });
    },
  }
})
