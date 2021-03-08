<template>
  <div class="ManageProducts">
    <Navbar />
    <productAdd :product="productInForm" v-on:submit="onFormSave" />
    <product-list
      :products="products"
      v-on:edit="onEditClicked"
      v-on:remove="onRemoveClicked"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Navbar from "@/components/navbar.vue";
import ProductList from "../components/ProductList.vue";
import ProductAdd from "../components/productAdd";

const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: "",
      description: "",
      price: null
    }
  };
};

export default {
  name: "Home",
  components: {
    Navbar,
    ProductAdd,
    ProductList
  },
  data: initialData,
  computed: mapGetters({
    products: "getProducts"
  }),
  methods: {
    ...mapActions(["saveProduct", "deleteProduct"]),
    onFormSave(product) {
      this.saveProduct({ product }).then(() => this.resetProductInForm());
    },
    resetProductInForm() {
      this.productInForm = initialData().productInForm;
    },
    onEditClicked(product) {
      this.productInForm = { ...product };
    },
    onRemoveClicked(productId) {
      this.deleteProduct(productId).then(() => {
        if (productId === this.productInForm.id) {
          this.resetProductInForm();
        }
      });
    }
  }
};
</script>
