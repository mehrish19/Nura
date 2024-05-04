<script setup>

import apiProducts from "@/helpers/api";
import { useProductsStore } from "@/stores/productsStore";
import { ref } from "vue"
import { useRouter } from "vue-router";

import Facebook from "../icons/Facebook.vue";
import Instagram from "../icons/Instagram.vue";
import Twitter from "../icons/Twitter.vue";
import Youtube from "../icons/Youtube.vue";
import Basket from "../icons/Basket.vue";
import Search from "../icons/Search.vue";

const search = ref("")

const productsStore = useProductsStore()

const router = useRouter()

const test = async () => {
    try {
        const res = await apiProducts.getProducts(0, search.value.trim(), 12)
        productsStore.getProducts(res.products, res.total)
        productsStore.getSearch(search.value.trim())
        if (search.value.trim()) router.push("/search")
        else router.push("/")
    } catch (error) {
        console.log(error.message);
    }
}

</script>

<template>
    <nav class="nav">
        <div class="container">
            <RouterLink to="/">
                <h2 class="nav__logo">NURA</h2>
            </RouterLink>
            <ul class="nav__list">
                <li class="nav__item">
                    <RouterLink to="/" class="nav__link">Home</RouterLink>
                </li>
                <li class="nav__item">
                    <RouterLink to="/about" class="nav__link">About</RouterLink>
                </li>
                <li class="nav__item">
                    <RouterLink to="/categories" class="nav__link">Categories</RouterLink>
                </li>
                <li class="nav__item">
                    <RouterLink to="/contacts" class="nav__link">Contacts</RouterLink>
                </li>
            </ul>

            <div class="nav__content">
                <div class="nav__content-input">
                    <input type="text" placeholder="Search..." v-model="search" @keyup.enter="test">
                    <Search />
                </div>

                <RouterLink to="/basket">
                    <li class="nav__content-basket">Cart({{ productsStore.cartItems.length }})
                        <Basket />
                    </li>
                </RouterLink>


            </div>


        </div>
    </nav>
</template>

<style></style>