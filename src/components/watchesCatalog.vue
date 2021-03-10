<template>
  <div class="container">
    <horizontal-scroll>
      <div class="columns">
        <!-- eslint-disable vue/require-v-for-key vue/no-multiple-template-root -->
        <div class="column" v-for="watch in watchs">
          <!-- eslint-enable -->
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
import { mapGetters } from "vuex";
export default {
  name: "watchesCatalog",
  components: {
    HorizontalScroll
  },

  computed: mapGetters({
    watchs: "getwatchs"
  })
};
</script>
<style scoped>
.image img {
  width: 500px;
  height: 300px;
}
</style>
