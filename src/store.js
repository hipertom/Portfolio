import { reactive } from 'vue'
import { fetchProjects } from '@/fetch.js'

export const store = reactive({
  filterValue: "*",

  projects: [],
  getProjects() {
    this.projects = fetchProjects()
  },

  filterProjects(tag) {
    this.filterValue = tag
    this.projects.filteredData = this.projects.data.filter(function (project) {
      return (project.metadata.tags[0] && project.metadata.tags[0].sys.id == tag) || tag == '*'
    });
  }


})
