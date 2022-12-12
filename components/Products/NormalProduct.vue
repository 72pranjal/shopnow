<template>
    <div class="flex flex-wrap bg-white">
        <div v-for="product in someProductN" :key="product.id_product">
            <div class="w-64 md:w-72 mr-8 mt-10 border-2  h-[34rem]  relative border-slate-100 ml-8 overflow-hidden  cursor-pointer"
            @mouseenter="show(product.id_product)" @mouseleave="hide(product.id_product)"
             >
                <div class="relative">
                    <img class="absolute" :src="product.image" alt="hello">
                    <div
                        :class="[hoverIdArray.includes(product.id_product) ? '' : 'opacity-0', 'bg-red-600 w-[100%] top-[24rem] duration-1000 animate-plus absolute h-10 text-center']">
                        <p class="p-2 text-white">View Details</p>
                    </div>
                </div>
                <div class="absolute bottom-0  text-sm top-3/4 p-4 pt-10 leading-6">
                    <p class="">{{ product.Product_Title_FH === null ? product.name : product.Product_Title_FH }}</p>
                    <p> Rs. {{ product.price }}</p>
                    <p :class="[hoverIdArray.includes(product.id_product) ? '' : 'opacity-0 duration-1000 ']">{{removeBrac(product.size)}} </p>
                </div>
            </div>
        </div>
    </div>
   <div v-if="isLoading" class="text-center p-10">

    <button type="button" class=" ..." disabled>
    <ArrowPathIcon class="animate-spin duration-700  h-14 w-10 mr-14 text-red-600 ..." viewBox="0 0 24 24" />
   </button>
   </div>
</template>

<script setup lang="ts">

import { ArrowPathIcon} from '@heroicons/vue/24/outline';

const props = defineProps({
    productsDataa: {type:<any>Array},
})

const hoverIdArray = ref<string[]>([]);
const start =ref<number>(0)
const end =ref<number>(8)
const isLoading = ref<boolean>(false)

// Computed property is used to get some from base array
const someProductN = computed<any[]>(()=> props.productsDataa.slice(start.value, end.value));

/**
 * This function is used to remove all squre brackets and commas from product size
 *
 * @param {str} - size value with brackets and commas
 * @retur {string} - size value without Brackets and commas
 */
 function removeBrac(str: string){
    const brackets = str.replace(/[\[\]']+/g, " ")
    const commas  = brackets.replaceAll(",", " ")
    return "Size - " + commas
}

/**
 * This function is used for show Size field and View details button
 * when user focus in from particular image
 *
 * @param {id} - id of praticuler image
 */
function show(id: string) {
    hoverIdArray.value.push(id);
}

/**
 * This function is used for hide Size field and View details button
 * when user focus out from particular image
 *
 * @param {id} - id of praticuler image
 */
function hide(id: string) {
    const index = hoverIdArray.value.indexOf(id)
    hoverIdArray.value.splice(index, hoverIdArray.value.length)
}

/**
 * This function is used to get some data when user scroll the web page
 */
 function getDataOnScroll(){
   isLoading.value = true;
   end.value += 8;
}

 onMounted(()=>{
 setTimeout(()=>{
   window.addEventListener("scroll", (e)=>{  
         setTimeout(()=>{
            getDataOnScroll()
         },2000)
          setTimeout(()=>{
            if(end.value >= props.productsDataa.length ) end.value = 8
            getDataOnScroll()
          })
})
},3000)
});

</script>