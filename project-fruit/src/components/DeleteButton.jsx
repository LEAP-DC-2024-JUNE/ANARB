"use client";

import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  console.log(id);
  const deleteProduct = async () => {
    const response = await fetch(`http://127.0.0.1:3001/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/products");
    } else {
    }
  };

  return (
    <button
      className="rounded-md border-[1px] w-[150px] h-8 bg-red-400"
      onClick={deleteProduct}
    >
      Delete
    </button>
  );
};
export default DeleteButton;
