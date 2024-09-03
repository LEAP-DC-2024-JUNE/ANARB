import LocationIcon from "../svg/location-icon";
import AvailableIcon from "../svg/available-icon";
import GithubIcon from "../svg/Github-icon";
import TwitterIcon from "../svg/Twitter-icon";
import FigmaIcon from "../svg/Figma-icon";
import HeroPic from "@/svg/HeroPic";

function Hero() {
  return (
    <div className="w-full px-20 py-24 bg-gray flex justify-between gap-12">
      <div className="flex flex-col gap-12 w-1/2">
        <div className="flex flex-col gap-2">
          <h1 className=" font-bold text-6xl text-gray-900">Hi, I'm Anar👋</h1>
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
        <div className="flex gap-4">
          <GithubIcon />
          <TwitterIcon />
          <FigmaIcon />
        </div>
      </div>
      <div>
        <HeroPic />
      </div>
    </div>
  );
}
export default Hero;
