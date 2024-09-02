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
// import NextjsIcon from "../svg/NextjsIcon";
// import PostgreSQLIcon from "../svg/PostgreSQLIcon";
// import TailwindIcon from "../svg/Tailwind-icon";

function Skills() {
  return (
    <div className="w-full px-20 py-24 bg-gray flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <div className="text-center">
          <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
            Skills
          </span>
        </div>
        <p className="font-normal text-xl text-center">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex justify-between">
          <div>
            <JavascriptIcon />
            <p className="font-normal text-lg text-gray-600">Javascript</p>
          </div>
          <div>
            <TypescriptIcon />
            <p className="font-normal text-lg text-gray-600">Typescript</p>
          </div>
          <div>
            <ReactIcon />
            <p className="font-normal text-lg text-gray-600">React</p>
          </div>
          {/* <NextjsIcon /> */}
          <div>
            <NodejsIcon />
            <p className="font-normal text-lg text-gray-600">Node js</p>
          </div>
          <div>
            <ExpressjsIcon />
            <p className="font-normal text-lg text-gray-600">Express js</p>
          </div>
          <div>
            <NestjsIcon />
            <p className="font-normal text-lg text-gray-600">Nest js</p>
          </div>
          <div>
            <SocketioIcon />
            <p className="font-normal text-lg text-gray-600">Socket io</p>
          </div>
        </div>
        <div className="flex justify-between">
          {/* <PostgreSQLIcon /> */}
          <div>
            <MongoDBIcon />
            <p className="font-normal text-lg text-gray-600">Mongo DB</p>
          </div>
          <div>
            <SassIcon />
            <p className="font-normal text-lg text-gray-600">Sass/Scss</p>
          </div>
          {/* <TailwindIcon /> */}
          <div>
            <FigmaaIcon />
            <p className="font-normal text-lg text-gray-600">Figma</p>
          </div>
          <div>
            <CypressIcon />
            <p className="font-normal text-lg text-gray-600">Cypress</p>
          </div>
          <div>
            <StorybookIcon />
            <p className="font-normal text-lg text-gray-600">Storybook</p>
          </div>
          <div>
            <GitIcon />
            <p className="font-normal text-lg text-gray-600">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
