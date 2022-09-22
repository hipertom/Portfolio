<template>
  <div class="col-4 project-card" :class="randomColor">
    <figure :class="{ 'landscape-figure': landscapeImage }">
      <img v-if="landscapeImage" src="../assets/macbook.png" alt="" srcset="" />
      <img v-else src="../assets/iphone-x.png" alt="" srcset="" />
      <img :src="project.image.url" alt="" />
    </figure>
    <h3>{{ project.title }}</h3>
    <p>{{ project.desc }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomColors: [
        "cyan",
        "pastel-green",
        "pastel-blue",
        "cotton-candy",
        "light-peach",
      ],
    };
  },
  props: ["project"],
  computed: {
    randomColor() {
      let rng = Math.floor(Math.random() * this.randomColors.length);
      return this.randomColors[rng];
    },
    landscapeImage() {
      return this.project.image.width > this.project.image.height;
    },
  },
};
</script>

<style lang="scss">
div.project-card {
  margin-bottom: 40px;

  // Baseline for figure
  figure {
    border-radius: 8px;
    overflow: hidden;

    height: 400px;
  }

  // Phone figure
  figure:not(.landscape-figure) {
    padding: 40px 60px 0 60px;

    img {
      z-index: 2;
      position: relative;
      top: 0;
      left: 0;
      &:nth-child(2) {
        $spacing-left: 80px;

        position: absolute;
        top: 55px;
        left: $spacing-left;
        width: calc(100% - $spacing-left * 2);

        z-index: 1;
      }
    }
  }

  // Landscape figure
  figure.landscape-figure {
    padding: 40px 0 40px 20px;

    img {
      &:nth-child(2) {
        width: auto;
        height: 240px;
        position: absolute;
        top: 50px;
        left: 75px;
        overflow: hidden;
        margin-bottom: 30px;
      }
    }
  }

  &.cyan figure {
    background: #a0dcff;
  }
  &.pastel-green figure {
    background: #c1e5c0;
  }
  &.pastel-blue figure {
    background: #c0dae5;
  }
  &.cotton-candy figure {
    background: #ffc3d8;
  }
  &.light-peach figure {
    background: #fdd9d9;
  }
}
</style>
