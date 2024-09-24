import { useTheme } from "next-themes";
import { useState } from "react";
import Navigation from "../components/Navigation";
import HamburgerMenu from "../components/HamburgerMenu";
import HamburgerMenuIcon from "../svg/header/HamburgerMenuIcon";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const [menu, setMenu] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="flex justify-between items-center lg:px-8">
        <div className="font-mono font-normal text-3xl text-gray-900 dark:text-white">
          ANAR
        </div>
        <div className="cursor-pointer hidden lg:flex" onClick={toggleMenu}>
          <Navigation />
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
