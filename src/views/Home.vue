<template>
  <div class="home">
    <Navbar />
    <carousel />
    <br />
    <productCatalog />
    <br />
    <foods-catalog />
    <br />
    <watchsCatalog />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import Carousel from "../components/carousel.vue";
import ProductCatalog from "../components/ProductCatalog.vue";
import foodsCatalog from "../components/foodsCatalog.vue";
import Footer from "../components/footer.vue";
import watchsCatalog from "../components/watchesCatalog.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Carousel,
    ProductCatalog,
    foodsCatalog,
    Footer,
    watchsCatalog
  }
};
</script>
