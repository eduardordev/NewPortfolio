import { gql, GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import { Navbar } from './components/navbar'
import { Profile } from './components/profile'

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
    <body className="bg-black w-full h-full px-20 ">
      <div className="justify-center items-center flex flex-row">
        <Head>
          <title>Home | eduardordev</title>
          <meta name="description" content="eduardordev Blog & Portfolio" />
          <link rel="icon" href="/code.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Work+Sans:wght@300;400&display=swap" rel="stylesheet"/>
        </Head>
        <Navbar />
      </div>
      <div className="justify-center items-center flex flex-col">
        <Profile />
      </div>
    </body>
  )
}
