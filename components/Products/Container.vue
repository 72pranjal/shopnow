<template>
    <div class="flex flex-wrap bg-white mt-20">
        <div v-for="product in productsData" :key="product.id_product">
            <div class="w-72 mr-8 mt-10 border-2  h-[34rem]  relative border-slate-100 ml-8 overflow-hidden  cursor-pointer"
                @mouseenter="show(product.id_product)" @mouseleave="hide()">
                <div class="relative">
                    <img class="absolute" :src="product.image" alt="hello">
                    <div
                        :class="[showViewDetailsAndSize ? '' : 'opacity-0', 'bg-red-600 w-[100%] top-[24rem] duration-1000 animate-plus absolute h-10 text-center']">
                        <p class="p-2 text-white">View Details</p>
                    </div>
                </div>
                <div class="absolute bottom-0 p-3 leading-8">
                    <p>{{ product.Product_Title_FH === null ? product.name : product.Product_Title_FH }}</p>
                    <p>{{ product.price }}</p>
                    <p :class="[showViewDetailsAndSize ? '' : 'opacity-0 duration-1000 ']">Size - {{ product.size }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { productsData } from '~~/assets/jsons/products';

const showViewDetailsAndSize = ref<boolean>(false);

// This function is used for show Size field and View details button
// when user focus in
function show(id: string) {
    if (id) showViewDetailsAndSize.value = true
}

// This function is used for hide Size field and View details button
// when user focus out 
function hide() {
    showViewDetailsAndSize.value = false;
}
// console.log(productsData)
</script>