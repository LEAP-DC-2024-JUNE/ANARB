import { useState } from "react";

const Assignment4 = () => {
  const products = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Phone", price: 800, available: false },
    { name: "Tablet", price: 400, available: true },
  ];
  const [availableProduct, setAvailableProduct] = useState;
  const filterAvailable = products.filter((element) => {
    return element.available == true;
  });
  const handleClick = () => {
    setAvailableProduct();
  };
  return (
    <div>
      <p>New array containing only the products that are available:</p>
      <button></button>
      <button></button>
      <div>
        {filterAvailable.map((product) => {
          return (
            <div>
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
