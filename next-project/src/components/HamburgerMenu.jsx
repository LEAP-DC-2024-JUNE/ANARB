import { useTheme } from "next-themes";
import { DarkModeIcon } from "../svg/header/DarkModeIcon";
import IconClose from "../svg/header/IconClose";
import Icon from "../svg/header/icon";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="bg-gray-900 bg-opacity-90 fixed top-0 left-0 w-screen h-screen">
      <div className="w-[320px] fixed top-0 right-0 dark:bg-gray-950 bg-white h-screen">
        <div className="flex justify-between border-b-[1px] items-center p-4 dark:border-gray-800 border-gray-100">
          <div className="font-mono font-normal text-3xl text-gray-900 dark:text-white">
            ANAR
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <IconClose />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 border-b-[1px] dark:border-gray-800 border-gray-100">
          <div className="font-medium text-base text-gray-600 dark:text-white">
            About
          </div>
          <div className="font-medium text-base text-gray-600 dark:text-white">
            Work
          </div>
          <div className="font-medium text-base text-gray-600 dark:text-white">
            Testimonials
          </div>
          <div className="font-medium text-base text-gray-600 dark:text-white">
            Contact
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="font-normal text-base text-gray-600 dark:text-white">
              Switch Theme
            </p>
            <div className="cursor-pointer" onClick={toggleTheme}>
              {theme == "dark" ? <Icon /> : <DarkModeIcon />}
            </div>
          </div>
          <div>
            <button className="rounded-xl bg-gray-900 text-gray-50 font-medium text-base px-4 py-[6px] cursor-pointer w-full dark:bg-gray-50 dark:text-gray-900">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HamburgerMenu;
