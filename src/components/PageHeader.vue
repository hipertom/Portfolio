<template>
  <div class="container-fluid">
    <div class="row page-header">
      <div class="col-8 header-left d-flex flex-column align-items-stretch">
        <div
          class="hero flex-fill d-flex flex-column justify-content-center align-items-center"
          id="about"
        >
          <div class="d-flex flex-column justify-content-center">
            <h1>Tom Grootjans</h1>
            <p class="lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              voluptatem dicta facilis nam quod repellat.
            </p>
          </div>
        </div>
      </div>
      <div
        class="col-4 page-header-right d-flex flex-column align-items-stretch"
      >
        <div
          class="page-header-icons flex-fill d-flex flex-column justify-content-end align-items-end"
        >
          <HeroSvgs />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroSvgs from "@/assets/HeroSvgs.vue";
</script>

<style lang="scss">
.page-header {
  > div {
    margin: 0;
    padding: 100px 0 0 0;
  }
}

.page-header-left {
}

.page-header-right {
  background-color: $primary-color;

  svg {
    width: 110%;
  }
}

.hero > div {
  width: 35%;

  h1 {
    margin-bottom: 1rem;
  }
}
</style>
