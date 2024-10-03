import { BlogCard } from "./BlogCard";

export const BlogCardContainer = ({ articles, inputValue }) => {
  const filteredArticle = articles.filter((article) => {
    let lowerTitle = article.title.toLowerCase();
    let lowerInputValue = inputValue.toLowerCase();
    return lowerTitle.includes(lowerInputValue);
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 px-[252px] p-10">
        {filteredArticle.map((article) => {
          return (
            <div>
              <BlogCard
                id={article.id}
                img={article.social_image}
                tags={article.type_of}
                title={article.title}
                userName={article.user.name}
                date={article.readable_publish_date}
                profilePic={article.user.profile_image_90}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
