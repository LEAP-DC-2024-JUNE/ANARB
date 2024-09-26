import { BlogCard } from "./BlogCard";

export const BlogCardContainer = ({ articles, inputValue }) => {
  const filteredArticle = articles.filter((article) => {
    let lowerTitle = article.title.toLowerCase();
    let lowerInputValue = inputValue.toLowerCase();
    return lowerTitle.includes(lowerInputValue);
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 px-[352px]">
        {filteredArticle.map((article) => {
          return (
            <div>
              <BlogCard
                img={article.social_image}
                tags={article.type_of}
                title={article.title}
                userName={article.user.name}
                date={article.readable_publish_date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
