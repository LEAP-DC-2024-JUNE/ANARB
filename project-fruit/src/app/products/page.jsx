import { Product } from "@/components/Product";

export default async function Products() {
  let data = await fetch("http://127.0.0.1:3001/api/products");
  let products = await data.json();
  // console.log(products);

  return (
    <div className="flex flex-col gap-4 px-[252px] pb-40">
      <p className="pt-16 font-semibold text-2xl">Products</p>
      <div className="px-16 py-4 flex justify-center gap-4 flex-wrap">
        {products.map((product) => {
          return (
            <Product
              name={product.productName}
              image={product.image}
              from={product.from}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
