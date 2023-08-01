<script setup>
defineProps({
  cardTitle: String,
  imagePath: String,
  description: String,
  routeSlug:String
})
</script>

<template>
  <nuxt-link :to="routeSlug">
 <div class="card bg-base-100 shadow-xl mx-6 my-6">
  <figure><img :src="imagePath" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{{ cardTitle }}</h2>
    <p>{{ description }}</p>
    <div class="card-actions justify-end">
      <nuxt-link :to="routeSlug" class="btn btn-primary">Buy Now</nuxt-link>
    </div>
  </div>
</div>
</nuxt-link>
</template>