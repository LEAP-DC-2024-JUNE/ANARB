import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { BlogCardContainer } from "../../components/BlogCardContainer";
import { Footer } from "../../components/Footer";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header setInputValue={setInputValue} />
      <div className="px-[352px] p-6">
        <h1 className="font-bold text-2xl">All Blog Post</h1>
      </div>
      <div className="flex flex-col gap-20">
        <BlogCardContainer articles={articles} inputValue={inputValue} />
        <Footer />
      </div>
    </div>
  );
};
export default Blog;
