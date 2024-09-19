import Image from "next/image";
import IconButton from "../svg/IconButton";
import DarkIconButton from "@/svg/DarkIconButton";
import { useTheme } from "next-themes";
export const WorkProject = (props) => {
  const { title, description, imgSrc, tags, reverse } = props;
  const { theme } = useTheme();
  if (reverse === true) {
    return (
      <div className="flex flex-col  lg:flex-row-reverse drop-shadow-md rounded-xl bg-white dark:bg-gray-950 dark:drop-shadow-2xl">
        <div className="p-12 bg-gray-50 dark:bg-gray-700 border-r rounded-t-xl lg:rounded-none lg:rounded-r-xl border-gray-100 dark:border-gray-800 flex-1 flex justify-center">
          <Image src={imgSrc} width={480} height={384} />
        </div>
        <div className="flex flex-col gap-6 p-8 lg:p-12 flex-1 rounded-b-xl lg:rounded-none lg:rounded-l-xl dark:bg-gray-800">
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
          <div>{theme == "dark" ? <DarkIconButton /> : <IconButton />}</div>
        </div>
      </div>
    );
  } else
    return (
      <div className="flex flex-col drop-shadow-md rounded-xl bg-white dark:bg-gray-950 lg:flex-row dark:drop-shadow-2xl">
        <div className="p-12 bg-gray-50 dark:bg-gray-700 border-r border-gray-100 dark:border-gray-800 flex-1 flex justify-center rounded-t-xl lg:rounded-none lg:rounded-l-xl">
          <Image src={imgSrc} width={480} height={384} />
        </div>
        <div className="flex flex-col gap-6 p-8 lg:p-12 flex-1  dark:bg-gray-800 rounded-b-xl lg:rounded-none lg:rounded-r-xl">
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
          <div>{theme == "dark" ? <DarkIconButton /> : <IconButton />}</div>
        </div>
      </div>
    );
};
