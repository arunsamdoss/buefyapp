<template>
  <div>
    <b-carousel
      :arrow="arrow"
      :repeat="arrowBoth"
      :arrow-hover="arrowHover"
      :indicator="indicator"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
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
      arrow: true,
      arrowBoth: true,
      arrowHover: true,
      iconPack: "mdi",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      iconSize: "is-small",
      indicator: true,
      indicatorBackground: false,
      indicatorInside: true,
      indicatorMode: "hover",
      indicatorPosition: "is-bottom",
      indicatorStyle: "is-lines"
    };
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/41${value}/1230/500`;
    }
  }
};
</script>

<style scoped>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
.image {
  height: 450px;
}
.image img {
  width: 100%;
}
</style>
