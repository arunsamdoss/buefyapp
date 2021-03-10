<template>
  <div class="container">
    <horizontal-scroll>
      <div class="columns">
        <!-- eslint-disable vue/require-v-for-key vue/no-multiple-template-root -->
        <div class="column" v-for="food in foods">
          <!-- eslint-enable -->
          <div class="card">
            <header class="card-header">
              <div class="card-image">
                <figure class="image">
                  <img src="../assets/foods.jpg" />
                </figure>
              </div>
            </header>
            <div class="card-content">
              <h1 class="title">{{ food.name }}</h1>
              <div class="content">
                <p>{{ food.description }}</p>
                <p>Rs: {{ food.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </horizontal-scroll>
  </div>
</template>

<script>
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";
import { mapGetters } from "vuex";
export default {
  name: "foodsCatalog",
  components: {
    HorizontalScroll
  },

  computed: mapGetters({
    foods: "getfoods"
  })
};
</script>
<style scoped>
.image img {
  width: 500px;
  height: 300px;
}
</style>
