export const ProductContainer = ({ name, image, from, price }) => {
  return (
    <div className="">
      <div className="font-bold text-xl">
        {name}
        {image}
      </div>
      <p>from {from}</p>
      <div className="font-b">${price}</div>
      <button className="rounded-md border-2 border-black">Details</button>
    </div>
  );
};
