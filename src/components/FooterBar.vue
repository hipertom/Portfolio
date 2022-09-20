<template>
  <footer>
    <div class="container">
      <div class="d-flex flex-row justify-content-between">
        <div class="align-self-center">logo</div>
        <div class="align-self-center">
          &copy; 2022-{{ year }} Tom Grootjans. All rights reserved
        </div>
        <div class="align-self-center">
          <SocialIcons />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  color: $secondary-font-color;
  background-color: $secondary-color;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>

<script setup>
import SocialIcons from "./SocialIcons.vue";

const year = new Date().getFullYear();
</script>
