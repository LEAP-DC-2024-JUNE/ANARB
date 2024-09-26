import { UnionIcon } from "../icons/header/UnionIcon";
import { MetaIcon } from "../icons/header/MetaIcon";
import { BlogIcon } from "../icons/header/BlogIcon";
import { SearchBar } from "../components/SearchBar";

export const Header = () => {
  return (
    <div>
      <div className="px-[350px] py-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <UnionIcon />
            <div className="flex">
              <MetaIcon />
              <BlogIcon />
            </div>
          </div>
          <div className="flex gap-20 items-center">
            <div className="flex gap-10 font-normal text-base">
              <p>Home</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
