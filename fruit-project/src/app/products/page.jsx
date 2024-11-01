// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { ProductContainer } from "../../../components/ProductContainer";

// const async Products = () => {
//   const { push } = useRouter();
// //   const [products, setProducts] = useState([]);
// //   const fetchData = () => {
// //     fetch("http://127.0.0.1:8000/api")
// //       .then((response) => response.json())
// //       .then((data) => setProducts(data));
// //   };
// const data = await fetch("http://127.0.0.1:8000/api");
// const products = await data.json();
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <p>Products List</p>
//       <div>
//         {products.map((product) => {
//           return <ProductContainer />;
//         })}
//       </div>
//     </div>
//   );
// };
// export default Products;

import { ProductContainer } from "../../../components/ProductContainer";
export default async function Page() {
  let data = await fetch("http://127.0.0.1:8000/api");
  let products = await data.json();
  console.log(products);
  return (
    <div className="">
      <p className="px-16 pt-16 font-bold text-xl">Products</p>
      <div className="px-16 py-16 flex justify-center gap-[100px]">
        {products.map((product) => {
          return (
            <ProductContainer
              name={product.productName}
              image={product.image}
              from={product.from}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}
