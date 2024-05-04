<script setup>
import Card from "../components/card/Card.vue";
import { useProductsStore } from "@/stores/productsStore";
const productsStore = useProductsStore()

</script>

<template>
    <section class="search">
        <div class="container">
            <div v-if="productsStore.products.length">
                <Card class="search__card" v-for="item in productsStore.products" :info="item" :key="item.id" />
            </div>
            <div class="error__content" v-else>
                <h2 class="errro__title">{{ productsStore.keyword }} is not found...</h2>
                <img src="../assets/images/error.webp" alt="" class="error__img">
            </div>
        </div>
    </section>
</template>