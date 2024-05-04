<script setup>
import Card from '../components/card/Card.vue';
import apiProducts from "../helpers/api.js"
import { useProductsStore } from '../stores/productsStore';
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const productsStore = useProductsStore()

async function getFetchProducts(start = 0, search = "", limit = 12) {
    try {
        const res = await apiProducts.getProducts(start, search, limit)
        productsStore.getProducts(res.products, res.total)
    } catch (error) {
        console.log(error.message);
    }
}

// const magic = 5 && 4 && 1
// || yoki - chapda, && va - o`ng
// console.log(magic);

const currentPage = ref(+route.query.page || 1);

const onClickHandler = (page) => {
    if (page === 1) router.push("/")
    else router.push(`/?page=${page}`)
    getFetchProducts(page * 12 - 12, productsStore.keyword)
};

// ?query, :params

getFetchProducts(currentPage.value * 12 - 12, productsStore.keyword)

if (+route.query.page > Math.ceil(productsStore.total / 12)) {
    router.push('/error');
}

</script>

<template>
    <section class="products">
        <div class="container">
            <h2 class="products__title">Products</h2>

            <div class="products__cards">
                <Card class="products__card" v-for="item in productsStore.products" :info="item" :key="item.id" />
            </div>

            <vue-awesome-paginate :total-items="+productsStore.total" :items-per-page="12" :max-pages-shown="3"
                v-model="currentPage" :on-click="onClickHandler" />
        </div>
    </section>
</template>