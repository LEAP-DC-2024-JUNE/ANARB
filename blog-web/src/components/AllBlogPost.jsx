export const AllBlogPost = ({ setTag }) => {
  return (
    <div className="px-[252px] flex flex-col gap-8">
      <p className="font-bold text-2xl">All Blog Post</p>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <p
            onClick={() => setTag("javascript")}
            className="cursor-pointer font-bold text-xs"
          >
            Javascript
          </p>
          <p
            onClick={() => setTag("css")}
            className="cursor-pointer font-bold text-xs"
          >
            CSS
          </p>
          <p
            onClick={() => setTag("nextjs")}
            className="cursor-pointer font-bold text-xs"
          >
            Next Js
          </p>
        </div>
        <p
          onClick={() => setTag("")}
          className="cursor-pointer text-xs font-bold"
        >
          View All
        </p>
      </div>
    </div>
  );
};
