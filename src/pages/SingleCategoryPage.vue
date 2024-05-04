<script setup>
import Card from "@/components/card/Card.vue";
import apiProducts from "@/helpers/api.js"
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const category = ref(null)

async function getCategoryTitle(title) {
    try {
        const res = await apiProducts.getCategoryTitle(title)
        console.log(res);
        category.value = res.products;
    } catch (error) {
        console.log(error.message);
    }
}

getCategoryTitle(route.params.categoryName)

</script>
<template>
    <section class="singleCategory-products">
        <div class="container">
            <h2 class="singleCategory-products-title">{{ route.params.categoryName }}</h2>
            
                <div class="singleCategory-products-cards">
                    <Card v-for="item in category" :key="item.id" :info="item" class="singleCategory-products-card" />
                </div>
        
        </div>
    </section>
</template>
