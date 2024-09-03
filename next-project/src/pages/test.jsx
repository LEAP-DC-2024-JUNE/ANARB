import Header, {
  HeaderDescription,
  HeaderTitle,
} from "../components/Component";

export default function Home() {
  return (
    <div className="text-center">
      <Header />
      <HeaderTitle />
      <HeaderDescription />
    </div>
  );
}
