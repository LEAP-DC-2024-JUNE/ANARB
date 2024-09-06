// import Image from "next/image";
// import UbCab from "../../public/UbCab.png";
// import IconButton from "../svg/IconButton";
// import Mentorhub from "../../public/Mentorhub.png";
// import iToim from "../../public/iToim.png";

// function Work() {
//   return (
//     <div className="w-full px-20 py-24 bg-gray">
//       <div className="px-8 flex flex-col gap-12">
//         <div className="flex flex-col gap-4">
//           <div className="text-center">
//             <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//               Work
//             </span>
//           </div>
//           <p className="font-normal text-lg text-gray-600 text-center">
//             Some of the noteworthy projects I have built:
//           </p>
//         </div>
//         <div className="flex rounded-xl drop-shadow-md bg-gray-100">
//           <div className="p-12">
//             <Image src={UbCab} />
//           </div>
//           <div className="flex flex-col gap-6 p-12">
//             <p className="font-semibold test-xl text-gray-900">UBCab</p>
//             <p className="font-normal text-base text-gray-600">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
//               nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
//               in faucibus orci luctus et ultrices posuere cubilia curae.
//             </p>
//             <div className="flex gap-2">
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 React
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Next.js
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Typescript
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Nest.js
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 PostgreSQL
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Tailwindcss
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Figma
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Cypress
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Storybook
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Git
//               </span>
//             </div>
//             <div>
//               <IconButton />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row-reverse rounded-xl drop-shadow-md bg-gray-100">
//           <div className="p-12">
//             <Image src={Mentorhub} />{" "}
//           </div>
//           <div className="flex flex-col gap-6 p-12">
//             <p className="font-semibold test-xl text-gray-900">MentorHub</p>
//             <p className="font-normal text-base text-gray-600">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
//               nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
//               in faucibus orci luctus et ultrices posuere cubilia curae.
//             </p>
//             <div className="flex gap-2">
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 React
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Next.js
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Typescript
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Nest.js
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 PostgreSQL
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Tailwindcss
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Figma
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Cypress
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Storybook
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Git
//               </span>
//             </div>
//             <div>
//               <IconButton />
//             </div>
//           </div>
//           <div></div>
//         </div>
//         <div className="flex rounded-xl drop-shadow-md bg-gray-100">
//           <div className="p-12">
//             <Image src={iToim} />
//           </div>
//           <div className="flex flex-col gap-6 p-12">
//             <p className="font-semibold test-xl text-gray-900">iToim</p>
//             <p className="font-normal text-base text-gray-600">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
//               nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
//               in faucibus orci luctus et ultrices posuere cubilia curae.
//             </p>
//             <div className="flex gap-2">
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 React
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Next.js
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Typescript
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Nest.js
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 PostgreSQL
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Tailwindcss
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Figma
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Cypress
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Storybook
//               </span>
//               <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
//                 Git
//               </span>
//             </div>
//             <div>
//               <IconButton />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Work;
import { Container } from "../components/Container";
import { WorkProject } from "../components/WorkProject";
import UbCab from "../../public/UbCab.png";
import Mentorhub from "../../public/Mentorhub.png";
import iToim from "../../public/iToim.png";
const Work = () => {
  return (
    <div className="w-full px-20 py-24 bg-white">
      <div className="px-8 flex flex-col gap-12">
        <Container
          tagTitle="Work"
          subHeading="Some of the noteworthy projects I have built:"
        />
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
  );
};
export default Work;
