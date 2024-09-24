import { Chip } from "./Chip";
import { WorkProject } from "../components/WorkProject";
import UbCab from "../../public/UbCab.png";
import Mentorhub from "../../public/Mentorhub.png";
import iToim from "../../public/iToim.png";

const Work = () => {
  const works = [
    {
      title: "Ubcab",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      imgSrc: UbCab,
      tags: [
        `React`,
        `Next.js`,
        `Typescript`,
        `Nest.js`,
        `PostgreSQL`,
        `Tailwindcss`,
        `Figma`,
        `Cypress`,
        `Storybook`,
        `Git`,
      ],
    },
    {
      title: "Mentorhub",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      imgSrc: Mentorhub,
      tags: [
        `React`,
        `Next.js`,
        `Typescript`,
        `Nest.js`,
        `PostgreSQL`,
        `Tailwindcss`,
        `Figma`,
        `Cypress`,
        `Storybook`,
        `Git`,
      ],
      reverse: true,
    },
    {
      title: "iToim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      imgSrc: iToim,
      tags: [
        `React`,
        `Next.js`,
        `Typescript`,
        `Nest.js`,
        `PostgreSQL`,
        `Tailwindcss`,
        `Figma`,
        `Cypress`,
        `Storybook`,
        `Git`,
      ],
    },
  ];

  return (
    <div className="w-full px-4 py-16  bg-white dark:bg-gray-950 flex lg:px-20 lg:py-24">
      <div className=" flex flex-col gap-6 lg:px-8 lg:gap-12">
        <Chip
          tagTitle="Work"
          subHeading="Some of the noteworthy projects I have built:"
        />
        {works.map((work) => {
          return (
            <WorkProject
              title={work.title}
              description={work.description}
              imgSrc={work.imgSrc}
              tags={work.tags}
              reverse={work.reverse}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Work;
