// Utilities
import { defineStore } from 'pinia'
import { login } from "@/services/apis/user";

export const useUserStore = defineStore('expenseStore', {
    state: () => ({
        user: [],
    }),

    //define actions for the store
    actions: {
        async login(email, password) {
            this.user = await login(email, password)
        }
    },
    getters: {

    }
})
