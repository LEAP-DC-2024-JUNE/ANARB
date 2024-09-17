import IconClose from "../svg/IconClose";
import Icon from "../svg/icon";
import { useTheme } from "next-themes";
import { DarkModeIcon } from "../svg/DarkModeIcon";
const HamburgerMenu = () => {
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
    <div className="w-[320px]">
      <div>
        <div className="flex justify-between border-b-[1px] items-center p-4 dark:border-gray-800 border-gray-100">
          <div className="font-mono font-normal text-3xl text-gray-900 dark:text-white">
            ANAR
          </div>
          <div className="cursor-pointer">
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
            <button className="rounded-xl bg-gray-900 text-gray-50 font-medium text-base px-4 py-[6px] cursor-pointer dark:bg-gray-50 dark:text-gray-900">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HamburgerMenu;
