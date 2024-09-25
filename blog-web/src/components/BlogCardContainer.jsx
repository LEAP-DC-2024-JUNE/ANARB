import { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";
export const BlogCardContainer = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(articles);
  return (
    <div>
      <div className="grid grid-cols-3 gap-12">
        {articles.map((article) => {
          return (
            <div>
              <BlogCard
                description={article.description}
                tags={article.tags}
                userName={article.user.name}
                readable_published_date={article.readable_published_date}
                img={article.social_image}
                date={article.readable_publish_date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
