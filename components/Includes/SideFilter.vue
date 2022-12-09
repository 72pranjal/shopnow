<template>
    <div>
        <h2>Helo filter data render component</h2>
        {{ sideFilterListData }}
    </div>
 </template>
    
<script setup>
    const props = defineProps({
        sideFilterListData:{
        type:Array,
    }});
</script>