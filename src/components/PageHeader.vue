<template>
  <div class="container-fluid">
    <div class="row header">
      <div class="col-8 header-left d-flex flex-column align-items-stretch">
        <nav class="align-self-start">
          <ul>
            <li>logo</li>
            <li>Tom Grootjans</li>
          </ul>
        </nav>

        <div
          class="hero flex-fill d-flex flex-column justify-content-center align-items-center"
        >
          <div class="d-flex flex-column justify-content-center">
            <h1>Tom Grootjans</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              voluptatem dicta facilis nam quod repellat.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4 header-right d-flex flex-column align-items-stretch">
        <nav class="align-self-start">
          <ul>
            <li>logo</li>
            <li>Tom Grootjans</li>
          </ul>
        </nav>

        <div
          class="header-icons flex-fill d-flex flex-column justify-content-end align-items-end"
        >
          <HeroSvgs />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroSvgs from "~/assets/HeroSvgs.vue";
</script>

<style lang="scss">
.header {
  // height: 75vh;

  > div {
    margin: 0;
    padding: 0;
  }
}

.header-left {
}

.header-right {
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
