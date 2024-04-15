import { ref } from 'vue'
import { createClient } from "contentful";


const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

export function fetchProjects() {
  const data = ref(null)
  const filteredData = ref(null)
  const error = ref(null)

  client.getEntries({
      content_type: 'project',
    })
    .then((res) => res)
    .then((json) => (data.value = filteredData.value = json.items))
    .catch((err) => (error.value = err))

  return { data, filteredData, error }
}

export function fetchInformation() {
  const data = ref(null)
  const error = ref(null)

  client
    .getEntries({
      content_type: 'informational',
    })
    .then((res) => res)
    .then((json) => (data.value = json.items))
    .catch((err) => (error.value = err))


  return { data, error }
}
