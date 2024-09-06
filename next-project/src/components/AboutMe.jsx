import AboutPic from "@/svg/AboutPic";
import { Container } from "../components/Container";

function AboutMe() {
  return (
    <div className="w-full px-20 py-24 bg-gray-50">
      <div className="px-8 flex flex-col gap-12">
        <Container tagTitle="About me" />
        <div className="flex gap-12">
          <div className="w-[584px]">
            <AboutPic />
          </div>
          <div className="w-[584px] flex flex-col gap-6">
            <h1 className="font-semibold text-3xl text-gray-900">
              Curious about me? Here you have it:
            </h1>
            <div className="flex flex-col gap-4">
              <p className="font-normal text-base text-gray-600">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p className="font-normal text-base text-gray-600">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p className="font-normal text-base text-gray-600">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p className="font-normal text-base text-gray-600">
                Finally, some quick bits about me.
              </p>
              <ul className="font-normal text-base text-gray-600 list-disc flex gap-2.5">
                <li>B.E. in Computer Engineering</li>
                <li>Avid learner</li>
                <li>Full time freelancer</li>
              </ul>
              <p className="font-normal text-base text-gray-600">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
