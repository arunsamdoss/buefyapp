<template>
  <div class="container">
    <div>
      <table class="table table-hover product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- eslint-disable vue/require-v-for-key -->
          <tr v-for="product in products" track-by="id">
            <!-- eslint-enable -->

            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>
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
                >X</b-button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {};
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
