<template>
  <div class="container">
    <horizontal-scroll>
      <div class="columns">
        <div class="column" v-for="(product, id) in products" v-bind:key="id">
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
            <footer class="card-footer">
              <a class="card-footer-item" @click.prevent="addToCart(product)">
                <b-icon icon="cart-plus"></b-icon>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </horizontal-scroll>
    <br />
    <horizontal-scroll>
      <div class="columns">
        <div class="column" v-for="(food, id) in foods" v-bind:key="id">
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
      </div> </horizontal-scroll
    ><br />
    <horizontal-scroll>
      <div class="columns">
        <div class="column" v-for="(watch, id) in watchs" v-bind:key="id">
          <div class="card">
            <header class="card-header">
              <div class="card-image">
                <figure class="image">
                  <img src="../assets/watchs.jpg" />
                </figure>
              </div>
            </header>
            <div class="card-content">
              <h1 class="title">{{ watch.name }}</h1>
              <div class="content">
                <p>{{ watch.description }}</p>
                <p>Rs: {{ watch.price }}</p>
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductCatalog",
  components: {
    HorizontalScroll
  },
  computed: mapGetters({
    products: "getProducts",
    foods: "getfoods",
    watchs: "getwatchs"
  }),
  methods: mapActions(["addToCart"])
};
</script>
<style scoped>
.image img {
  width: 500px;
  height: 300px;
}
</style>
