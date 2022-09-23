<script setup>
import PageHeader from "~/components/PageHeader.vue";
import ProjectList from "~/components/ProjectList.vue";
import HeaderBar from "~/components/HeaderBar.vue";
import FooterBar from "~/components/FooterBar.vue";
</script>

<template>
  <HeaderBar />
  <PageHeader />
  <main>
    <ProjectList />
  </main>
  <FooterBar />
</template>
