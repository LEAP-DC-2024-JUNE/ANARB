import { useTheme } from "next-themes";
import { Chip } from "./Chip";
import { Social } from "../components/Social";
import EmailIcon from "../svg/contact/EmailIcon";
import CopyIcon from "../svg/contact/CopyIcon";
import PhoneIcon from "../svg/contact/PhoneIcon";
import DarkEmailIcon from "../svg/contact/DarkEmailIcon";
import DarkCopyIcon from "../svg/contact/DarkCopyIcon";
import DarkPhoneIcon from "../svg/contact/DarkPhoneIcon";

const ContactMe = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full px-4 py-16 bg-gray flex lg:justify-center lg:px-20 lg:py-24 dark:bg-gray-950">
      <div className="flex flex-col gap-6 lg:gap-12 lg:px-8">
        <Chip
          tagTitle="Get in touch"
          subHeading="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
        />
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-1 lg:gap-5 items-center">
            {theme == "dark" ? <DarkEmailIcon /> : <EmailIcon />}
            <p className="font-semibold text-4xl text-gray-900 dark:text-gray-50">
              tom@pinecone.mn
            </p>
            {theme == "dark" ? <DarkCopyIcon /> : <CopyIcon />}
          </div>
          <div className="flex gap-1 lg:gap-5 items-center">
            {theme == "dark" ? <DarkPhoneIcon /> : <PhoneIcon />}
            <p className="font-semibold text-4xl text-gray-900 dark:text-gray-50">
              +976 88112233
            </p>
            {theme == "dark" ? <DarkCopyIcon /> : <CopyIcon />}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="font-normal text-lg text-gray-600 dark:text-gray-300">
            You may also find me on these platforms!
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
