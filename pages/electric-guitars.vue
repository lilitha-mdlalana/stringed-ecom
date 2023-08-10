<script setup>
const {data} = await useFetch('/api/products')
const electric_guitars = data.value.filter(type => type.type === "electric")
</script>

<template>
    <div class="md:grid md:grid-cols-2 md:grid-rows-2">
        <ProductCard v-for="guitar in electric_guitars" :card-title="guitar.name" :route-slug="`guitar/${guitar.slug}`" :image-path="guitar.imageURL" :description="guitar.miniDescription"/>
    </div>
</template>