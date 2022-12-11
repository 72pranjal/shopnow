<template>
    <div>
        <IncludesHeader class="" />
        <div class="flex">
            <IncludesSideFilter class="w-[22%] mt-20" />
            <slot />
        </div>
        <IncludesFooter class="" />
    </div>
</template>