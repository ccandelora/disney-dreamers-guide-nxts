import React from "react";
import HomeContent from "../components/HomeContent";

export async function generateStaticParams() {
  const domain = process.env.API_DOMAIN;
  const res = await fetch(domain + "/api/post/").then((res) => res.json());
  const posts = await res.json();
  return posts;
}  

const getData = async () => {
  const domain = process.env.API_DOMAIN;
  const res = await fetch(domain + "/api/post", { cache: "no-cache" });

  if (!res.ok) {
//    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const metadata = {
  title: "Disney Dreamer's Guide",
  description: "A guide to help you plan your next Disney vacation.",
 // URL: "https://www.disneydreamersguide.com/",
 // type: "website",
};

async function Home() {
  const posts = await getData();
  return (
    <>
      <HomeContent posts={posts} />
    </>
  );
};

export default Home;
