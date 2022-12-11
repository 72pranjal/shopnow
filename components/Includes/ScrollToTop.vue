<template>
    <div>
        <ArrowUpCircleIcon
            :class="['fixed z-10 w-20 right-5 bottom-10 cursor-pointer text-red-500', showScroller ? '' : 'hidden']"
            @click="scrollTop()" />
    </div>
</template>
<script setup lang="ts">
import { ArrowUpCircleIcon } from '@heroicons/vue/24/solid';

const showScroller = ref(false);
const scrollTop = () => {
    window.scrollTo(0, 0);
    // showScroller.value = false;
}

const scrollHandler = () => {
    if (window.innerHeight >= 780) {
        showScroller.value = true;
        return;
    }
    showScroller.value = false;
}

onMounted(() => {
    window.addEventListener('scroll', (e) => {
        scrollHandler();
    });
})

onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
})
</script>
    