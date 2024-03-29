<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const icons = [
  {
    link: "https://google.com",
    image: faLinkedin,
  },{
    link: "https://google.com",
    image: faLinkedin,
  },{
    link: "https://google.com",
    image: faLinkedin,
  }
]

</script>

<template>
  <div class="socials">
    <template v-for="(icon, index) in icons" v-bind:key="index">
      <a :href="icon.link" target="_blank" class="link" >
        <FontAwesomeIcon :icon="icon.image" />
      </a>
    </template>
  </div>
</template>
