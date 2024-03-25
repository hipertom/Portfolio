<script setup>
import ProjectItem from '../elements/ProjectItem.vue';
import FilterLink from '../elements/FilterLink.vue';
import { store } from '@/store.js'

import { onMounted } from 'vue'

onMounted(() => {
  store.getProjects();
})


const projectList = [{
    id: 1,
    tag: 'drupal',
    title: "onsaanbod.nl",
    description: "Drupal website",
    image: 'project-1.jpg',
  },
  {
    id: 2,
    tag: 'drupal',
    title: "de Nobel",
    description: "Drupal website",
    image: 'project-2.jpg',
  },
  {
    id: 3,
    tag: 'laravel',
    title: "Stichting lezen en Schrijven",
    description: "Meerdere website op Drupal",
    image: 'project-3.jpg',
  },
  {
    id: 4,
    tag: 'drupal',
    title: "Stichting Matchis",
    description: "Donor portaal in Laravel en Vue.js",
    image: 'project-4.jpg',
  },
  {
    id: 5,
    tag: 'laravel',
    title: "Sexy & Safe",
    description: "Laravel website",
    image: 'project-5.jpg',
  }
]

</script>

<template>
  <section class="home_gallery_area p_120">
    <div class="container">
      <div class="main_title">
        <h2>Featured projects</h2>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div class="isotope_fillter">
        <ul class="gallery_filter list">
          <FilterLink label="All" value="*" />
          <FilterLink label="Drupal" value="drupal" />
          <FilterLink label="Laravel" value="laravel" />
          <FilterLink label="Wordpress" value="wordpress" />
        </ul>
      </div>
    </div>

    <div class="container">


      <div v-if="store.projects.error">Oops! Error encountered: {{ store.projects.error.message }}</div>

      <template v-else-if="store.projects.data">
        <TransitionGroup name="list" tag="div" class="gallery_f_inner row imageGallery1">

          <template v-for="(project) in store.projects.data" :key="project.sys.id">
            <ProjectItem v-bind="project" v-if="store.filterValue == project.tag || store.filterValue == '*'"/>
          </template>

          </TransitionGroup>
      </template>

      <div v-else>Loading...</div>

      <div class="more_btn">
        <a class="main_btn" href="#">Load More Items</a>
      </div>

    </div>

  </section>
</template>
