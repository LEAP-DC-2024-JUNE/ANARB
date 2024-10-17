"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Contact = () => {
  const { push } = useRouter();
  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <button onClick={() => push("/contact/test")}>Contact Page</button>
    </div>
  );
};
export default Contact;
