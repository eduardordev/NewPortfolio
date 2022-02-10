import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { getPostsAndPortfolio } from "../lib/data";
import { Navbar } from "./components/navbar";
import { Profile } from "./components/profile";

export const getStaticProps = async () => {
  const data = await getPostsAndPortfolio();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  console.log(data);
  return (
    <body className="bg-black w-full h-full px-20 ">
      <div className="justify-center items-center flex flex-row">
        <Head>
          <title>Home | eduardordev</title>
          <meta name="description" content="eduardordev Blog & Portfolio" />
          <link rel="icon" href="/code.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Work+Sans:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Navbar />
      </div>
      <div className="justify-center items-center flex flex-col">
        <Profile />
      </div>
      <hr className="w-full border-zinc-700 my-4 rounded-xl" />
      <div className="w-full justify-center items-center flex flex-row my-8">
        <div className="w-1/2  justify-center items-center flex flex-col ">
          <h1 className="text-4xl text-white font-montserrat mb-8">Portfolio</h1>
          <div>
            {data?.portfolios?.map((item) => (
              <div key={item.slug}>
                <Link href={`/portfolio/${item.slug}`}>
                  <a className="text-base text-white font-montserrat">{item.title}</a>
                </Link>
                <Image
                  className="rounded-lg"
                  src={item.coverImage.url}
                  width={item.coverImage.width}
                  height={item.coverImage.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </body>
  );
}
