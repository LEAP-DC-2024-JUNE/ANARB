import { Fragment, useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <Fragment>
      <div className="w-full px-20 py-6 bg-gray-50 dark:bg-gray-900">
        <div className="px-8 flex justify-center">
          <p className="font-normal text-lg text-gray-600 text-center dark:text-gray-300">
            {`© ${year} | Greetings with ❤️️ from Ulaanbaatar.`}
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
