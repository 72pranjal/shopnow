<template>
    <div class="p-2">
        <div class="border border-gray-300 p-2">
            <h1>Filters</h1>
            <div v-if="checkedFilters.length !== 0">
                <h3 class="mb-2">Applied filters</h3>
                <ul class="mb-2">
                    <li v-for="appliedFilter, index in checkedFilters" :key="index" class="flex">
                        <XMarkIcon class="w-4 mr-2 cursor-pointer" @click="removeFilters(appliedFilter)" />
                        <span>{{ appliedFilter }}</span>
                    </li>
                </ul>
                <button class="border border-gray-400 px-3 py-1 rounded-md text-gray-600"
                    @click="removeAllFilters()">Clear All</button>
            </div>
        </div>
        <div v-for="filter, index in filters" :key="index" class="border-l border-r border-b border-gray-300 p-2">
            <div class="flex justify-between">
                <h1>{{ filter.filter_lable }}</h1>
                <ChevronUpIcon
                    :class="[openCat.includes(filter.filter_lable) ? '-rotate-180' : '', 'duration-300 w-4 cursor-pointer']"
                    @click="showSubFilters(filter.filter_lable)" />
            </div>
            <ul v-if="openCat.includes(filter.filter_lable)">
                <li v-for="subFilter, index in filter.options" :key="index" class="cursor-pointer">
                    <input type="checkbox" :id="subFilter.value" :value="filter.filter_lable + ': ' + subFilter.value"
                        v-model="checkedFilters" class="mr-2 checked:bg-slate-400">
                    <label :for="subFilter.value" class="cursor-pointer mr-3">{{ subFilter.value }}</label>
                    <span class="text-[.9rem] text-gray-600">({{ subFilter.total }})</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { XMarkIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';
import { filters } from '@/assets/jsons/sideFiltersList';

// variable to handle all checked filters
const checkedFilters = ref<string[]>([]);

// variable to store all categories whose subfilters are visible
const openCat = ref<string[]>([]);

/**
 * Function to handle visiblity of sub filters 
 * @param productId : String 
 */
const showSubFilters = (productId: string) => {
    if (!openCat.value.includes(productId)) {
        openCat.value.push(productId);
    } else {
        const index = openCat.value.indexOf(productId);
        openCat.value.splice(index, 1);
    }
}

/**
 * Funtion to remove particular applied sub filter
 * @param removedFilterId : string unique_value of applied filters
 */
const removeFilters = (removedFilterId: string) => {
    if (checkedFilters.value.includes(removedFilterId)) {
        const index = checkedFilters.value.indexOf(removedFilterId);
        checkedFilters.value.splice(index, 1);
    }
}

/**
 * Function to remove all applied sub filters
 */
const removeAllFilters = () => {
    checkedFilters.value = [];
}
</script>