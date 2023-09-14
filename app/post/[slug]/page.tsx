import React from "react";
import ReactMarkdown from "react-markdown";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import FbShare from "../../../components/FbShare";
import RedditShare from "../../../components/RedditShare";
import TwitterShare from "../../../components/TwitterShare";
import Link from "next/link";
import { Post as PostType, SlugProps } from "../../../types/types";

export async function generateStaticParams(): Promise<SlugProps[]> {
  const domain = process.env.API_DOMAIN;
  const res = await fetch(domain + "/api/post/").then((res) => res.json());
  const posts: PostType[] = await res;
  return posts.map((post: PostType) => ({
    slug: post.slug,
  }));
} 

async function getData(slug: string): Promise<PostType[]> {
  const domain = process.env.API_DOMAIN;
  const res = await fetch(domain + "/api/post/" + slug, { cache: "no-cache" });
  
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
    title: post.title + " | Disney Dreamer's Guide",
    description: post.description,
    openGraph: {
      images: [
        {
          url: "https://cdn.disneydreamersguide.com/uploads/" + post.fileName,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
      url: "https://disneydreamersguide.com/post/" + post.slug,
      title: post.title,
      description: post.description,
      type: "article",
      article: {
        publishedTime: post.createdAt,
        modifiedTime: post.updatedAt,
        section: post.category,
        authors: ["https://disneydreamersguide.com/author/" + post.author],
        tags: [post.category],
      },
    },
    twitter: {
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        property: "article:published_time",
        content: post.createdAt,
      },
      {
        property: "article:modified_time",
        content: post.updatedAt,
      },
      {
        property: "article:section",
        content: post.category,
      },
      {
        property: "article:tag",
        content: post.category,
      },
    ],
  };
}

const Post = async ( {params}: {params: {slug: string}}) => {
  const postData: PostType[] = await getData(params.slug);
  const post: PostType = postData[0];
  return (
    <>
      <div className="bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            <Link href={"/category/" + post.categorySlug}>
              {post.category}
            </Link>
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {post.title}
          </h1>
          <figure className="mt-16">
            <Image
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src={
                "https://cdn.disneydreamersguide.com/uploads/" + post.fileName
              }
              alt={post.alt}
              width={700}
              height={467}
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
              <a href={post.photographerUrl}>Photo by {post.photographer}</a>
            </figcaption>
          </figure>
          <div className="mt-5 flex items-center gap-x-2 text-xs">
            <FbShare post={post} />
            <RedditShare post={post} />
            <TwitterShare post={post} />
          </div>
          <ReactMarkdown className="mt-5">{post.body}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Post;
