import { Fruit } from "@/components/Fruit";

export default async function FruitId({ params }) {
  const { id } = await params;
  const data = await fetch(`http://127.0.0.1:3001/api/products/${id}`).then(
    (response) => response.json()
  );
  // let product = await data.json();

  console.log(id);

  return (
    <div className="">
      <Fruit
        name={data.productName}
        from={data.from}
        description={data.description}
        nutrients={data.nutrients}
        image={data.image}
        id={data.id}
        organic={data.organic}
      />
    </div>
  );
}
