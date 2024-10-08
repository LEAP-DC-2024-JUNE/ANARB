import "@/styles/globals.css";
import { MyContext } from "@/components/context";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(0);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [carouselArticles, setCarouselArticles] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchTrendingData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&tag=trending`)
      .then((response) => response.json())
      .then((data) => setTrendingArticles(data));
  };

  const fetchCarouselData = () => {
    fetch(`https://dev.to/api/articles?per_page=3&state=fresh`)
      .then((response) => response.json())
      .then((data) => setCarouselArticles(data));
  };

  useEffect(() => {
    fetchTrendingData();
    fetchCarouselData();
  }, []);

  return (
    <>
      <MyContext.Provider
        value={{
          count,
          setCount,
          trendingArticles,
          setTrendingArticles,
          carouselArticles,
          setCarouselArticles,
        }}
      >
        <Component {...pageProps} />
      </MyContext.Provider>
    </>
  );
}
