// import Header, {
//   HeaderDescription,
//   HeaderTitle,
// } from "../components/Component";

// export default function Home() {
//   return (
//     <div className="text-center">
//       <Header />
//       <HeaderTitle />
//       <HeaderDescription />
//     </div>
//   );
// }
// import Text, { Image1 } from "../components/Test1";
// export default function Test() {
//   return (
//     <div>
//       <div className="flex gap-24">
//         <Image1 />
//         <Image1 />
//         <Image1 />
//       </div>
//       <div className="flex">
//         <Text />
//         <Text />
//       </div>
//     </div>
//   );
// }

// import { Chip } from "../components/Chip";

// const Home = () => {
//   return (
//     <div className="flex flex-col text-center">
//       <Chip
//         title="From parent component"
//         description="Desc"
//         color="red"
//         isVisible={true}
//       />
//       <Chip title="Test" description="Desc 1" color="blue" isVisible={false} />
//     </div>
//   );
// };

// export default Home;

import { WorkProject } from "../components/WorkProject";
import UbCab from "../../public/UbCab.png";
import Mentorhub from "../../public/MentorHub.png";
import iToim from "../../public/iToim.png";
import Upwork from "../svg/UpworkLogo.png";
import { Container } from "../components/Container";
import Header from "../components/Header";
import { Cardd } from "../components/Cardd";
const Test = () => {
  return (
    <div>
      <Header />
      <div>
        <Container
          tagTitle="Skills"
          subHeading="The skills, tools and technologies I am really good at:"
        />
      </div>
      <div className="w-full py-24 px-20 bg-gray-50">
        <div className="px-8 flex flex-col gap-12">
          <Container
            tagTitle="Experience"
            subHeading="Here is a quick summary of my most recent experiences:"
          />
          <Cardd
            imgSrc={Upwork}
            title="Sr. Frontend Developer"
            descriptions={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Ut pretium arcu et massa semper, id fringilla leo semper.",
              "Sed quis justo ac magna.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]}
            timeline="Nov 2021 - Present"
          />
          <Cardd
            imgSrc={Upwork}
            title="Team Lead"
            descriptions={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Ut pretium arcu et massa semper, id fringilla leo semper.",
              "Sed quis justo ac magna.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]}
            timeline="Jul 2017 - Oct 2021"
          />
          <Cardd
            imgSrc={Upwork}
            title="Full Stack Developer"
            descriptions={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Ut pretium arcu et massa semper, id fringilla leo semper.",
              "Sed quis justo ac magna.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]}
            timeline="Dec 2015 - May 2017"
          />
        </div>
      </div>
      <div className="w-full px-20 py-24 bg-gray">
        <div className="px-8 flex flex-col gap-12">
          <Container
            tagTitle="Work"
            subHeading="Some of the noteworthy projects I have built:"
          />

          <div className="flex flex-col gap-12">
            <WorkProject
              title="Ubcab"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
              imgSrc={UbCab}
              tags={[
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
              ]}
            />
            <WorkProject
              title="Mentorhub"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
              imgSrc={Mentorhub}
              tags={[
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
              ]}
              reverse={true}
            />
            <WorkProject
              title="iToim"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
              imgSrc={iToim}
              tags={[
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
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test;
