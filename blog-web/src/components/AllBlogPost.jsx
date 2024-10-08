export const AllBlogPost = ({ setTag }) => {
  return (
    <div className="px-[252px] flex flex-col gap-8">
      <p className="font-bold text-2xl">All Blog Post</p>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <p
            onClick={() => setTag("javascript")}
            className="cursor-pointer font-bold text-xs hover:text-slate-400"
          >
            Javascript
          </p>
          <p
            onClick={() => setTag("css")}
            className="cursor-pointer font-bold text-xs hover:text-slate-400"
          >
            CSS
          </p>
          <p
            onClick={() => setTag("nextjs")}
            className="cursor-pointer font-bold text-xs hover:text-slate-400"
          >
            Next Js
          </p>
        </div>
        <p
          onClick={() => setTag("")}
          className="cursor-pointer text-xs font-bold hover:text-slate-400"
        >
          View All
        </p>
      </div>
    </div>
  );
};
