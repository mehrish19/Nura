<script setup>
import { useProductsStore } from "@/stores/productsStore";
const productsStore = useProductsStore();

import Minus from "../icons/Minus.vue";
import Plus from "../icons/Plus.vue";
import { computed } from 'vue';

const props = defineProps({
    info: {
        type: Object,
        required: true
    }
});

    // const discount = computed(() => {
    //     const reduction = (props.info.price / 100) * props.info.discountPercentage
    //     return Math.ceil(props.info.price - reduction);
    // })

</script>

<template>
    <div class="card">
        <h3 class="card__title">{{ info.title }}</h3>
        <img :src="info.thumbnail" alt="" class="card__image">
        <p class="card__txt">{{ info.description }}</p>
        <p class="card__price">price: $ {{ info.price }}</p>
        <p class="card__discount">- {{ info.discountPercentage }} %</p>
        <p class="card__price-new"> new price: ${{ productsStore.getDiscount(info) }}</p>

        <div class="card__icon-box">
            <RouterLink :to="'/product/' + info.id"><button class="button">Products View</button></RouterLink>
            <Plus @click="productsStore?.addToCart(info)" />
            <Minus @click="productsStore?.deleteProduct(info.id)" />
        </div>
    </div>
</template>