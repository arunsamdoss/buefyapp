<template>
  <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <div class="box">
        <b-field label="Name" style="width: 500px">
          <b-input
            v-model="product.name"
            placeholder="Enter product name"
          ></b-input>
        </b-field>
        <b-field label="description" style="width: 500px">
          <b-input
            maxlength="200"
            type="textarea"
            v-model="product.description"
            placeholder="Enter product description"
          ></b-input>
        </b-field>
        <b-field label="price" style="width: 500px">
          <b-input
            v-model="product.price"
            type="number"
            placeholder="Enter product price"
          ></b-input>
        </b-field>
        <b-field>
          <b-button
            type="is-primary"
            v-on:click.prevent="onSubmit"
            style="width: 200px"
            >{{ product.id ? "Update" : "Add" }}</b-button
          >
        </b-field>
        <!-- <b-button type="is-danger" style="width: 200px">cancel</b-button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      formErrors: {}
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.product);
    }
  }
};
</script>
