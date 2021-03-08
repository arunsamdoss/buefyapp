<template>
  <div class="container">
    <!-- eslint-disable vue/require-v-for-key vue/no-multiple-template-root -->
    <div class="column is-three-fifths is-offset-one-fifth">
      <div class="columns" v-for="product in products">
        <!-- eslint-enable -->
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <span v-for="(item, i) in 1" :key="i">
                  <span class="image">
                    <b-image :src="getImgUrl(i)" />
                  </span>
                </span>
                <h1 class="title">{{ product.name }}</h1>
                <p>{{ product.description }}</p>
                <p>{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductCatalog",

  computed: mapGetters({
    products: "getProducts"
  }),
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/23${value}/1230/500`;
    }
  }
};
</script>
