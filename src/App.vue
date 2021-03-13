<template>
  <Nav />
  <Hero />
  <Body />
  <CallToAction />
  <Footer />
</template>

<script setup>
  import Nav from './components/Nav.vue';
  import Hero from './components/Hero.vue';
  import Body from './components/Body.vue';
  import CallToAction from './components/CallToAction.vue';
  import Footer from './components/Footer.vue';
</script>

<style>
  .gradient {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  }
</style>
