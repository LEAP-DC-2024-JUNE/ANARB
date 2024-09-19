import { useState } from "react";

const Assignment4 = () => {
  const products = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Phone", price: 800, available: false },
    { name: "Tablet", price: 400, available: true },
  ];
  const [availableProduct, setAvailableProduct] = useState(true);
  const filterAvailable = products.filter((element) => {
    return element.available == availableProduct;
  });
  const handleClick = (param1) => {
    setAvailableProduct(param1);
  };
  return (
    <div>
      <button
        className="border-2 bg-gray-500 p-4"
        onClick={() => handleClick(true)}
      >
        Available
      </button>
      <button
        className="border-2 bg-gray-500 p-4"
        onClick={() => handleClick(false)}
      >
        Not available
      </button>
      <div>
        {filterAvailable.map((product, index) => {
          return (
            <div key={index}>
              <div>{product.name}</div>
              <div>{product.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Assignment4;
