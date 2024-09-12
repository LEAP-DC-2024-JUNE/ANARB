import Image from "next/image";
import IconButton from "../svg/IconButton";
export const WorkProject = (props) => {
  const { title, description, imgSrc, tags, reverse } = props;
  if (reverse === true) {
    return (
      <div className="flex flex-col  lg:flex-row-reverse rounded-xl drop-shadow-md bg-white">
        <div className="p-12 border-r  bg-gray-50 w-[576px] dark:bg-gray-700 dark:border-gray-700">
          <Image src={imgSrc} />
        </div>
        <div className="flex flex-col gap-6 p-12 w-[576px] dark:bg-gray-800">
          <div className="font-semibold text-xl text-gray-900 dark:text-gray-50">
            {title}
          </div>
          <p className="font-normal text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => {
              return (
                <span className="rounded-xl bg-gray-200 px-5 py-1 font-medium text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  {tag}
                </span>
              );
            })}
          </div>
          <div>
            <IconButton />
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="flex flex-col rounded-xl drop-shadow-md bg-white lg:flex-row">
        <div className="p-12 border-r rounded-tl-xl bg-gray-50 w-[576px] dark:bg-gray-700 dark:border-gray-700">
          <Image src={imgSrc} />
        </div>
        <div className="flex flex-col gap-6 p-8 lg:p-12 lg:w-[576px] dark:bg-gray-800">
          <div className="font-semibold text-xl text-gray-900 dark:text-gray-50">
            {title}
          </div>
          <p className="font-normal text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => {
              return (
                <span className="rounded-xl bg-gray-200 px-5 py-1 font-medium text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  {tag}
                </span>
              );
            })}
          </div>
          <div>
            <IconButton />
          </div>
        </div>
      </div>
    );
};
