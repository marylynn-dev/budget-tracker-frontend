// Utilities
import { defineStore } from 'pinia'
import { get } from '@/services/category'

export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        categories: [],
    }),

    //define actions for the store
    actions: {
        async getCategories() {
            try {
                this.categories = await get()
            } catch (err) {
                console.log(err)
            }
        }
    },
    getters: {

    }
})
