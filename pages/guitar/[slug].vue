<script setup>
import { useCartStore } from "@/stores/cart"
const cart = useCartStore()
const route = useRoute()

const { data } = await useFetch('/api/products')
const product = data.value.find(product => product.slug === route.params.slug)


const addToCart = async () => {
    cart.addItem(
        {
            name: product.name,
            price: product.price,
            imageURL: product.imageURL,
            type: product.type,
        }
    )
}
</script>

<template>
    <Head>
        <Title>{{ product.name }}</Title>
        <Meta name="description"
            :content="product.description"/>
        <Meta name="keywords" content="e-commerce, guitar,stringed instruments"/>
        <Meta name="robots" content="index, follow"/>
        <Meta name="language" content="English"/>
    </Head>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
                    <img alt="Party" :src="product.imageURL" class="h-full w-full" />
                </div>

                <div class="lg:py-24">
                    <h2 class="text-3xl font-bold sm:text-4xl">{{ product.name }}</h2>
                    <p class="mt-4 text-gray-600 font-bold">
                        R {{ product.price }}
                    </p>
                    <p class="mt-4 text-gray-600">
                        {{ product.description }}
                    </p>

                    <button @click="addToCart" class="btn btn-primary  my-3">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>