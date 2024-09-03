import Image from "next/image";
import Copyright from "../../public/CopyrightIcon.png";

function Footer() {
  return (
    <div className="w-full px-20 py-6 bg-gray-50">
      <div className="px-8 flex justify-center">
        <Image src={Copyright} />
        <p className="font-normal text-lg text-gray-600 text-center">
          2024 | Greetings with ❤️️ from Ulaanbaatar.
        </p>
      </div>
    </div>
  );
}
export default Footer;