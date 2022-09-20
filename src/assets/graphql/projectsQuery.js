export const projectsQuery = `
{
  projectCollection {
    items {
      sys {
        id
      }
      title
      desc
      link
      image {
        fileName
        description
        url
        width
        height
        size
      }
			contentfulMetadata {
        tags {
          id
          name
        }
      }
    }
  }
}
`;
