<script setup>
const {data} = await useFetch('/api/products')
const acoustic_guitars = data.value.filter(type => type.type === "acoustic")
</script>

<template>
    <div class="grid grid-cols-2 grid-rows-2">
        <ProductCard v-for="guitar in acoustic_guitars" :card-title="guitar.name" :route-slug="`guitar/${guitar.slug}`" :image-path="guitar.imageURL" :description="guitar.miniDescription"/>
    </div>
</template>