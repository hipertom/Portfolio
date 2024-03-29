<script setup>
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'

const target = ref(null)
const isVisible = ref(false)

function onElementVisibility(isVisibleState) {
  isVisible.value = isVisibleState
}

function linkClick(event) {
  if (event.target.hash !== "") {
    event.preventDefault();
    document.querySelector(event.target.hash).scrollIntoView({
      behavior: 'smooth'
    });
  }
}

</script>

<template>
  <header
    class="header_area"
    :class="{ 'navbar_fixed': !isVisible}"
    ref="target"
    v-element-visibility="[onElementVisibility, { scrollTarget: target }]"
    >
    <div class="main_menu" >
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container box_1620">
          <!-- Brand and toggle get grouped for better mobile display -->
          <a class="navbar-brand logo_h" href="/"><img src="@/assets/img/logo.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav ml-auto">
              <li class="nav-item"><a class="nav-link" @click="linkClick($event)" href="#hero">Home</a></li>
              <li class="nav-item"><a class="nav-link" @click="linkClick($event)" href="#about">About</a></li>
              <li class="nav-item"><a class="nav-link" @click="linkClick($event)" href="#resume">Resume</a></li>
              <li class="nav-item"><a class="nav-link" @click="linkClick($event)" href="#projects">Projects</a></li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  </header>
</template>
