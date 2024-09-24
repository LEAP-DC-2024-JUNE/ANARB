import { Chip } from "./Chip";
import { ExperienceCard } from "./ExperienceCard";
import Upwork from "../../public/UpworkLogo.png";

const Experience = () => {
  const experiences = [
    {
      imgSrc: Upwork,
      title: "Sr. Frontend Developer",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      timeline: "Nov 2021 - Present",
    },
    {
      imgSrc: Upwork,
      title: "Team Lead",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      timeline: "Jul 2017 - Oct 2021",
    },
    {
      imgSrc: Upwork,
      title: "Full Stack Developer",
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      timeline: "Dec 2015 - May 2017",
    },
  ];

  return (
    <div className="w-full px-4 py-16 flex lg:py-24 lg:px-20 lg:justify-center bg-gray-50 dark:bg-gray-900">
      <div className=" flex flex-col gap-6 lg:gap-12 lg:px-8">
        <Chip
          tagTitle="Experience"
          subHeading="Here is a quick summary of my most recent experiences:"
        />
        {experiences.map((experience) => {
          return (
            <ExperienceCard
              imgSrc={experience.imgSrc}
              title={experience.title}
              descriptions={experience.descriptions}
              timeline={experience.timeline}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
