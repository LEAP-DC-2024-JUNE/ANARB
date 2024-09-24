import { useTheme } from "next-themes";
import { Chip } from "./Chip";
import Image from "next/image";
import Skill from "../components/Skill";
import JavascriptIcon from "../svg/skills/JavascriptIcon";
import TypescriptIcon from "../svg/skills/TypescriptIcon";
import ReactIcon from "../svg/skills/ReactIcon";
import NodejsIcon from "../svg/skills/NodeJsIcon";
import ExpressjsIcon from "../svg/skills/ExpressJsIcon";
import NestjsIcon from "../svg/skills/NestJsIcon";
import SocketioIcon from "../svg/skills/SocketIoIcon";
import MongoDBIcon from "../svg/skills/MongoDbIcon";
import SassIcon from "../svg/skills/SassIcon";
import FigmaaIcon from "../svg/skills/FigmaIcon";
import CypressIcon from "../svg/skills/CypressIcon";
import StorybookIcon from "../svg/skills/StorybookIcon";
import GitIcon from "../svg/skills/GitIcon";
import Nextjs from "../../public/nextjs.png";
import Postgresql from "../../public/postgresql.png";
import Tailwindcss from "../../public/tailwindcss.png";
import DarkExpressJsIcon from "../svg/skills/DarkExpressJsIcon";
import DarkSocketIo from "@/svg/skills/DarkSocketIO";
import DarkCypressIcon from "@/svg/skills/DarkCypressIcon";

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
