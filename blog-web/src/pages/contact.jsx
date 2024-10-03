import { ContactUs } from "@/components/ContactUs";
import { Header } from "../components/Header";
import { Footer } from "@/components";
import Head from "next/head";
const Contact = () => {
  return (
    <div>
      <Head>
        <title>Meta Blog | Contact</title>
      </Head>
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default Contact;
