import Icon from "../svg/icon";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-full px-20 py-4 bg-gray flex justify-between border-b-2 dark:bg-slate-800">
        <span className=" font-mono font-normal text-3xl text-gray-900">
          ANAR
        </span>
        <div className="flex gap-6 font-medium text-base items-center text-gray-600">
          <span>About</span>
          <span>Work</span>
          <span>Testimonials</span>
          <span>Contact</span>
          <button onClick={toggleDarkMode}>
            <Icon />
          </button>
          <button className="rounded-xl bg-gray-900 text-gray-50 font-medium text-base px-4 py-[6px]">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
