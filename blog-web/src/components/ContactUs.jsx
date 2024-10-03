export const ContactUs = () => {
  return (
    <div className="px-[452px] flex flex-col gap-5 pb-[100px]">
      <div className="pt-[14px] px-2.5 flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-4xl">Contact Us</p>
          <p className="font-normal text-base text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="py-2.5 flex gap-[50px]">
          <div className="rounded-xl border-[1px] p-4 flex flex-col gap-2.5 flex-1">
            <p className="font-semibold text-2xl">Address</p>
            <p className="font-normal text-lg text-slate-500">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="rounded-xl border-[1px] p-4 flex flex-col gap-2.5 flex-1">
            <p className="font-semibold text-2xl">Contact</p>
            <p className="font-normal text-lg text-slate-500">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-[10px] bg-zinc-100 pb-10">
        <div className="pt-[29px] pl-[35px] flex flex-col gap-6">
          <p className="font-semibold text-lg">Leave a Message</p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-10">
              <input
                type="text"
                placeholder="Your Name"
                className="border-[1px] rounded-[5px]"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="border-[1px] rounded-[5px]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="border-[1px] rounded-[5px]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Write a Message"
                className="border-[1px] rounded-[5px]"
              />
            </div>
            <button className="rounded-[6px] bg-indigo-500 text-white py-2.5 px-4 w-[140px]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
