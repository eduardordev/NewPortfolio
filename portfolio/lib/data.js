import { gql, GraphQLClient } from 'graphql-request'

export const getPostsAndPortfolio = async () =>{
  const endpoint = process.env.GRAPHCMS_PROJECT_API
  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    {
      portfolios{
        title
        tags
        slug
        description
        date
        coverImage{
          url
          width
          height
        }
      }
      posts{
        title
        slug
        description
        date
        id
        tags
        author{
          name
          image{
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphQLClient.request(query)
}