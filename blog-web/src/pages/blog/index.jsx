import { BlogCard } from "../../components/BlogCard";
import { BlogCardContainer } from "../../components/BlogCardContainer";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";

const Blog = () => {
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
    // <div className="grid grid-cols-3 gap-12">
    //   {articles.map((article) => {
    //     return (
    //       <div>
    //         <BlogCard
    //           description={article.description}
    //           tags={article.tags}
    //           userName={article.user.name}
    //           readable_published_date={article.readable_published_date}
    //           img={article.social_image}
    //           date={article.readable_publish_date}
    //         />
    //       </div>
    //     );
    //   })}
    // </div>
    <div>
      <Header />
      <BlogCardContainer />
      <Footer />
    </div>
  );
};
export default Blog;
