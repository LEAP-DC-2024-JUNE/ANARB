import { useTheme } from "next-themes";
import { Social } from "../components/Social";
import LocationIcon from "../svg/hero/LocationIcon";
import AvailableIcon from "../svg/hero/AvailableIcon";
import DarkLocationIcon from "@/svg/hero/DarkLocationIcon";
import HeroPic from "../svg/hero/HeroPic";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full px-4 py-16 lg:px-20 lg:py-24 bg-white dark:bg-gray-950">
      <div className=" flex flex-col-reverse items-center gap-12 lg:flex-row lg:px-8 justify-between">
        <div className="flex flex-col gap-12 lg:flex-1">
          <div className="flex flex-col gap-12 lg:gap-2">
            <h1 className=" font-bold text-6xl text-gray-900 dark:text-white">
              Hi, I'm Anar👋
            </h1>
            <p className="font-normal text-base text-gray-600 dark:text-gray-300 ">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              {theme == "dark" ? <DarkLocationIcon /> : <LocationIcon />}
              <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="flex gap-2">
              <AvailableIcon />
              <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
                Available for new projects
              </p>
            </div>
          </div>
          <Social />
        </div>
        <div className="flex lg:flex-1 flex-col lg:items-end">
          <HeroPic />
        </div>
      </div>
    </div>
  );
};
export default Hero;
