import React from "react";
import Link from "next/link";
import AuthMenu from "@/components/AuthMenu";
import { Post } from "../../../types/types";

async function getData(): Promise<Post[]> {
  const domain = process.env.API_DOMAIN;
  const res = await fetch(domain + "/api/post", { cache: "no-cache" });

  if (!res.ok) {
//    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Dashboard = async () =>{
  const posts = await getData();
  return (
    <div className="min-h-screen flex bg-gray-50 py-3 px-4 sm:px-6 lg:px-8">
      <AuthMenu />
      <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                          Post Title
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {posts.map((post) => (
                        <tr key={post.title}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-0">
                            {post.title}
                          </td>
                          
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <Link href={"/edit-post/" + post.slug} className="text-indigo-400 hover:text-indigo-300">
                              Edit<span className="sr-only">, {post.title}</span>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
    </div>
  );
}

export default Dashboard;
