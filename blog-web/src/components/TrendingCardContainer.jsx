// import { TrendingCard } from ".";

// export const TrendingCardContainer = ({ articles }) => {
//   return (
//     <div className="flex flex-col gap-2.5 px-[252px]">
//       <p className="font-bold text-2xl">Trending</p>
//       <div className="flex gap-5 h-[230px]">
//         {articles.map((article) => {
//           return (
//             <div>
//               <TrendingCard
//                 img={article.social_image}
//                 title={article.title}
//                 tags={article.type_of}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

import { TrendingCard } from ".";
import { useContext } from "react";
import { MyContext } from "./context";

export const TrendingCardContainer = () => {
  const { trendingArticles } = useContext(MyContext);
  return (
    <div className="flex flex-col gap-2.5 px-[252px]">
      <p className="font-bold text-2xl">Trending</p>
      <div className="flex gap-5 h-[230px]">
        {trendingArticles.map((article) => {
          return (
            <div>
              <TrendingCard
                img={article.social_image}
                title={article.title}
                tags={article.type_of}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
