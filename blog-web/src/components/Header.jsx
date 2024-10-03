import { UnionIcon } from "../icons/header/UnionIcon";
import { MetaIcon } from "../icons/header/MetaIcon";
import { BlogIcon } from "../icons/header/BlogIcon";
import { useRouter } from "next/router";
import Link from "next/link";

export const Header = ({ setInputValue }) => {
  const router = useRouter();
  return (
    <div>
      <div className="px-[252px] py-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <UnionIcon />
            <div className="flex">
              <MetaIcon />
              <BlogIcon />
            </div>
          </div>
          <div className="flex gap-40 items-center">
            <div className="flex gap-10 font-normal text-base">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              {router.pathname == "/blog" ? (
                <input
                  type="text"
                  className="rounded-md bg-zinc-100 py-1 pr-1 pl-2"
                  placeholder="Search"
                  onChange={(event) => setInputValue(event.target.value)}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
