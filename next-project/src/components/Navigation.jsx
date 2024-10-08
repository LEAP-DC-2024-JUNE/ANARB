import { useTheme } from "next-themes";
import Icon from "../svg/header/icon";
import { DarkModeIcon } from "../svg/header/DarkModeIcon";
import { useState, useEffect } from "react";

const Navigation = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-6 items-center">
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
      <div className="flex gap-4 items-center">
        <div className="cursor-pointer" onClick={toggleTheme}>
          {theme == "dark" ? <Icon /> : <DarkModeIcon />}
        </div>
        <button className="rounded-xl bg-gray-900 text-gray-50 font-medium text-base px-4 py-[6px] dark:bg-gray-50 dark:text-gray-900">
          Download CV
        </button>
      </div>
    </div>
  );
};
export default Navigation;
