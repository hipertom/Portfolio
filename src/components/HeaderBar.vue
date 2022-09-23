<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
          />
        </a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Project</a>
            </li>
          </ul>
        </div>

        <div class="d-flex">
          <SocialIcons />
        </div>
      </div>
    </nav>
    <!-- <div class="container">
      <div class="d-flex flex-row justify-content-between">
        <div class="align-self-center">
          <nav class="navbar">
          </nav>
        </div>
        <div class="align-self-center">
          <SocialIcons />
        </div>
      </div>
    </div> -->
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
