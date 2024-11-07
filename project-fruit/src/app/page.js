import Link from "next/link";

export default function Home() {
  return (
    <div className="px-[252px] py-20">
      <Link href="/products">
        <div className="text-5xl">Click here to SHOP</div>
      </Link>
    </div>
  );
}
