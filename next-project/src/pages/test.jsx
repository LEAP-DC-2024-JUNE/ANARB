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
import Tags from "../components/Tags";
const Test = () => {
  return (
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
  );
};
export default Test;
