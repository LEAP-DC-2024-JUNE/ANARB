import { UnionIcon } from "../icons/header/UnionIcon";
import { MetaIcon } from "../icons/header/MetaIcon";
import { BlogIcon } from "../icons/header/BlogIcon";

export const Header = () => {
  return (
    <div>
      <div className="px-[350px] py-8 flex gap-2.5">
        <div className="flex gap-[118px]">
          <div className="flex items-center gap-1">
            <UnionIcon />
            <div className="flex">
              <MetaIcon />
              <BlogIcon />
            </div>
          </div>
          <div className="flex gap-2.5">
            <div className="flex gap-10 font-normal text-base">
              <p>Home</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div>
              <input type="search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
