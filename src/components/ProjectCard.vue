<template>
  <div class="col-4 project-card" :class="randomColor">
    <figure>
      <img src="../assets/macbook.png" alt="" srcset="" />
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
  },
};
</script>

<style lang="scss">
div.project-card {
  margin-bottom: 40px;

  figure {
    background-color: #a0dcff;
    border-radius: 8px;
    overflow: hidden;
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
