import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    fetchData();
  }, []);
  console.log(articles);

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>
        You clicked {count} times
      </button> */}
      {articles.map((article) => {
        return (
          <div>
            <p>{article.title}</p>
            <img src={article.cover_image} />
          </div>
        );
      })}
    </div>
  );
}
