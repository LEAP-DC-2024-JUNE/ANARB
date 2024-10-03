import Link from "next/link";

export const BlogCard = ({
  userName,
  title,
  img,
  date,
  tags,
  id,
  profilePic,
}) => {
  return (
    <Link href={{ pathname: "/blog/single-post", query: { selectedId: id } }}>
      <div className=" border-[1px] rounded-xl p-4 flex flex-col justify-between h-[380px]">
        <div className="">
          <img src={img} />
        </div>
        <div className="p-2 flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <span className="rounded-md bg-slate-200 text-sky-600 w-[57px] text-center">
              {tags}
            </span>
            <p className="font-semibold text-2xl text-slate-900">{title}</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img src={profilePic} className="h-9 rounded-[24px]" />
          <div className="font-medium text-base text-slate-500">{userName}</div>
          <div className="font-normal text-base text-slate-500">{date}</div>
        </div>
      </div>
    </Link>
  );
};
