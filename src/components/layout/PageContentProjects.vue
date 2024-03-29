<script setup>
import ProjectItem from '../elements/ProjectItem.vue';
import FilterLink from '../elements/FilterLink.vue';
import { store } from '@/store.js'

import { onMounted } from 'vue'

onMounted(() => {
  store.getProjects();
})

</script>

<template>
  <section class="home_gallery_area p_120" id="projects">
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
