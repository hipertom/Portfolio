import { reactive } from 'vue'
import { fetchProjects } from '@/fetch.js'

export const store = reactive({
  filterValue: "*",

  projects: [],
  getProjects() {
    this.projects = fetchProjects()
  }


})
