export const TrendingCard = ({ img, title, tags }) => {
  return (
    <div className="rounded-xl relative">
      <img src={img} width={300} height={500} className="h-[200px]" />
      {/* <Image src={Image1} height={320} /> */}
      {/* <div className="flex flex-col gap-4 absolute left-1 top-0">
        <span className="rounded-md py-1 px-2.5 bg-indigo-500 text-white text-xs font-medium w-[86px]">
          {tags}
        </span>
        <p className="font-semibold text-lg text-black">{title}</p>
      </div> */}
    </div>
  );
};
