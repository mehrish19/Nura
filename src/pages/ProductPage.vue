<script setup>
import Home from "../components/icons/Home.vue";
import Stars from "../components/icons/Stars.vue";
import Basket from "../components/icons/Basket.vue";
import apiProducts from "@/helpers/api.js";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const product = ref(null);
async function getSingleProduct(id) {
  try {
    const res = await apiProducts.getInfo(id);
    // console.log(res);
    product.value = res;
  } catch (error) {
    console.log(error.message);
  }
}

getSingleProduct(route.params.id);
</script>
<template>
  <main>
    <section class="product">
      <div class="container">
        <div class="product__content">
          <h2 class="product__content-title">
            {{ product?.id }}. {{ product?.title }}
          </h2>
          <div class="product__images">
            <img
              :src="item"
              alt=""
              v-for="item in product?.images"
              :key="item"
              class="product__content-img"
            />
          </div>
          <p class="product__brand">
            <span class="product__span">Brand:</span> {{ product?.brand }}
          </p>
          <p class="product__category">
            <span class="product__span">Category:</span>
            <RouterLink :to="'/singleCategory/' + product?.category">
              {{ product?.category }}</RouterLink>
          </p>
          <p class="product__rating">
            <span class="product__span">Rating:</span> {{ product?.rating }}
            <Stars />
          </p>
          <p class="product__description">{{ product?.description }}</p>
          <div class="product__btns">
            <div class="product__btnS">
              <RouterLink to="/basket"
                ><button class="product__buy-btn">
                  <Basket class="product__basket-btn" /></button
              ></RouterLink>
              <RouterLink to="/" class="product__home-btn">
                <Home />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
