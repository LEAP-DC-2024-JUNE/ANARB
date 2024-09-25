export const BlogCard = ({ userName, description, img, date }) => {
  return (
    <div className=" border-2 rounded-xl">
      <div className="flex-1 w-[360px] h-[240px]">
        <img src={img} />
      </div>
      <div className="p-2 flex flex-col gap-20 flex-1 w-[360px] h-[240px]">
        <div className="flex flex-col gap-4">
          <span>Technology</span>
          <p>{description}</p>
        </div>
        <div className="flex gap-5">
          <div>{userName}</div>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
