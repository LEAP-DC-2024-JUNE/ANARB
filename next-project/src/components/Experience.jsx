import UpworkLogo from "../svg/UpworkLogo";

function Experience() {
  return (
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
  );
}
export default Experience;
