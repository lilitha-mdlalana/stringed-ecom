import { defineStore } from "pinia"


export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([])
    const totalPrice = ref(0)
    const cartLength = cartItems.value.length;

    const addItem = item => {
        cartItems.value = [...cartItems.value, item]
        totalPrice.value += item.price
    }

    const clearCart = () => {
        cartItems.value.length = 0
        totalPrice.value = 0
    }

    return {
        cartItems,
        totalPrice,
        addItem,
        cartLength,
        clearCart
    }
},
    { persist: true })