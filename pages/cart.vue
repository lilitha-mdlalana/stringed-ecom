<script setup>

import { useCartStore } from "@/stores/cart"
const { cartItems, totalPrice, clearCart } = useCartStore()

</script>

<template>
    <div v-if="cartItems.length === 0">
        <h1>Go ahead! Add some items to your cart</h1>
    </div>
    <div v-else>
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
                    <CartTableRow v-for="(item, index) in cartItems" :key="item.name" :guitar-name="item.name"
                        :type="item.type" :price="item.price" :image-path="item.imageURL" />
                </tbody>
            </table>
        </div>
        <div class="flex flex-col justify-end">
            <p>Total: R {{ totalPrice }} </p>
            <div class="buttons">
                <button class="btn btn-primary my-3" @click="clearCart"> Clear cart</button>
                <button class="btn" onclick="my_modal_1.showModal()">Checkout</button>
                <dialog id="my_modal_1" class="modal">
                    <form method="dialog" class="modal-box">
                        <h3 class="font-bold text-lg">Hello!</h3>
                        <p class="py-4">While this might be a real store some day in the future, it would not make sense for
                            me to
                            accept payments right now. But if you really want to purchase these instruments, I recommend
                            going to <a class="link" href="https://bothners.co.za/" target="_blank"> bothners.co.za</a>.
                        </p>
                        <p class="small italic">
                            - Lilitha Mdlalana
                        </p>
                        <div class="modal-action">
                            <!-- if there is a button in form, it will close the modal -->
                            <button class="btn">Close</button>
                        </div>
                    </form>
                </dialog>
            </div>

        </div>

    </div>
</template>