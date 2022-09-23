<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#about">
          <img src="@/assets/tom.webp" alt="Tom Grootjans" />
        </a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
          </ul>
        </div>

        <div class="d-flex">
          <SocialIcons />
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  background: transparent;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  z-index: 2;
  width: 100%;

  .navbar-brand {
    img {
      width: 50px;
      border-radius: 50%;
    }
  }

  .nav-link {
    color: $primary-font-color;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
  }
}
</style>

<script setup>
import SocialIcons from "./SocialIcons.vue";
</script>
