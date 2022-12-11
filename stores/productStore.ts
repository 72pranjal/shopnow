import { defineStore } from "pinia";


export const useProductStore = defineStore('productStore', {
    state: () => ({
        appliedFilters: <string[]>[]
    }),
    getters: {
        getAppliedFilters(state) {
            return state.appliedFilters;
        }
    },
    actions: {
        setFilters(filters: string) {
            this.appliedFilters.push(filters);
        },
        removeFilters(filters: string) {
            const index = this.appliedFilters.indexOf(filters);
            this.appliedFilters.splice(index, 1);
        },
        removeAllFilters() {
            this.appliedFilters = [];
        }
    }
})