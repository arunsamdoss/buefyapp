<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="/">
        Home
      </b-navbar-item>
      <!-- <b-navbar-item href="#">
        Documentation
      </b-navbar-item> -->
      <b-navbar-item href="ManageProducts">
        Manage Products
      </b-navbar-item>
      <b-navbar-item href="#">
        Contact
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @media (min-width: 1024px) {
//   .hero-body {
//     background-image: url("../../assets/img/gym.svg");
//     background-size: 30%;
//     background-position: 80% 50%;
//     background-repeat: no-repeat;
//   }
//   .hero-body p {
//     width: 600px;
//   }
// }
</style>
