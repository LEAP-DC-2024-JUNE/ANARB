import Icon from "../svg/icon";
import { useTheme } from "next-themes";

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
    <div className="w-full px-20 py-4 bg-gray flex justify-between border-b-2">
      <span className=" font-mono font-normal text-3xl text-gray-900 dark:text-white">
        ANAR
      </span>
      <div className="flex gap-6 font-medium text-base items-center text-gray-600 dark:text-white">
        <span>About</span>
        <span>Work</span>
        <span>Testimonials</span>
        <span>Contact</span>
        <button onClick={toggleTheme}>
          <Icon />
        </button>
        <button className="rounded-xl bg-gray-900 text-gray-50 font-medium text-base px-4 py-[6px] dark:bg-white">
          Download CV
        </button>
      </div>
    </div>
  );
};
export default Header;
