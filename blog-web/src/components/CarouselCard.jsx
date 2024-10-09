import { useContext } from "react";
import { MyContext } from "./context";
export const CarouselCard = () => {
  // if (!carouselArticles) {
  //   return null;
  // }
  // const { count, setCount } = useContext(MyContext);
  const { carouselArticles } = useContext(MyContext);
  const { index } = useContext(MyContext);
  console.log(carouselArticles);
  return (
    <div className="px-[252px] pt-10 relative">
      {/* <div>
        <div>{count} ni iim bn shu</div>
        <button onClick={() => setCount(count + 1)}>Nemeh +</button>
        <button onClick={() => setCount(count - 1)}>Hasah -</button>
      </div> */}
      <div className="rounded-xl">
        <img
          src={carouselArticles[index]?.social_image}
          width={1216}
          height={600}
          className="rounded-xl h-[500px] brightness-50"
        />
      </div>
      <div className="bg-white rounded-xl border-[1px] p-10 flex flex-col gap-6 shadow-xl w-[598px] absolute left-[265px] bottom-5">
        <div className="flex flex-col gap-4">
          <span className="rounded-[6px] bg-indigo-500 text-white py-1 px-2.5 w-[100px]"></span>
          <p className="font-semibold text-4xl">
            {carouselArticles[index]?.title}
          </p>
        </div>
        <div>
          <p>{carouselArticles[index]?.readable_publish_date}</p>
        </div>
      </div>
    </div>
  );
};
