import { FacebookIcon } from "@/icons/footer/FacebookIcon";
import { InstagramIcon } from "@/icons/footer/InstagramIcon";
import { LinkedInIcon } from "@/icons/footer/LinkedInIcon";
import { TwitterIcon } from "@/icons/footer/TwitterIcon";
import { BlogIcon } from "@/icons/header/BlogIcon";
import { MetaIcon } from "@/icons/header/MetaIcon";
import { UnionIcon } from "@/icons/header/UnionIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="pt-16 px-[252px] border-t-[1px] flex flex-col gap-6">
      <div className="flex gap-5">
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-3 w-40">
            <p className="font-semibold text-lg ">About</p>
            <p className="font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div>
            <p className="font-normal text-base">Email : info@jstemplate.net</p>
            <p className="font-normal text-base">Phone : 880 123 456 789</p>
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex flex-col gap-2">
              <Link href="/" className="font-normal text-base">
                Home
              </Link>
              <Link href="/blog" className="font-normal text-base">
                Blog
              </Link>
              <Link href="/contact" className="font-normal text-base">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-1 justify-end">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="flex justify-between border-t-[1px] py-8">
        <div className="flex gap-2.5">
          <div>
            <UnionIcon />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="flex">
              <MetaIcon />
              <BlogIcon />
            </div>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
