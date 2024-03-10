<script setup>
import { store } from '@/store.js'
import { img } from "@/utils.js";

defineProps({
  id: Number,
  tag: String,
  title: String,
  description: String,
  image: String,
})

</script>


<template>
  <div class="col-lg-4 col-md-4 col-sm-6 brand manipul design print"
    v-if="store.filterValue == tag || store.filterValue == '*'">
    <div class="h_gallery_item">
      <div class="g_img_item">
        <img class="img-fluid" :src="img(image)" alt="">
        <a class="light" href="img/gallery/project-1.jpg"><img src="@/assets/img/gallery/icon.png" alt=""></a>
      </div>
      <div class="g_item_text">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>

</template>
