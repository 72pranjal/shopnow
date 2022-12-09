<template>
    <div>
        <IncludesHeader />
        <div>
            <IncludesSideFilter 
            :sideFilterListData="sideFilterListData"
            />
            <slot/>
        </div>
        <IncludesFooter />
    </div>
</template>

<script setup>

// Side Filter data
const sideFilterListData = [
    {
        Category: [
        {title: "Kurtas", count: 2212},
        {title: "Gilet", count: 2},
        {title: "Sets & Dresses", count: 2},
        {title: "Shirts", count: 12},
        {title: "Wsston Wears", count: 22},   
     ]
    },
    {
        Price: [
            {title: "Rs.0 to Rs.2000", count: 1},
            {title: "Rs.2000 to Rs.4000", count: 0},
            {title: "Rs.4000 to Rs.6000", count: 0},
            {title: "Rs.6000 to Rs.8000", count: 0},
            {title: "Rs.8000 to Rs.10000", count: 0},

        ]
    },
    {
        Colour: [
            {title: "Yellow", count:0},
            {title: "Black", count:0},
            {title: "Blue", count:0},
            {title: "White", count:0},
            {title: "Red", count:0},
            {title: "Brown", count:0},
            {title: "Light Pink", count:0},
            {title: "Dark Green", count:0},
            {title: "Dark Blue", count:0},
            {title: "Dark Yellow", count:0},
        ]
    }

]

</script>