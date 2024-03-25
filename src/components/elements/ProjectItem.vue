<script setup>
import { projectImg } from "@/utils.js";

defineProps({
  metadata: Object,
  sys: Object,
  fields: Object,
})

</script>

<template>
<div class="col-lg-4 col-md-4 col-sm-6" >
  <div class="h_gallery_item">
    <div class="g_img_item">
      <img class="img-fluid" :src="projectImg(sys.id)" alt="">
      <a class="light" :href="fields.link" target="_blank"><img src="@/assets/img/gallery/icon.png" alt=""></a>
    </div>
    <div class="g_item_text">
      <h4>{{ fields.title }}</h4>
      <p>{{ fields.desc }}</p>
    </div>
  </div>
</div>
</template>
