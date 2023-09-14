import Validate from "next-api-validation";
import { NextResponse } from "next/server";
import { Post } from "../../../models/Post";
import { connectToDatabase } from "../../../libs/mongodb";

connectToDatabase();

export async function GET(req: Request){
    try {
        const posts = await Post.aggregate(
            [
                { "$group": { "_id": {category: "$category", "categorySlug": "$categorySlug" }}},
            ] 
        );
        return NextResponse.json(posts.reverse());
      } catch {
        return NextResponse.json("error", {
          status: 500,
        });
      }
    }