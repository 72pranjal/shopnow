<template>
    <div class="bg-orange-300 h-screen p-2">
        <div class="border border-gray-300 p-2">
            <h1>Filters</h1>
            <div>
                <h3 class="mb-2">Applied filters</h3>
                <ul class="mb-2">
                    <li class="flex">
                        <XMarkIcon class="w-4 mr-2" />
                        <span>Category: Kurtas</span>
                    </li>
                </ul>
                <button class="border border-gray-400 px-3 py-1 rounded-md text-gray-600">Clear All</button>
            </div>
        </div>
        <div class="border border-gray-300 p-2">
            <div class="flex justify-between">
                <h1>Category</h1>
                <ChevronUpIcon :class="[isSubFilters ? '-rotate-180' : '', 'duration-300 w-4 cursor-pointer']"
                    @click="showSubFilters()" />
            </div>
            <ul v-if="isSubFilters">
                <li class="cursor-pointer">
                    <input type="checkbox" id="kurta" value="Kurta" v-model="checkedFilters"
                        class="mr-2 checked:bg-slate-400">
                    <label for="kurta" class="cursor-pointer">Kurta</label>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { XMarkIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';

const checkedFilters = ref([]);
const isSubFilters = ref(false);

const showSubFilters = () => {
    isSubFilters.value = !isSubFilters.value;
}
</script>