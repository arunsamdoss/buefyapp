<template>
  <div class="home">
    <Navbar />
    <add-cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import AddCart from "../components/addCart.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    AddCart
  }
};
</script>
