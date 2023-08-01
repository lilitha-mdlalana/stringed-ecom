<script setup>
const {data} = await useFetch('/api/products')
const guitar_accessories = data.value.filter(type => type.type === "accessories")
</script>

<template>
    <div class="grid grid-cols-2 grid-rows-2">
        <ProductCard v-for="guitar in guitar_accessories" :card-title="guitar.name" :route-slug="`guitar/${guitar.slug}`" :image-path="guitar.imageURL" :description="guitar.miniDescription"/>
    </div>
</template>