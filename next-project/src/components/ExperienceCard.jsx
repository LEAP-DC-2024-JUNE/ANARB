import Image from "next/image";
export const ExperienceCard = (props) => {
  const { title, descriptions, imgSrc, timeline } = props;
  return (
    <div className="rounded-xl p-8 drop-shadow-md bg-white dark:bg-gray-800">
      <div className="flex flex-col gap-4 justify-between lg:flex-row lg:gap-12">
        <div>
          <Image src={imgSrc} />
        </div>
        <div className="flex flex-col-reverse gap-4 lg:flex-row">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-xl text-gray-900 dark:text-gray-50">
              {title}
            </p>
            <ul className="font-normal text-base text-gray-600 flex flex-col gap-1 list-disc dark:text-gray-300">
              {descriptions.map((description) => {
                return <li>{description}</li>;
              })}
            </ul>
          </div>
          <div className="font-normal text-base text-gray-700 dark:text-gray-200">
            {timeline}
          </div>
        </div>
      </div>
    </div>
  );
};
