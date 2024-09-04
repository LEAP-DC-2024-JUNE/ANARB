import Image from "next/image";
import Picc from "../svg/UpworkLogo.png";

function Card() {
  return (
    <div className="flex justify-between gap-12 bg-white p-8">
      <div>
        <Image src={Picc} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-xl text-gray-900">
          Sr. Frontend Developer
        </p>
        <div className="font-normal text-lg text-gray-600 flex flex-col gap-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Ut pretium arcu et massa semper, id fringilla leo semper.</p>
          <p>Sed quis justo ac magna.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div>
        <p className="font-normal text-lg text-gray-700">Nov 2021 - Present</p>
      </div>
    </div>
  );
}
export default Card;
