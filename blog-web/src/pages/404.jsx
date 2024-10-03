import { Header } from "@/components";
import { Footer } from "@/components";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-10 px-[452px] py-[100px]">
        <div className="flex items-center">
          <p className="font-normal text-7xl">404</p>
        </div>
        <div className="py-2 flex flex-col gap-5">
          <p className="font-semibold text-2xl">Page Not Found</p>
          <p className="font-normal text-lg text-slate-500">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <button className="rounded-[6px] bg-indigo-500 text-white py-2.5 px-4 w-[140px]">
            <Link href="/">Back To Home</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Custom404;
