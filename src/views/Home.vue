<template>
  <div class="home">
    <Navbar />
    <carousel />
    <br />
    <productCatalog />
    <br />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import Carousel from "../components/carousel.vue";
import ProductCatalog from "../components/ProductCatalog.vue";
import Footer from "../components/footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Carousel,
    ProductCatalog,
    Footer
  }
};
</script>
