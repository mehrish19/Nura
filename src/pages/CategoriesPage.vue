<script setup>

import { ref } from "vue";
import apiProducts from "@/helpers/api.js"

const categories = ref(null)

async function getCategories() {
    try {
        const res = await apiProducts.getCategories()
        categories.value = res;
    } catch (error) {
        console.log(error.message);
    }
}

getCategories()
</script>
<template>
    <main>
        <section clas="categories">
            <div class="container">
                <div class="categories__content">
                    <h1 class="categories__content-title">Categories</h1>
                    <ul class="categories__content-list">
                        <li class="categories__content-item" v-for="item in categories" :key="item">
                            <RouterLink :to="'/singleCategory/' + item">{{ item }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>
