import Icon from "../svg/icon";
import { useTheme } from "next-themes";
import HamburgerMenuIcon from "../components/HamburgerMenuIcon";
import { DarkModeIcon } from "../svg/DarkModeIcon";

const Header = () => {
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
    <div className="w-full p-4 border-b-[1px] lg:px-20 lg:py-4 bg-gray flex lg:justify-between lg:border-b-2 dark:bg-gray-950 dark:border-gray-950">
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
        <button onClick={toggleTheme}>
          {theme == "dark" ? <Icon /> : <DarkModeIcon />}
        </button>
        <button className="rounded-xl bg-gray-900 text-gray-50 font-medium text-base px-4 py-[6px] dark:bg-gray-50 dark:text-gray-900">
          Download CV
        </button>
      </div>
    </div>
  );
};
export default Header;
