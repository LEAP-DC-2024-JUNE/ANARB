import Link from "next/link";
import DeleteButton from "./DeleteButton";

export const Fruit = ({
  name,
  description,
  nutrients,
  image,
  from,
  id,
  organic,
}) => {
  return (
    <div className="flex flex-col gap-5 border-[1px] rounded-xl px-[252px] py-20">
      <div className="flex gap-5 items-center">
        <div className="text-5xl">{name}</div>
        <div className="text-7xl">{image}</div>
      </div>
      <div className="">
        <span className=" font-bold ">Description:</span>
        {description}
      </div>
      <div>
        <span className=" font-bold">Nutrition: </span>
        {nutrients}
      </div>
      <div>
        <span className=" font-bold">Organic </span>
        {organic ? "✅" : "❌"}
      </div>
      <div>
        <span className=" font-bold">From: </span>
        {from}
      </div>
      <div className="flex justify-between">
        <div>
          <Link href={`/products/edit-item/${id}`}>
            <button className="rounded-md border-[1px] w-[150px] h-8 bg-slate-400">
              Update
            </button>
          </Link>
          <DeleteButton id={id} />
        </div>
        <Link href="/products">
          <button className="rounded-md border-[1px] w-[150px] h-8">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};
