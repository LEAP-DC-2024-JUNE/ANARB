import {
  Header,
  BlogCardContainer,
  CarouselCard,
  TrendingCardContainer,
  AllBlogPost,
  Footer,
} from "@/components";
import { SliderBtnBack } from "@/icons/carousel/SliderBtnBack";
import { SliderBtnForward } from "@/icons/carousel/SliderBtnForward";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [carouselArticles, setCarouselArticles] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [tag, setTag] = useState([]);
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [blogPostLimit, setBlogPostLimit] = useState(9);

  const fetchData = (blogPostLimit) => {
    fetch(`https://dev.to/api/articles?per_page=${blogPostLimit}&tag=${tag}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  // const fetchCarouselData = () => {
  //   fetch(`https://dev.to/api/articles?per_page=3&state=fresh`)
  //     .then((response) => response.json())
  //     .then((data) => setCarouselArticles(data));
  // };

  // const fetchTrendingData = () => {
  //   fetch(`https://dev.to/api/articles?per_page=4&tag=trending`)
  //     .then((response) => response.json())
  //     .then((data) => setTrendingArticles(data));
  // };

  const loadMore = () => {
    setBlogPostLimit(blogPostLimit + 3);
  };

  const slideBack = () => {
    setIndex((prevState) =>
      prevState == 0 ? carouselArticles.length - 1 : prevState - 1
    );
  };

  const slideForward = () => {
    setIndex((prevState) =>
      prevState == carouselArticles.length - 1 ? 0 : prevState + 1
    );
  };

  useEffect(() => {
    fetchData(blogPostLimit);
    // fetchCarouselData();
    // fetchTrendingData();
  }, [blogPostLimit, tag]);

  return (
    <div>
      <Head>
        <title>Meta Blog</title>
      </Head>
      <Header setInputValue={setInputValue} />
      <CarouselCard article={carouselArticles[index]} />
      <div className="flex justify-end px-[252px] pt-2">
        <button onClick={slideBack}>
          <SliderBtnBack />
        </button>
        <button onClick={slideForward}>
          <SliderBtnForward />
        </button>
      </div>
      <TrendingCardContainer articles={trendingArticles} />
      <AllBlogPost setTag={setTag} />
      <BlogCardContainer articles={articles} inputValue={inputValue} />
      <div className="pb-10 text-center">
        <button
          onClick={loadMore}
          className="border-[1px] py-3 px-5 rounded-md w-[123px]"
        >
          Load More
        </button>
      </div>
      <Footer />
    </div>
  );
}
