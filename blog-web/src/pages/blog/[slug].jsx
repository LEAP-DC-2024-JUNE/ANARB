import { Footer, Header } from "@/components";
// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";

const SinglePost = ({ data }) => {
  // const [singleArticle, setSingleArticle] = useState({});
  // // const searchParam = useSearchParams();
  // // const value = searchParam.get("selectedId");
  // const router = useRouter();
  // const fetchData = () => {
  //   fetch(`https://dev.to/api/articles/${router.query.slug}`)
  //     .then((response) => response.json())
  //     .then((data) => setSingleArticle(data));
  // };
  // console.log(data);
  // useEffect(() => {
  //   fetchData();
  // }, [router.query.slug]);

  return (
    <div>
      <Header />
      <div className="px-[352px] text-center flex flex-col gap-8 pb-10">
        <p className="font-semibold text-4xl">{data.title}</p>
        <div className="flex gap-6 items-center">
          <div className="flex gap-2 items-center">
            <img
              src={data?.user?.profile_image}
              height={28}
              width={28}
              className="rounded-[28px]"
            />
            <p className="font-medium text-sm text-[#696A75]">
              {data?.user?.name}
            </p>
          </div>
          <p className="font-medium text-sm text-[#696A75]">
            {data.readable_publish_date}
          </p>
        </div>
        <img src={data.social_image} />
        <div
          className="font-normal text-xl text-[#3B3C4A] text-wrap break-all"
          dangerouslySetInnerHTML={{ __html: data.body_html }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const data = await fetch(`https://dev.to/api/articles/${query.slug}`).then(
    (response) => response.json()
  );
  return {
    props: {
      data,
    },
  };
};

export default SinglePost;
