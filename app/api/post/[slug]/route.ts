import Validate from "next-api-validation";
import { NextResponse } from "next/server";
import { Post } from "../../../../models/Post";
import { connectToDatabase } from "../../../../libs/mongodb";

connectToDatabase();

export const  GET = async (req: Request, { params }: { params: { slug: string } }): Promise<NextResponse> => {
    const slug = params.slug;
    try {
        const posts = await Post.find({slug: slug})
        return NextResponse.json(posts.reverse())
      } catch {
        return NextResponse.json('error', {
          status: 500
        })
      }
    }