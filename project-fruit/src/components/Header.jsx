import Link from "next/link";

export const Header = () => {
  return (
    <div className="h-[80px] border-b-[1px] px-[252px]">
      <Link href="/">
        <div className="text-3xl font-medium py-4">SHOP</div>
      </Link>
      <div></div>
    </div>
  );
};
