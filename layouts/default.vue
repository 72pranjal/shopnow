<template>
    <div>
        <IncludesHeader class="" />
        <div class="flex">
            <IncludesSideFilter class="w-[20%]" />
            <slot />
        </div>
        <IncludesFooter class="" />
    </div>
</template>