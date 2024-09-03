import Image from "next/image";
import UbCab from "../../public/UbCab.png";

export const Image1 = () => {
  return <Image src={UbCab} />;
};

const Text = () => {
  return (
    <div>
      <div className="font-semibold text-3xl text-center pb-4">Header</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
    </div>
  );
};
export default Text;
