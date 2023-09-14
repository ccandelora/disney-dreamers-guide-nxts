import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post as PostType } from "../types/types";


export default function HomeContent(props: { posts: PostType[] }) {
  const { posts } = props;
  return (
    <div className="bg-white py-10 sm:py-10" >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Ultimate Guide to Disney World Magic! 🏰✨
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Turn Your Disney Dreams into Reality.
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            🎈 <strong>Plan Like a Pro</strong>: Tips for Max Disney Fun!
            <br />
            🍔 <strong>Feast on Fun</strong>: Foodie Adventures Unveiled.
            <br />
            🎢 <strong>Thrills and Chills</strong>: Must-Ride Disney Adventures.
            <br />
            🌟 <strong>Character Encounters</strong>: Meet Beloved Characters.
            <br />
            🌐 <strong>Beyond the Parks</strong>: Explore All Things Disney.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            
            <article
              key={post._id}
              className="flex flex-col items-start justify-between"
            >
              <div className="w-full"
              data-te-animation-init
              data-te-animation-start="onScroll"
              data-te-animation="[slide-right_1s_ease-in-out]">
              <Link href={"/post/" + post.slug}>
              <div className="relative">
                  <Image
                    src={
                      "https://cdn.disneydreamersguide.com/uploads/" +
                      post.fileName
                    }
                    alt={post.alt}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    width={700}
                    height={467}
                  />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              </Link>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={new Date(post.createdAt).toLocaleString()} className="text-gray-500">
                    {new Date(post.createdAt).toLocaleString()}
                  </time>
                  <a
                    href={"/category/" + post.categorySlug}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={"/post/" + post.slug}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
