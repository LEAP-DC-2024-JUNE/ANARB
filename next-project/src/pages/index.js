import Image from "next/image";
import { Inter } from "next/font/google";
import Icon from "../svg/icon";
import LocationIcon from "../svg/location-icon";
import AvailableIcon from "../svg/available-icon";
import GithubIcon from "../svg/Github-icon";
import TwitterIcon from "../svg/Twitter-icon";
import FigmaIcon from "../svg/Figma-icon";
import JavascriptIcon from "../svg/Javascript-icon";
import TypescriptIcon from "../svg/Typescript-icon";
import ReactIcon from "../svg/React-icon";
import NodejsIcon from "../svg/Nodejs-icon";
import ExpressjsIcon from "../svg/Expressjs-icon";
import NestjsIcon from "../svg/Nestjs-icon";
import SocketioIcon from "../svg/Socketio-icon";
import MongoDBIcon from "../svg/MongoDB-icon";
import SassIcon from "../svg/Sass-icon";
import FigmaaIcon from "../svg/FigmaIcon";
import CypressIcon from "../svg/CypressIcon";
import StorybookIcon from "../svg/StorybookIcon";
import GitIcon from "../svg/GitIcon";
// import NextjsIcon from "../svg/NextjsIcon";
// import PostgreSQLIcon from "../svg/PostgreSQLIcon";
// import TailwindIcon from "../svg/Tailwind-icon";
import UpworkLogo from "../svg/UpworkLogo";
// import WorkSectionPic1 from "../svg/WorkSectionPic1";
import IconButton from "../svg/IconButton";
import EmailIcon from "@/svg/Emailicon";
import CopyIcon from "../svg/CopyIcon";
import PhoneIcon from "../svg/PhoneIcon";
// import CopyrightIcon from "@/svg/CopyrightIcon";
// import AboutmePic from "../svg/AboutmePic";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="w-full px-20 py-4 bg-gray flex justify-between border-b-2 ">
        <span className=" font-mono font-normal text-3xl">ANAR</span>
        <div className="flex gap-6 font-medium text-base items-center">
          <span>About</span>
          <span>Work</span>
          <span>Testimonials</span>
          <span>Contact</span>
          <Icon />
          <button className="rounded-xl bg-gray-900 text-white px-8 py-0">
            Download CV
          </button>
        </div>
      </div>
      <div className="w-full px-20 py-24 bg-gray flex justify-between gap-12">
        <div className="flex flex-col gap-12 w-96">
          <div>
            <h1 className=" font-bold text-6xl text-gray-900">Hi, I'm Anar</h1>
            <p className="font-normal text-base text-gray-600">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              <LocationIcon />
              <p className="font-normal text-lg text-gray-600">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="flex gap-2">
              <AvailableIcon />
              <p className="font-normal text-lg text-gray-600">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <GithubIcon />
            <TwitterIcon />
            <FigmaIcon />
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full px-20 py-24 bg-gray-50">
        <div className="px-8 flex flex-col gap-12">
          <div className="text-center">
            <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
              About me
            </span>
          </div>
          <div className="flex gap-12">
            <div className="w-full">{/* <AboutmePic /> */}</div>
            <div>
              <h1 className="font-semibold text-3xl text-gray-900">
                Curious about me? Here you have it:
              </h1>
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
              <p className="font-normal text-base text-gray-600">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-20 py-24 bg-gray flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
              Skills
            </span>
          </div>
          <p className="font-normal text-xl text-center">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex justify-between">
            <div>
              <JavascriptIcon />
              <p className="font-normal text-lg text-gray-600">Javascript</p>
            </div>
            <div>
              <TypescriptIcon />
              <p className="font-normal text-lg text-gray-600">Typescript</p>
            </div>
            <div>
              <ReactIcon />
              <p className="font-normal text-lg text-gray-600">React</p>
            </div>
            {/* <NextjsIcon /> */}
            <div>
              <NodejsIcon />
              <p className="font-normal text-lg text-gray-600">Node js</p>
            </div>
            <div>
              <ExpressjsIcon />
              <p className="font-normal text-lg text-gray-600">Express js</p>
            </div>
            <div>
              <NestjsIcon />
              <p className="font-normal text-lg text-gray-600">Nest js</p>
            </div>
            <div>
              <SocketioIcon />
              <p className="font-normal text-lg text-gray-600">Socket io</p>
            </div>
          </div>
          <div className="flex justify-between">
            {/* <PostgreSQLIcon /> */}
            <div>
              <MongoDBIcon />
              <p className="font-normal text-lg text-gray-600">Mongo DB</p>
            </div>
            <div>
              <SassIcon />
              <p className="font-normal text-lg text-gray-600">Sass/Scss</p>
            </div>
            {/* <TailwindIcon /> */}
            <div>
              <FigmaaIcon />
              <p className="font-normal text-lg text-gray-600">Figma</p>
            </div>
            <div>
              <CypressIcon />
              <p className="font-normal text-lg text-gray-600">Cypress</p>
            </div>
            <div>
              <StorybookIcon />
              <p className="font-normal text-lg text-gray-600">Storybook</p>
            </div>
            <div>
              <GitIcon />
              <p className="font-normal text-lg text-gray-600">Git</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-20 py-24 bg-gray-50 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
              Experience
            </span>
          </div>
          <p className="font-normal text-xl text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <div className="flex gap-12 bg-white p-8">
          <div>{/* <UpworkLogo /> */}</div>
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
            <p className="font-normal text-lg text-gray-700">
              Nov 2021 - Present
            </p>
          </div>
        </div>
        <div className="flex gap-12 bg-white p-8">
          <div>{/* <UpworkLogo /> */}</div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-xl text-gray-900">Team Lead</p>
            <div className="font-normal text-lg text-gray-600 flex flex-col gap-1">
              <p>Sed quis justo ac magna.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Sed quis justo ac magna.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div>
            <p className="font-normal text-lg text-gray-700">
              Jul 2017 - Oct 2021
            </p>
          </div>
        </div>
        <div className="flex gap-12 bg-white p-8">
          <div>{/* <UpworkLogo /> */}</div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-xl text-gray-900">
              Full Stack Developer
            </p>
            <div className="font-normal text-lg text-gray-600 flex flex-col gap-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div>
            <p className="font-normal text-lg text-gray-700">
              Dec 2015 - May 2017
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-20 py-24 bg-gray">
        <div className="px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                Work
              </span>
            </div>
            <p className="font-normal text-lg text-gray-600 text-center">
              Some of the noteworthy projects I have built:
            </p>
          </div>
          <div className="flex rounded-xl drop-shadow-md bg-gray-100">
            <div>{/* <WorkSectionPic1 /> */}</div>
            <div className="flex flex-col gap-6 p-12">
              <p className="font-semibold test-xl text-gray-900">UBCab</p>
              <p className="font-normal text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex gap-2">
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  React
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Next.js
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Typescript
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Nest.js
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  PostgreSQL
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Tailwindcss
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Figma
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Cypress
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Storybook
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Git
                </span>
              </div>
              <div>
                <IconButton />
              </div>
            </div>
          </div>
          <div className="flex rounded-xl drop-shadow-md bg-gray-100">
            <div className="flex flex-col gap-6 p-12">
              <p className="font-semibold test-xl text-gray-900">MentorHub</p>
              <p className="font-normal text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex gap-2">
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  React
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Next.js
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Typescript
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Nest.js
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  PostgreSQL
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Tailwindcss
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Figma
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Cypress
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Storybook
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Git
                </span>
              </div>
              <div>
                <IconButton />
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex rounded-xl drop-shadow-md bg-gray-100">
            <div></div>
            <div className="flex flex-col gap-6 p-12">
              <p className="font-semibold test-xl text-gray-900">iToim</p>
              <p className="font-normal text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex gap-2">
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  React
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Next.js
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Typescript
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Nest.js
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  PostgreSQL
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Tailwindcss
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Figma
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Cypress
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Storybook
                </span>
                <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                  Git
                </span>
              </div>
              <div>
                <IconButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-20 py-24 bg-gray">
        <div className="px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
                Get in touch
              </span>
            </div>
            <p className="font-normal text-lg text-gray-600 text-center">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
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
              You may also find me on these platforms!
            </p>
            <div className="flex gap-1">
              <GithubIcon />
              <TwitterIcon />
              <FigmaIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-20 py-6 bg-gray-50">
        <div className="px-8">
          {/* <CopyrightIcon /> */}
          <p className="font-normal text-lg text-gray-600 text-center">
            2024 | Greetings with ❤️️ from Ulaanbaatar
          </p>
        </div>
      </div>
    </div>
  );
}
