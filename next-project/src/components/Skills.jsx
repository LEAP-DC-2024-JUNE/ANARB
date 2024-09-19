import JavascriptIcon from "../svg/Javascript-icon";
import TypescriptIcon from "../svg/Typescript-icon";
import ReactIcon from "../svg/React-icon";
import NodejsIcon from "../svg/Nodejs-icon";
import ExpressjsIcon from "../svg/Expressjs-icon";
import NestjsIcon from "../svg/Nestjs-icon";
import SocketioIcon from "../svg/Socketio-icon";
import MongoDBIcon from "../svg/MongoDB-icon";
import SassIcon from "../svg/Sass-icon";
import FigmaaIcon from "../svg/FigmaIcon";
import CypressIcon from "../svg/CypressIcon";
import StorybookIcon from "../svg/StorybookIcon";
import GitIcon from "../svg/GitIcon";
import Image from "next/image";
import Nextjs from "../../public/nextjs.png";
import Postgresql from "../../public/postgresql.png";
import Tailwindcss from "../../public/tailwindcss.png";
import { Container } from "../components/Container";
import DarkExpressJsIcon from "../svg/DarkExpressJsIcon";
import { useTheme } from "next-themes";
import DarkSocketIo from "@/svg/DarkSocketIO";
import DarkCypressIcon from "@/svg/DarkCypressIcon";
import NextjsIcon from "../svg/NextjsIcon";

const Skills = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full px-4 py-16 lg:px-20 lg:py-24 bg-gray flex flex-col gap-12 dark:bg-gray-950">
      <Container
        tagTitle="Skills"
        subHeading="The skills, tools and technologies I am really good at:"
      />
      <div className="flex flex-col gap-4 lg:flex lg:flex-col lg:gap-12">
        <div className="grid grid-cols-3 gap-12 lg:grid-cols-8">
          <div className="flex flex-col gap-2 items-center">
            <JavascriptIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Javascript
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <TypescriptIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Typescript
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <ReactIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              React
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image src={Nextjs} />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Next Js
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <NodejsIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Node js
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            {theme == "dark" ? <DarkExpressJsIcon /> : <ExpressjsIcon />}
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Express js
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <NestjsIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Nest js
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            {theme == "dark" ? <DarkSocketIo /> : <SocketioIcon />}
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Socket IO
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image src={Postgresql} />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              PostgreSQL
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <MongoDBIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Mongo DB
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <SassIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Sass/Scss
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image src={Tailwindcss} />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Tailwind CSS
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FigmaaIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Figma
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            {theme == "dark" ? <DarkCypressIcon /> : <CypressIcon />}
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Cypress
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <StorybookIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Storybook
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <GitIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Git
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
