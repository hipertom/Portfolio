export const projectsQuery = `
{
  projectCollection {
    items {
      sys {
        id
      }
      title
      description {
        json
      },
      link
      image {
        fileName
        description
        url
        width
        height
        size
      }
    }
  }
}
`;
