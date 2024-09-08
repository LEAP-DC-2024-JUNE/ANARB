import Icon from "../svg/icon";

const Header = () => {
  return (
    <div className="w-full px-20 py-4 bg-gray flex justify-between border-b-2 ">
      <span className=" font-mono font-normal text-3xl text-gray-900">
        ANAR
      </span>
      <div className="flex gap-6 font-medium text-base items-center text-gray-600">
        <span>About</span>
        <span>Work</span>
        <span>Testimonials</span>
        <span>Contact</span>
        <Icon />
        <button className="rounded-xl bg-gray-900 text-gray-50 font-medium text-base px-4 py-[6px]">
          Download CV
        </button>
      </div>
    </div>
  );
};
export default Header;
