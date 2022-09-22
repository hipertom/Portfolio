<template>
  <nav class="social-nav">
    <ul>
      <li v-for="(item, index) in socials" :key="index">
        <a :href="item.url">
          <SvgIcon type="mdi" :path="item.icon"></SvgIcon>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiInstagram, mdiGithub, mdiLinkedin } from "@mdi/js";

const socials = [
  { icon: mdiGithub, url: "https://asd.com" },
  { icon: mdiLinkedin, url: "https://asd.com" },
  { icon: mdiInstagram, url: "https://asd.com" },
];
</script>

<style lang="scss">
.social-nav {
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      display: inline-block;
      border-radius: 50%;
      background-color: rgba($color: #fff, $alpha: 0.1);
      padding: 5px;
      margin-left: 10px;
    }
  }

  a {
    &:link,
    &:visited {
      svg {
        path {
          transition: fill 0.1s linear;
          fill: $secondary-font-color;
        }
      }
    }

    &:hover,
    &:active {
      background-color: none;
      svg {
        path {
          fill: #fff;
        }
      }
    }
  }
}
</style>
