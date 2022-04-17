<script>
export default {
  data() {
    return {
      // img: '../../../assets/img/portfolio/' + this.imgSrc
    }
  },
  methods: {
    getImageUrl(imgName) {
      return new URL(`../../../assets/img/portfolio/${imgName}`, import.meta.url).href
  }

  },
  props: [
    'item',
    'index',
  ],
}
</script>

<template>
  <div class="col-lg-4 col-md-6 portfolio-item" :class="item.filter">
    <div class="portfolio-wrap">
      <img :src="getImageUrl(item.imgName)" class="img-fluid" alt="">
      <div class="portfolio-info">
        <h4>{{ item.title }}</h4>
        <p>{{ item.desc }}</p>
        <div class="portfolio-links">
          <a href="../assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox"
            title="App 1"><i class="bx bx-plus"></i></a>
          <a :href="item.external" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>