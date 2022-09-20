<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Selected works</h2>
      </div>
      <ProjectCard
        v-for="(project, index) in projects"
        :project="project"
        :index="index"
        :key="project.sys.id"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import { projectsQuery } from "../assets/graphql/projectsQuery";

export default {
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    this.projects = await this.getProjects();
  },
  methods: {
    getProjects: async () => {
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${
        import.meta.env.VITE_CONTENTFUL_SPACE_ID
      }`;
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${
            import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
          }`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: projectsQuery }),
      };
      try {
        const response = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json()
        );
        return response.data.projectCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    },
  },
  components: { ProjectCard },
};
</script>
