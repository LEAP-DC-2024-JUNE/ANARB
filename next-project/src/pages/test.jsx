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
import Text, { Image1 } from "../components/Test1";
export default function Test() {
  return (
    <div>
      <div className="flex gap-24">
        <Image1 />
        <Image1 />
        <Image1 />
      </div>
      <div className="flex">
        <Text />
        <Text />
      </div>
    </div>
  );
}
