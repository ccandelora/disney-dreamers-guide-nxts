import Validate from "next-api-validation";
import { NextResponse } from "next/server";
import { Post, IPost } from "../../../../models/Post";
import { connectToDatabase } from "../../../../libs/mongodb";

connectToDatabase();

export async function GET(req: Request, { params }: { params: { slug: string } }){
    const slug = params.slug;
    try {
        const posts = await Post.find({categorySlug: slug})
        return NextResponse.json(posts.reverse())
      } catch {
        return NextResponse.json('error', {
          status: 500
        })
      }
    }