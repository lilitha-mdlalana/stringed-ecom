<script setup>
const route = useRoute()
const { data } = await useFetch('/api/products')
const product = data.value.find(product => product.slug === route.params.slug)
</script>

<template>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
                    <img alt="Party"
                        :src="product.imageURL"
                        class="h-full w-full" />
                </div>

                <div class="lg:py-24">
                    <h2 class="text-3xl font-bold sm:text-4xl">{{product.name}}</h2>

                    <p class="mt-4 text-gray-600">
                       {{ product.description }}
                    </p>

                    <a href="#"
                        class="btn btn-primary  my-3">
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>