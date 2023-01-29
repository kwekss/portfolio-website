import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/Components/Navbar";
import Main from "@/Components/Main";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>John Asare | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
