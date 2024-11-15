"use client";

const UpdateButton = ({ id }) => {
  console.log(id);
  const updateProducts = async () => {
    const response = await fetch(`http://127.0.0.1:3001/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <button
      className="rounded-md border-[1px] w-[150px] h-8 bg-slate-300"
      onClick={updateProducts}
    >
      Update
    </button>
  );
};
export default UpdateButton;
