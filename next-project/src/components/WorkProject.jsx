import Image from "next/image";
export const WorkProject = (props) => {
  const { title, description, imgSrc, tag, reverse } = props;
  if (reverse === true) {
    return (
      <div className="flex flex-row-reverse rounded-xl drop-shadow-md bg-gray-100">
        <div className="p-12">
          <Image src={imgSrc} />
        </div>
        <div className="flex flex-col gap-6 p-12">
          <div className="font-semibold test-xl text-gray-900">{title}</div>
          <p className="font-normal text-base text-gray-600">{description}</p>
          <div>
            <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
              {tag}
            </span>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="flex rounded-xl drop-shadow-md bg-gray-100">
        <div className="p-12">
          <Image src={imgSrc} />
        </div>
        <div className="flex flex-col gap-6 p-12">
          <div className="font-semibold test-xl text-gray-900">{title}</div>
          <p className="font-normal text-base text-gray-600">{description}</p>
          <div>
            <span className="rounded-xl bg-gray-200 px-1 py-2 font-medium text-sm">
              {tag}
            </span>
          </div>
        </div>
      </div>
    );
};
