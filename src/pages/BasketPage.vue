<script setup>
import { useProductsStore } from "../stores/productsStore.js";
const productsStore = useProductsStore();
// import Home from "../components/icons/Home.vue";


</script>

<template>
    <section class="basket">
        <div class="container">

            <div class="basket__table">

                <div class="basket__empty" v-if="!productsStore.cartItems.length">
                    <td>
                        <h2 class="basket__empty-title">empty...</h2>
                        <img src="../assets/images/empty.webp" alt="">
                        <RouterLink to="/" class="basket__home-btn">
                            Continue Shopping !
                        </RouterLink>
                    </td>
                </div>
                <div v-else class="basket__items">
                    <p class="basket__total-items"> Total items in cart: {{ productsStore.cartItems.length }}</p>
                    <div class="really">
                        <div class="basket__list" v-for="item in productsStore.cartItems" :key="item?.id">
                            <th class="basket__img" width="250px" height="250px"><router-link
                                    :to="'/product/' + item?.id"><img :src="item?.thumbnail"
                                        class="basket__img" /></router-link></th>
                            <div class="basket__title">
                                {{ item?.title }}
                                <div class="test"><button class="basket__increment-btn" @click="item.count++">+</button>
                                    <span> {{ item?.count }}</span>
                                    <button class="basket__increment-btn"
                                        @click="item.count > 1 ? item.count-- : ''">-</button>
                                </div>
                                Price: ${{ productsStore.getDiscount(item) }} <button class="basket__del-btn"
                                    @click="productsStore.deleteProduct(item.id)">Delete</button>
                            </div>
                        </div>
                    </div>

                    <h3 class="basket__total">Total Price: ${{ productsStore.cartItems?.reduce((acc, item) => acc +=
                    (productsStore.getDiscount(item) * item.count), 0) }}</h3>

                </div>

                <!-- <h3 class="basket__name">Total Price: {{ productsStore.cartItems?.reduce((acc, item) => acc +=
                item.price, 0) }}</h3> -->


            </div>
        </div>
    </section>
</template>
