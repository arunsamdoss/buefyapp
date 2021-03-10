<template>
  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth">
      <!-- eslint-disable vue/require-v-for-key vue/valid-v-for -->
      <b-table :data="data" v-for="product in products" :key="id">
        <!-- eslint-enable -->
        <b-table-column>
          <template>
            {{ product.name }}
          </template>
        </b-table-column>
        <b-table-column>
          <template>
            {{ product.description }}
          </template>
        </b-table-column>
        <b-table-column>
          <template>
            {{ product.price }}
          </template>
        </b-table-column>
        <b-table-column>
          <b-button
            v-on:click.prevent="onEdit(product)"
            type="is-primary"
            outlined
            >Edit</b-button
          >
          <b-button
            v-on:click.prevent.stop="onRemove(product.id)"
            icon-right="delete"
            type="is-danger"
            outlined
            >x</b-button
          >
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      data: ["products"]
    };
  },
  methods: {
    onEdit(product) {
      this.$emit("edit", product);
    },
    onRemove(productId) {
      this.$emit("remove", productId);
    }
  }
};
</script>
