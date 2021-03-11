<template>
  <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <b-table :data="products">
        <b-table-column field="product.name" label="Name">
          <template v-slot:header="{ column }">
            <b-tooltip :label="column.label" append-to-body dashed>
              {{ column.label }}
            </b-tooltip>
          </template>
          <template v-slot="props">
            {{ props.row.name }}
          </template>
        </b-table-column>

        <b-table-column field="product.description" label="Description">
          <template v-slot:header="{ column }">
            <b-tooltip :label="column.label" append-to-body dashed>
              {{ column.label }}
            </b-tooltip>
          </template>
          <template v-slot="props">
            {{ props.row.description }}
          </template>
        </b-table-column>
        <b-table-column field="product.price" label="price">
          <template v-slot:header="{ column }">
            <b-tooltip :label="column.label" append-to-body dashed>
              {{ column.label }}
            </b-tooltip>
          </template>
          <template v-slot="props">
            {{ props.row.price }}
          </template>
        </b-table-column>
        <b-table-column
          label="Action"
          v-for="(product, id) in products.slice(0, 1)"
          v-bind:key="id"
        >
          <b-button
            v-on:click.prevent="onEdit(product)"
            type="is-primary"
            outlined
            >Edit</b-button
          >
          <b-button
            v-on:click.prevent="onRemove(product.id)"
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapGetters({
    products: "getProducts"
  }),
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
