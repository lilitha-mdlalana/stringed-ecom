import { defineStore } from "pinia"

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: useLocalStorage("cart", [])
    }),
    getters:{
        getCartItems: (state) => state.cartItems,
        cartLength: (state) => state.cartItems.length,
        totalPrice(){
            //figure out why this doesnt work as supposed to
            return this.getCartItems.reduce((total,item) => total.price + item.price)
        },
    },
    actions: {
        addItem(item) {
            this.cartItems.push(item)
        },
        removeItem(index){
            this.cartItems.splice(index,1)
        }
    }
})