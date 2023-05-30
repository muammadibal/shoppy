import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { HeaderAction } from "../components/general/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shoppy</title>
        <meta name="description" content="Best commerce ever in the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen">
        <HeaderAction links={[{
          label: "home",
          link: "www.google.com",
          links: null
        }]} />
        <div className="flex flex-row h-full justify-between mx-8">
          <aside className="w-[25%] flex">sidebar/filter</aside>
          <main className="w-[70%] flex">list product</main>
        </div>
        <footer>copy&copy;2023</footer>
      </div>
    </div>
  );
}
