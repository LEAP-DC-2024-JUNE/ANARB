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

const Skills = () => {
  return (
    <div className="w-full px-4 py-16 lg:px-20 lg:py-24 bg-gray flex flex-col gap-12 dark:bg-gray-950">
      <Container
        tagTitle="Skills"
        subHeading="The skills, tools and technologies I am really good at:"
      />
      <div className="flex flex-col gap-12">
        <div className="flex flex-wrap lg:justify-between">
          <div>
            <JavascriptIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Javascript
            </p>
          </div>
          <div>
            <TypescriptIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Typescript
            </p>
          </div>
          <div>
            <ReactIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              React
            </p>
          </div>
          {/* <Image src={Nextjs} /> */}
          <div>
            <NodejsIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Node js
            </p>
          </div>
          <div>
            <ExpressjsIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Express js
            </p>
          </div>
          <div>
            <NestjsIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Nest js
            </p>
          </div>
          <div>
            <SocketioIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Socket io
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          {/* <Image src={Postgresql} /> */}
          <div>
            <MongoDBIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Mongo DB
            </p>
          </div>
          <div>
            <SassIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Sass/Scss
            </p>
          </div>
          {/* <Image src={Tailwindcss} /> */}
          <div>
            <FigmaaIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Figma
            </p>
          </div>
          <div>
            <CypressIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Cypress
            </p>
          </div>
          <div>
            <StorybookIcon />
            <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
              Storybook
            </p>
          </div>
          <div>
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
