import EmailIcon from "@/svg/Emailicon";
import CopyIcon from "../svg/CopyIcon";
import PhoneIcon from "../svg/PhoneIcon";
import { Social } from "../components/Social";
import { Container } from "../components/Container";

function ContactMe() {
  return (
    <div className="w-full px-20 py-24 bg-gray">
      <div className="px-8 flex flex-col gap-12">
        <Container
          tagTitle="Get in touch"
          subHeading="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
        />
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-5 items-center">
            <EmailIcon />
            <p className="font-semibold text-4xl text-gray-900">
              tom@pinecone.mn
            </p>
            <CopyIcon />
          </div>
          <div className="flex gap-5 items-center">
            <PhoneIcon />
            <p className="font-semibold text-4xl text-gray-900">
              +976 88112233
            </p>
            <CopyIcon />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="font-normal text-lg text-gray-600">
            You may also find me on these platforms! You may also find me on
            these platforms!
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
}
export default ContactMe;
