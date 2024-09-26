export const BlogCard = ({ userName, title, img, date, tags }) => {
  return (
    <div className=" border-[1px] rounded-xl p-4 h-[488px] flex flex-col gap-4">
      <div className="">
        <img src={img} height={"240px"} width={"360px"} />
      </div>
      <div className="p-2 flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <span className="rounded-md bg-slate-200 text-sky-600 w-[57px] text-center">
            {tags}
          </span>
          <p className="font-semibold text-2xl text-slate-900">{title}</p>
        </div>
        <div className="flex gap-5">
          <div className="font-medium text-base text-slate-500">{userName}</div>
          <div className="font-normal text-base text-slate-500">{date}</div>
        </div>
      </div>
    </div>
  );
};
