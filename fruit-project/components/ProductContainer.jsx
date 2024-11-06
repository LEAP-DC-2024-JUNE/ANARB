import Image from "next/image";
import avocado from "../src/img/avocado.png";
import Link from "next/link";

export const ProductContainer = ({ name, image, from, price }) => {
  return (
    <div>
      {/* <Image src={avocado} /> */}
      <div className="font-bold text-xl">
        {name}
        {image}
      </div>
      <p>from {from}</p>
      <div className="font-bold">${price}</div>
      <Link href="/products/produce">
        <button className="rounded-md border-2 border-black">Details</button>
      </Link>
    </div>
  );
};
