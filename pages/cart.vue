<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from "@/stores/cart"
const { getCartItems,totalPrice } = storeToRefs(useCartStore())
</script>

<template>
    <h1 class="text-3xl font-bold text-center">My Cart</h1>
    <div class="overflow-x-auto">
        <table class="table">
            <thead>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <CartTableRow v-for="(item,index) in getCartItems" :key="item.name" :guitar-name="item.name" :type="item.type"
                    :price="item.price" :image-path="item.imageURL" />
            </tbody>
        </table>
    </div>
    Total: R {{ totalPrice}} 
</template>