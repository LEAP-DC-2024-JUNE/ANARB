import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { BlogCardContainer } from "../../components/BlogCardContainer";
import { Footer } from "../../components/Footer";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [blogPostLimit, setBlogPostLimit] = useState(9);

  const fetchData = (limit = blogPostLimit) => {
    fetch(`https://dev.to/api/articles?per_page=${limit}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const loadMore = () => {
    setBlogPostLimit(blogPostLimit + 3);
  };

  useEffect(() => {
    fetchData(blogPostLimit);
  }, [blogPostLimit]);

  return (
    <div>
      <Header setInputValue={setInputValue} />
      <div className="px-[252px] p-6">
        <h1 className="font-bold text-2xl">All Blog Post</h1>
      </div>
      <div className="flex flex-col gap-10">
        <BlogCardContainer articles={articles} inputValue={inputValue} />
        <div className="pb-10 text-center">
          <button
            onClick={loadMore}
            className="border-[1px] py-3 px-5 rounded-md w-[123px]"
          >
            Load More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Blog;
