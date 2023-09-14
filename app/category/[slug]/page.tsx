import React from "react";
import CategoryContent from "../../../components/CategoryContent";
import PaginationControls from "../../../components/PaginationControls";
import { Post as PostType } from "../../../types/types";

type Props = {
  params: {slug: string},
  searchParams: { [key: string]: string | undefined },
}

async function getData(slug: string): Promise<PostType[]> {
  const domain = process.env.API_DOMAIN;
  const res = await fetch(domain + "/api/category/" + slug, { cache: "no-cache",});

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({params} : {params: {slug: string}}) {
  const postData: PostType[] = await getData(params.slug);
  const post: PostType = postData[0];

  return {
    title: "Disney Dreamer's Guide : " + post.category,
    description: post.category + " Category",
    openGraph: {
      url: "https://disneydreamersguide.com/category/" + post.categorySlug,
      title: "Disney Dreamer's Guide : " + post.category,
      description: post.category + " Category",
      type: "website",
    },
    twitter: {
      cardType: "summary_large_image",
    },
  };
}

const Category = async (props: Props): Promise<JSX.Element> => {
  const slug: string = props.params.slug;
  const posts: PostType[] = await getData(slug);
  const searchParams = props.searchParams;
  const page: string = searchParams.page ?? '1';
  const per_page = searchParams.per_page ?? '9';
  const start: number = (Number(page) - 1) * Number(per_page);
  const end: number = start + Number(per_page);
  const entries = posts.slice(start, end);
  const total: number = posts.length;
  const total_pages: number = Math.ceil(total / Number(per_page));

  return (
    <div>
      <CategoryContent posts={entries} />
      <PaginationControls start={start + 1} end={end} total={total} total_pages={total_pages}/>
    </div>
  );
}

export default Category;
