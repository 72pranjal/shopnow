<template>
    <div class=" w-[80%] p-2 mt-20">
        <ProductsFiltered v-if="isShowFilteredComponent.length !== 0" class="absolute" />
        <ProductsContainer v-else />
    </div>
</template>
<<<<<<< HEAD
<script setup lang="ts">
import { useProductStore } from '@/stores/productStore';
import { productsData } from '@/assets/jsons/products';
import { filters } from '@/assets/jsons/sideFiltersList';
import { type } from 'os';

interface filterKeyValPair {
    [key: string]: string
}

const useProductFiltes = useProductStore().getAppliedFilters;

const isShowFilteredComponent = computed(() => useProductFiltes);
const filteredData = ref<any[]>([]);
const appliedFilters = ref<filterKeyValPair[]>([]);

watch(isShowFilteredComponent.value, (newVal, oldVal) => {
    appliedFilters.value = [];
    filteredData.value = [];
    newVal.forEach(el => {
        const obj: filterKeyValPair = {};
        const filter_value: string = el.split(":")[1];
        const filter_key: string = filters.filter(filEL => filEL['filter_lable'] === el.split(":")[0])[0]['options']["1"]['code'];
        if (appliedFilters.value.filter(filteredObj => filteredObj[`${filter_key}`] === filter_value)) {
            obj[`${filter_key}`] = filter_value;
            appliedFilters.value.push(obj);
        }
    });
    Object.values(productsData).forEach(el => {
        const arr = Object.values(appliedFilters.value);
        const appliedFilterArrLength = Object.values(appliedFilters.value).length;
        let isPassed = true;
        for (let i = 0; i < appliedFilterArrLength; i++) {
            let a = el[`${Object.keys(arr[i])[0]}` as keyof typeof el];
            let b: string | number = Object.values(arr[i])[0];
            let filteredKey = Object.keys(arr[i])[0];
            if (filteredKey === 'size' && typeof a === "string") {
                console.log(filteredKey);
                let num = (a as string).split(',').join('').split('[').join('').split(']');
                num.pop();
                if (!num.some(n => +n === +b)) {
                    isPassed = false;
                    break;
                }
            } else if (filteredKey === "discount" && typeof a === "string") {
                b = b.replace('%', '');
                if (!(+a === +b)) {
                    isPassed = false;
                    break;
                }
            } else if (filteredKey === "selling_price" && typeof a === "string") {
                let start = (b.replaceAll('Rs.', '').replaceAll('to', '-').trim().split('-')[0]);
                let end = (b.replaceAll('Rs.', '').replaceAll('to', '-').trim().split('-')[1]);
                if (!(+a > +start && +a <= +end)) {
                    isPassed = false;
                    break;
                }
            } else {
                if (typeof a === "string" && typeof b === "string") {
                    a = a.trim();
                    b = b.trim();
                    if (!Object.is(a, b)) {
                        isPassed = false;
                        break;
                    }
                }
            }
        }
        if (isPassed) {
            filteredData.value.push(el);
        }
    });
    console.log("filter data : ", filteredData.value);
})
=======

<script setup>

useHead({
    title: "Womens-Shoping-Hub"
})

>>>>>>>  finally component render
</script>