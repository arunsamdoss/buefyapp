<template>
  <div class="container">
    <horizontal-scroll>
      <div class="columns">
        <!-- eslint-disable vue/require-v-for-key vue/no-multiple-template-root -->
        <div class="column" v-for="product in products">
          <!-- eslint-enable -->
          <div class="card">
            <header class="card-header">
              <div class="card-image">
                <figure class="image">
                  <img src="../assets/bookes.jpg" />
                </figure>
              </div>
            </header>
            <div class="card-content">
              <h1 class="title">{{ product.name }}</h1>
              <div class="content">
                <p>{{ product.description }}</p>
                <p>Rs: {{ product.price }}</p>
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
  name: "ProductCatalog",
  components: {
    HorizontalScroll
  },

  computed: mapGetters({
    products: "getProducts"
  }),
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/33${value}/1230/500`;
    }
  }
};
</script>
