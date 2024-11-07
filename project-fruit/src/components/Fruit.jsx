export const Fruit = ({ name, desc, nutri, pic, from }) => {
  return (
    <div className="flex flex-col gap-5 border-[1px] rounded-xl px-[252px] py-20">
      <div className="flex gap-5 items-center">
        <div className="text-5xl">{name}</div>
        <div className="text-7xl">{pic}</div>
      </div>
      <div className="">
        <span className=" font-bold ">Description:</span>
        {desc}
      </div>
      <div>
        <span className=" font-bold">Nutrition: </span>
        {nutri}
      </div>
      <div>
        <span className=" font-bold">From: </span>

        {from}
      </div>
      <button className="rounded-md border-[1px]">Delete</button>
    </div>
  );
};
