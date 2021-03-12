<template>
  <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <b-field label="NAME" style="width: 500px">
        <b-input
          v-model="product.name"
          placeholder="Enter product name"
        ></b-input>
      </b-field>
      <b-field label="DESCRIPTION" style="width: 500px">
        <b-input
          maxlength="200"
          type="textarea"
          v-model="product.description"
          placeholder="Enter product description"
        ></b-input>
      </b-field>
      <b-field label="PRICE" style="width: 500px">
        <b-input
          v-model="product.price"
          type="number"
          placeholder="Enter product price"
        ></b-input>
      </b-field>
      <b-field>
        <b-button
          type="is-primary"
          class="btnadd"
          v-on:click.prevent="onSubmit"
          >{{ product.id ? "Update" : "Add" }}</b-button
        >
        <b-button type="is-danger" class="btncnl">cancel</b-button>
      </b-field>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.product);
    }
  }
};
</script>
<style scoped>
.btnadd {
  width: 120px;
}
.btncnl {
  margin-left: 10px;
  width: 120px;
}
</style>
