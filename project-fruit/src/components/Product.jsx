import Link from "next/link";

export const Product = ({ name, price, image, id }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="border-[1px] rounded-xl p-4 flex flex-col justify-between w-[180px] h-[100px]">
        <div className="flex gap-1">
          <div>{name}</div>
          <div>{image}</div>
        </div>
        <div className="">
          <div>{`Price: $${price}`}</div>
        </div>
      </div>
    </Link>
  );
};
