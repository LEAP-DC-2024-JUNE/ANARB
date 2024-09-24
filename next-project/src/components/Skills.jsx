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
import { Chip } from "./Chip";
import DarkExpressJsIcon from "../svg/DarkExpressJsIcon";
import { useTheme } from "next-themes";
import DarkSocketIo from "@/svg/DarkSocketIO";
import DarkCypressIcon from "@/svg/DarkCypressIcon";
import Skill from "../components/Skill";

const Skills = () => {
  const { theme } = useTheme();
  const skills = [
    {
      icon: <JavascriptIcon />,
      iconName: "Javascript",
    },
    {
      icon: <TypescriptIcon />,
      iconName: "Typescript",
    },
    {
      icon: <ReactIcon />,
      iconName: "React",
    },
    {
      icon: <Image src={Nextjs} />,
      iconName: "Next Js",
    },
    {
      icon: <NodejsIcon />,
      iconName: "Node Js",
    },
    {
      icon: theme == "dark" ? <DarkExpressJsIcon /> : <ExpressjsIcon />,
      iconName: "Express Js",
    },
    {
      icon: <NestjsIcon />,
      iconName: "Nest Js",
    },
    {
      icon: theme == "dark" ? <DarkSocketIo /> : <SocketioIcon />,
      iconName: "Socket IO",
    },
    {
      icon: <Image src={Postgresql} />,
      iconName: "PostgreSQL",
    },
    {
      icon: <MongoDBIcon />,
      iconName: "Mongo DB",
    },
    {
      icon: <SassIcon />,
      iconName: "Sass/Scss",
    },
    {
      icon: <Image src={Tailwindcss} />,
      iconName: "Tailwind CSS",
    },
    {
      icon: <FigmaaIcon />,
      iconName: "Figma",
    },
    {
      icon: theme == "dark" ? <DarkCypressIcon /> : <CypressIcon />,
      iconName: "Cypress",
    },
    {
      icon: <StorybookIcon />,
      iconName: "Storybook",
    },
    {
      icon: <GitIcon />,
      iconName: "Git",
    },
  ];
  return (
    <div className="w-full px-4 py-16 lg:px-20 lg:py-24 bg-gray flex flex-col gap-12 dark:bg-gray-950">
      <Chip
        tagTitle="Skills"
        subHeading="The skills, tools and technologies I am really good at:"
      />
      <div className="flex flex-col gap-4 lg:flex lg:flex-col lg:gap-12">
        <div className="grid grid-cols-3 gap-12 lg:grid-cols-8">
          {skills.map((skill) => {
            return (
              <div>
                <Skill icon={skill.icon} iconName={skill.iconName} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Skills;
