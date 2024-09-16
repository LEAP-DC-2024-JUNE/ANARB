import LocationIcon from "../svg/location-icon";
import AvailableIcon from "../svg/available-icon";
import HeroPic from "@/svg/HeroPic";
import { Social } from "../components/Social";
const Hero = () => {
  return (
    <div className="w-full px-4 py-16 lg:px-20 lg:py-24 bg-white dark:bg-gray-950">
      <div className=" flex flex-col-reverse items-center lg:flex-row lg:px-8 lg:gap-48">
        <div className="flex flex-col gap-12 lg:w-[600px]">
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
              <LocationIcon />
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
        <div className="lg:w-[568px]">
          <HeroPic />
        </div>
      </div>
    </div>
  );
};
export default Hero;
