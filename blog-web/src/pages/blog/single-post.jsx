import { Footer, Header } from "@/components";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const SinglePost = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const searchParam = useSearchParams();
  const value = searchParam.get("selectedId");

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${value}`)
      .then((response) => response.json())
      .then((data) => setSingleArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <div>
      <Header />
      <div className="px-[352px] text-center flex flex-col gap-8 pb-10">
        <p className="font-semibold text-4xl">{singleArticle.title}</p>
        <div className="flex gap-6 items-center">
          <div className="flex gap-2 items-center">
            <img
              src={singleArticle?.user?.profile_image}
              height={28}
              width={28}
              className="rounded-[28px]"
            />
            <p className="font-medium text-sm text-[#696A75]">
              {singleArticle?.user?.name}
            </p>
          </div>
          <p className="font-medium text-sm text-[#696A75]">
            {singleArticle.readable_publish_date}
          </p>
        </div>
        <img src={singleArticle.social_image} />
        <div
          className="font-normal text-xl text-[#3B3C4A]"
          dangerouslySetInnerHTML={{ __html: singleArticle.body_html }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};
export default SinglePost;
