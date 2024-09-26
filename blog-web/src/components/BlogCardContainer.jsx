import { BlogCard } from "./BlogCard";

export const BlogCardContainer = ({ articles }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 px-[352px]">
        {articles.map((article) => {
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
