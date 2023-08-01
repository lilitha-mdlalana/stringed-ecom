<script setup lang="ts">
defineProps({
    route:String,
    imagePath:String,
    altDescription:String,
})
</script>

<template>
  <nuxt-link :to="route">
    <div class="card image mx-6 my-6">
  <figure><img :src="imagePath" :alt="altDescription" /></figure>
</div>
</nuxt-link>
</template>