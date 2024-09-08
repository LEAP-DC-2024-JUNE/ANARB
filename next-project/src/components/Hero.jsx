import LocationIcon from "../svg/location-icon";
import AvailableIcon from "../svg/available-icon";
import HeroPic from "@/svg/HeroPic";
import { Social } from "../components/Social";
const Hero = () => {
  return (
    <div className="w-full px-20 py-24 bg-white">
      <div className="px-8 flex gap-48">
        <div className="flex flex-col gap-12 w-[600px]">
          <div className="flex flex-col gap-2">
            <h1 className=" font-bold text-6xl text-gray-900">
              Hi, I'm Anar👋
            </h1>
            <p className="font-normal text-base text-gray-600 ">
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
              <p className="font-normal text-lg text-gray-600">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="flex gap-2">
              <AvailableIcon />
              <p className="font-normal text-lg text-gray-600">
                Available for new projects
              </p>
            </div>
          </div>
          <Social />
        </div>
        <div className="w-[568px]">
          <HeroPic />
        </div>
      </div>
    </div>
  );
};
export default Hero;
