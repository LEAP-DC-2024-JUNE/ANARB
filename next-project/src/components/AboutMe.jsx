import AboutPic from "@/svg/hero/AboutPic";
import { Chip } from "./Chip";

const AboutMe = () => {
  return (
    <div className="w-full px-4 py-16 lg:px-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className=" flex flex-col gap-6 lg:gap-12 lg:px-8">
        <Chip tagTitle="About me" />
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[584px]">
            <AboutPic />
          </div>
          <div className="lg:w-[584px] flex flex-col gap-6">
            <h1 className="font-semibold text-3xl text-gray-900 dark:text-gray-50">
              Curious about me? Here you have it:
            </h1>
            <div className="flex flex-col gap-4">
              <p className="font-normal text-base text-gray-600 dark:text-gray-300">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p className="font-normal text-base text-gray-600 dark:text-gray-300">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p className="font-normal text-base text-gray-600 dark:text-gray-300">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p className="font-normal text-base text-gray-600 dark:text-gray-300">
                Finally, some quick bits about me.
              </p>
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                  <li className="self-stretch text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">
                    B.E. in Computer Engineering
                  </li>
                  <li className="self-stretch text-gray-600 text-base font-normal leading-normal dark:text-gray-300">
                    Full time freelancer
                  </li>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex dark:text-gray-300">
                  <li className="self-stretch text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">
                    Avid learner
                  </li>
                </div>
              </div>
              <p className="font-normal text-base text-gray-600 dark:text-gray-300">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
