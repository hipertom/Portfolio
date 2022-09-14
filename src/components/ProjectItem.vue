<template>
  <div>{{ shows }}</div>
</template>

<script>
export default {
  data() {
    return {
      shows: [],
    };
  },
  async created() {
    this.shows = await this.getShows();
  },
  methods: {
    getShows: async () => {
      const query = `{
projectCollection {
items {
sys {
id
}
title
description {
json
}
}
}
}`;
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
        body: JSON.stringify({ query }),
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
};
</script>
