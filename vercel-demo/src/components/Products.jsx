import { ProductContainer } from "../components/ProductContainer";
import Mentorhub from "../../public/Mentorhub.png";
const Products = () => {
  const Products = [
    { imgSrc: Mentorhub, productTitle: "Burnikk", productColor: "Sexbomb" },
    {
      imgSrc: Mentorhub,
      productTitle: "Kibal Batal",
      productColor: "Kibal Black",
    },
    {
      imgSrc: Mentorhub,
      productTitle: "Very Nice",
      productColor: "Salt maalat",
    },
    { imgSrc: Mentorhub, productTitle: "Kulangot", productColor: "Salt" },
    { imgSrc: Mentorhub, productTitle: "Sipon Malapot", productColor: "salt" },
    {
      imgSrc: Mentorhub,
      productTitle: "Pitaklan",
      productColor: "Black Kibal",
    },
  ];
  return (
    <div>
      <p className="font-bold text-2xl pb-12">Recommended Products</p>
      <div className="flex flex-wrap gap-12 justify-center">
        {Products.map((product, index) => {
          return (
            <ProductContainer
              key={index}
              imgSrc={product.imgSrc}
              productTitle={product.productTitle}
              productColor={product.productColor}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Products;
