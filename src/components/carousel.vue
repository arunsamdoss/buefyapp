<template>
  <div class="container">
    <b-carousel
      :indicator="indicator"
      :indicator-background="indicatorBackground"
      :indicator-inside="indicatorInside"
      :indicator-mode="indicatorMode"
      :indicator-position="indicatorPosition"
      :indicator-style="indicatorStyle"
      style="width: 100%"
    >
      <b-carousel-item v-for="(item, i) in 3" :key="i">
        <span class="image">
          <img :src="getImgUrl(i)" />
        </span>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indicator: true,
      indicatorBackground: true,
      indicatorInside: true,
      indicatorMode: "hover",
      indicatorPosition: "is-bottom",
      indicatorStyle: "is-lines"
    };
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/32${value}/1230/500`;
    }
  }
};
</script>

<style>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
</style>
