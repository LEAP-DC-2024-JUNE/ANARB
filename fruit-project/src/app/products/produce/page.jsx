import Image from "next/image";
import avocado from "../../../img/avocado.png";

const Produce = ({ name, image, from, price }) => {
  return (
    <div className="px-10 py-20 flex gap-40">
      <div>
        <Image src={avocado} alt="produce" height={320} width={320} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-medium text-xl">Products</p>
        <p className="text-5xl font-medium">{name}</p>
        <p className="font-medium">Nutrients</p>
        <p>Vitamin B, Vitamin K</p>
        <p className="w-[880px]">
          A ripe avocado yields to gentle pressure when held in the palm of the
          hand and squeezed. The fruit is not sweet, but distinctly and subtly
          flavored, with smooth texture. The avocado is popular in vegetarian
          cuisine as a substitute for meats in sandwiches and salads because of
          its high fat content. Generally, avocado is served raw, though some
          cultivars, including the common 'Hass', can be cooked for a short time
          without becoming bitter. It is used as the base for the Mexican dip
          known as guacamole, as well as a spread on corn tortillas or toast,
          served with spices.
        </p>
      </div>
    </div>
  );
};
export default Produce;
