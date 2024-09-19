import Icon from "../svg/icon";
import { useTheme } from "next-themes";
import HamburgerMenuIcon from "../components/HamburgerMenuIcon";
import { DarkModeIcon } from "../svg/DarkModeIcon";
import Navigation from "../components/Navigation";
import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const [menu, setMenu] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  console.log(theme);
  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="p-4 border-b-[1px] bg-white dark:bg-gray-950 dark:border-gray-950 lg:px-20 lg:py-4">
      <div className="flex justify-between lg:px-8">
        <div className="font-mono font-normal text-3xl text-gray-900 dark:text-white">
          ANAR
        </div>
        <div className="cursor-pointer hidden lg:flex" onClick={toggleMenu}>
          <Navigation />
          {/* {menu == true ? <HamburgerMenuIcon /> : <HamburgerMenu />} */}
        </div>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <HamburgerMenuIcon />
        </div>
      </div>
      {isOpen && <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};
export default Header;

{
  /* <div className="w-full p-4 border-b-[1px] lg:px-20 lg:py-4 bg-gray flex justify-between lg:justify-between lg:border-b-2 dark:bg-gray-950 dark:border-gray-950">
      <div className="flex gap-72">
        <span className=" font-mono font-normal text-3xl text-gray-900 dark:text-white">
          ANAR
        </span>
        <div className="lg:invisible">
          <HamburgerMenuIcon />
        </div>
      </div>
      <div className="flex gap-6 font-medium text-base items-center invisible text-gray-600 lg:visible dark:text-white">
        <span>About</span>
        <span>Work</span>
        <span>Testimonials</span>
        <span>Contact</span>
        <div className="cursor-pointer" onClick={toggleTheme}>
          {theme == "dark" ? <Icon /> : <DarkModeIcon />}
        </div>
        <button className="rounded-xl bg-gray-900 text-gray-50 font-medium text-base px-4 py-[6px] dark:bg-gray-50 dark:text-gray-900">
          Download CV
        </button>
      </div>
    </div> */
}
