import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Work from "../components/Work";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

// import CopyrightIcon from "@/svg/CopyrightIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Experience></Experience>
      <Work></Work>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}
