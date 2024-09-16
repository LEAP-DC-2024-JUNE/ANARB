import { useTheme } from "next-themes";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Work from "../components/Work";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const Contact = () => {
  const { setTheme, theme } = useTheme();
  console.log(theme);
  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default Contact;
