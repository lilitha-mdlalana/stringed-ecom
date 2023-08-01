<script setup>
const {data} = await useFetch('/api/products')
const bass_guitars = data.value.filter(type => type.type === "bass")
</script>

<template>
    <div class="grid grid-cols-2 grid-rows-2">
        <ProductCard v-for="guitar in bass_guitars" :card-title="guitar.name" :route-slug="`guitar/${guitar.slug}`" :image-path="guitar.imageURL" :description="guitar.miniDescription"/>
    </div>
</template>