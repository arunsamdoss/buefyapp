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
        <b-table-column label="Edit" field="product.id">
          <template>
            <!-- eslint-disable vue/require-v-for-key vue/no-multiple-template-root -->
            <!-- <div v-for="(product, id) in products.slice(0, 1)" :key="id"> -->
            <button
              class="button is-small is-light"
              @click.prevent="onEdit(product)"
            >
              <b-icon icon="edit" size="is-small"></b-icon>
            </button>
            <!-- </div> -->
          </template>
        </b-table-column>
        <b-table-column label="Delete" field="id">
          <template v-slot="props">
            <button
              class="button is-small is-danger"
              @click.prevent="onRemove(props.row.id)"
            >
              <b-icon icon="trash" size="is-small"></b-icon>
            </button>
          </template>
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
      console.log(product);
    },
    onRemove(productId) {
      this.$emit("remove", productId);
    }
  }
};
</script>
