import Image from "next/image";
export const Cardd = (props) => {
  const { title, descriptions, imgSrc, timeline } = props;
  return (
    <div className="rounded-xl p-8 drop-shadow-md bg-white">
      <div className="flex justify-between">
        <div>
          <Image src={imgSrc} />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-xl text-gray-900">{title}</p>
          <ul className="font-normal text-base text-gray-600 flex flex-col gap-1 list-disc">
            {descriptions.map((description) => {
              return <li>{description}</li>;
            })}
          </ul>
        </div>
        <div className="font-normal text-base text-gray-700">{timeline}</div>
      </div>
    </div>
  );
};
