<template>
  <div class="container">
    <b-table :data="data">
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
          <b-tooltip>
            {{ column.label }}
          </b-tooltip>
        </template>
        <template v-slot="props">
          {{ props.row.description }}
        </template>
      </b-table-column>
      <b-table-column field="product.price" label="price">
        <template v-slot:header="{ column }">
          <b-tooltip>
            {{ column.label }}
          </b-tooltip>
        </template>
        <template v-slot="props">
          {{ props.row.price }}
        </template>
      </b-table-column>
    </b-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "addCart",
  computed: mapGetters({
    data: "getCartItems"
  })
};
</script>
<style lang="scss" scoped></style>
