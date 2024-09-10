import Image from "next/image";
export const ProductContainer = (props) => {
  const { productTitle, productColor, imgSrc, key } = props;
  return (
    <div key={key}>
      <div className="flex flex-col drop-shadow-md rounded-xl">
        <div className="w-96 h-96">
          <Image src={imgSrc} />
        </div>
        <div className="font-semibold text-2xl">{productTitle}</div>
        <div>{productColor}</div>
      </div>
    </div>
  );
};
