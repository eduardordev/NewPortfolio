import { gql, GraphQLClient } from 'graphql-request'
import Head from 'next/head'

export const getStaticProps = async () =>{

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
  `

  const data = await graphQLClient.request(query)

  return{
    props: {
      data,
    },
  };
};

export default function Home({data}) {

  console.log(data)
  return (
    <div>
      <Head>
        <title>Home | eduardordev</title>
        <meta name="description" content="eduardordev Blog & Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Eduardo Ramírez
      </h1>
    </div>
  )
}
