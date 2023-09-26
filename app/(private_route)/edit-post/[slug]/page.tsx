import React from "react";
import { Post as PostType} from "../../../../types/types";
import EditPost from "@/components/EditPost";

const getData = async (slug: string): Promise<PostType[]> => {
    const domain = process.env.API_DOMAIN;
    const res = await fetch(domain + "/api/post/" + slug, { cache: "no-cache" });
    
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }
    return res.json();
    }

const Edit = async ( {params}: {params: {slug: string}}) => {
    const postData: PostType[] = await getData(params.slug);
    const post: PostType = postData[0];
    console.log(post);
    return (
      <>
      <EditPost post={post} />
        </>
    );
}

export default Edit;


