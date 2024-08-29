import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" flex justify-between border-b-2 px-20 py-4">
      <span className=" font-mono font-normal text-3xl">ANAR</span>
      <div className="flex gap-6 font-medium text-base items-center">
        <span>About</span>
        <span>Work</span>
        <span>Testimonials</span>
        <span>Contact</span>
        <button className="rounded-xl bg-gray-900 text-white px-8 py-0">
          Download CV
        </button>
      </div>
    </div>
  );
}
