"use client";
import { useEffect, useState, use } from "react";
import Link from "next/link";

const UpdateProducts = ({ params }) => {
  const { id } = use(params);

  const [data, setData] = useState({
    productName: "",
    image: "",
    from: "",
    nutrients: "",
    quantity: "",
    price: "",
    organic: false,
    description: "",
  });

  const fetchData = () =>
    fetch(`http://127.0.0.1:3001/api/products/${id}`)
      .then((response) => response.json())
      .then((item) => setData(item));

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
    fetch(`http://127.0.0.1:3001/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="px-[252px] py-10 border-[1px] rounded-md flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-semibold">Add new item</h1>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={data.productName}
            className="text-black border-[2px] py-[2px] px-[2px]"
            placeholder=" Product Name"
            onChange={(e) => setData({ ...data, productName: e.target.value })}
          ></input>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="productName">Image:</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            value={data.image}
            className="text-black border-[2px] py-[2px] px-[2px]"
            placeholder=" Product Image"
            onChange={(e) => setData({ ...data, image: e.target.value })}
          ></input>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="productName">From:</label>
          <input
            type="text"
            id="from"
            name="from"
            value={data.from}
            className="text-black border-[2px] py-[2px] px-[2px]"
            placeholder=" Product from"
            onChange={(e) => setData({ ...data, from: e.target.value })}
          ></input>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="productName">Nutrients:</label>
          <input
            type="text"
            id="nutrients"
            name="nutrients"
            value={data.nutrients}
            className="text-black border-[2px] py-[2px] px-[2px]"
            placeholder=" Product Nutrients"
            onChange={(e) => setData({ ...data, nutrients: e.target.value })}
          ></input>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="productName">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={data.quantity}
            className="text-black border-[2px] py-[2px] px-[2px]"
            placeholder="123"
            onChange={(e) => setData({ ...data, quantity: e.target.value })}
          ></input>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="productName">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={data.price}
            className="text-black border-[2px] py-[2px] px-[2px]"
            placeholder="$"
            onChange={(e) => setData({ ...data, price: e.target.value })}
          ></input>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="productName">Organic:</label>
          <input
            type="radio"
            id="organic"
            name="organic"
            value={data.organic ? true : false}
            className="text-black border-[2px] py-[2px] px-[2px]"
            onChange={(e) => setData({ ...data, organic: e.target.value })}
          ></input>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="productName">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={data.description}
            className="text-black border-[2px] py-[2px] px-[2px]"
            placeholder="Description"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          ></input>
        </div>
      </div>
      <div className="flex gap-1">
        <button
          className="border-[1px] rounded-md px-2 py-2 w-[100px] bg-slate-300"
          onClick={(e) => handleClick(e)}
        >
          Update
        </button>
        <Link href="/">
          <button className="border-[1px] rounded-md px-2 py-2 w-[100px]">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};
export default UpdateProducts;
