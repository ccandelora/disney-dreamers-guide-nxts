import React from "react";
import HomeContent from "../components/HomeContent";
import Pagination from "@/components/PaginationControls";
import { Post } from "../types/types";

type Props = {
  params: {},
  searchParams: { [key: string]: string | undefined },
}

export async function generateStaticParams(): Promise<Post[]> {
  const domain = process.env.API_DOMAIN;
  const res = await fetch(domain + "/api/post/").then((res) => res.json());
  const posts: Post[] = await res;
  return posts;
}  

async function getData(): Promise<Post[]> {
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
};



async function Home(props: Props): Promise<JSX.Element> {
  const posts = await getData();
  const searchParams = props.searchParams;
  const page: string = searchParams.page ?? '1';
  const per_page = searchParams.per_page ?? '9';
  const start: number = (Number(page) - 1) * Number(per_page);
  const end: number = start + Number(per_page);
  const entries = posts.slice(start, end);
  const total: number = posts.length;
  const total_pages: number = Math.ceil(total / Number(per_page));

  return (
    <> 
      <HomeContent posts={entries} />
      <Pagination start={start + 1} end={end} total={total} total_pages={total_pages}/>
    </>
  );
};

export default Home;
