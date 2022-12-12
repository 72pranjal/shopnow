<template>
    <div>
        <IncludesHeader class="" />
        <div class="flex">
            <IncludesSideFilter class="w-[22%]" />
            <IncludesScrollToTop />l
            <slot />
        </div>
        <IncludesFooter class="" />
    </div>
</template>