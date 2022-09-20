<template>
  <div class="col-4 project-card">
    <figure>
      <img src="../assets/macbook.png" alt="" srcset="" />
      <img :src="project.image.url" alt="" />
    </figure>
    {{ project.title }}
    {{ project.title }}
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style lang="scss">
div.project-card {
  background-color: #a0dcff;
  padding: 0;

  figure {
    overflow: hidden;
    margin-left: 20px;
    img {
      &:nth-child(2) {
        position: absolute;
        top: 20px;
        left: 60px;
        overflow: hidden;
      }
    }
  }
}
</style>
