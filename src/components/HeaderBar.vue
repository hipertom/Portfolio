<template>
  <header>
    <div class="container">
      <div class="d-flex flex-row justify-content-between">
        <div class="align-self-center">logo</div>
        <div class="align-self-center">
          <SocialIcons />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  background: transparent;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>

<script setup>
import SocialIcons from "./SocialIcons.vue";
</script>
