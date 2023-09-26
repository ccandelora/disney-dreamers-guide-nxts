import { NextResponse } from "next/server";
import { Post } from "../../../models/Post";
import { connectToDatabase } from "../../../libs/mongodb";


connectToDatabase();

interface NewPostRequest {
  title: string;
  description: string;
  content: string;
  author: string;
  category: string;
  fileName: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}

interface NewPostResponse {
  id: string;
  title: string;
  description: string;
  body: string;
  author: string;
  category: string;
  fileName: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
  slug: string;
  categorySlug: string;
  createdAt: Date;
  updatedAt: Date;
}

interface EditPostRequest {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  category: string;
  categorySlug: string;
  fileName: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}

interface EditPostResponse {
  id: string;
  title: string;
  slug: string;
  description: string;
  body: string;
  author: string;
  category: string;
  categorySlug: string;
  fileName: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}

type NewResponse = NextResponse<{ post?: NewPostResponse; error?: string }>;
type EditResponse = NextResponse<{ post?: EditPostResponse; error?: string }>;

const _ = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");

export const GET = async (req: Request): Promise<NextResponse> => {
  try {
    const posts = await Post.find();
    return NextResponse.json(posts.reverse());
  } catch {
    return NextResponse.json("error", {
      status: 500,
    });
  }
};

export const POST = async (req: Request): Promise<NewResponse> => {
  try {
    const body = (await req.json()) as NewPostRequest;
    const postTitle = body.title;
    const postBody = body.content;
    const postAuthor = body.author;
    const postDescription = body.description;
    const postSlug = _(postTitle);
    const postCategory = body.category;
    const postAlt = body.alt;
    const postFileName = body.fileName;
    const postPhotographer = body.photographer;
    const postPhotographerUrl = body.photographerUrl;
    const postCategorySlug = _(postCategory);
    const newPost = new Post({
      title: postTitle,
      body: postBody,
      author: postAuthor,
      description: postDescription,
      fileName: postFileName,
      alt: postAlt,
      slug: postSlug,
      category: postCategory,
      categorySlug: postCategorySlug,
      photographer: postPhotographer,
      photographerUrl: postPhotographerUrl,
    });

    const saved = await newPost.save();
    return NextResponse.json({
      post: {
        id: saved._id.toString(),
        title: saved.title,
        body: saved.body,
        description: saved.description,
        author: saved.author,
        category: saved.category,
        categorySlug: saved.categorySlug,
        slug: saved.slug,
        fileName: saved.fileName,
        alt: saved.alt,
        photographer: saved.photographer,
        photographerUrl: saved.photographerUrl,
        createdAt: saved.createdAt,
        updatedAt: saved.updatedAt,
      },
    });
  } catch {
    return NextResponse.json({
      error: "Failed to create post",
      status: 500,
    });
  }
};

export const PUT = async (req: Request): Promise<EditResponse> => {
  try {
    const body = (await req.json()) as EditPostRequest;
    const postId = body.id;
    const postTitle = body.title;
    const postBody = body.content;
    const postAuthor = body.author;
    const postDescription = body.description;
    const postSlug = _(postTitle);
    const postCategory = body.category;
    const postAlt = body.alt;
    const postFileName = body.fileName;
    const postPhotographer = body.photographer;
    const postPhotographerUrl = body.photographerUrl;
    const postCategorySlug = _(postCategory);

    const editPost = await Post.findOne({_id: postId});
    
    if (!editPost) {
      return NextResponse.json({ 
        error: "Failed to edit post",
      status: 400
    });
    }

    editPost.title = postTitle;
    editPost.body = postBody;
    editPost.author = postAuthor;
    editPost.description = postDescription;
    editPost.slug = postSlug;
    editPost.category = postCategory;
    editPost.alt = postAlt;
    editPost.fileName = postFileName;
    editPost.photographer = postPhotographer;
    editPost.photographerUrl = postPhotographerUrl;
    editPost.categorySlug = postCategorySlug;

    await editPost.save();

  return NextResponse.json({
     status: 200,
      post: {
        id: editPost._id.toString(),
        title: editPost.title,
        body: editPost.body,
        description: editPost.description,
        author: editPost.author,
        category: editPost.category,
        categorySlug: editPost.categorySlug,
        slug: editPost.slug,
        fileName: editPost.fileName,
        alt: editPost.alt,
        photographer: editPost.photographer,
        photographerUrl: editPost.photographerUrl,
    }
  });
  } catch {
    return NextResponse.json({
      error: "Failed to create post",
    });
  }
};


//  export async function DELETE(req: Request) {
//    const query = new URL(req.url).searchParams
//    const id = query.get('id')
//    try {
//      const deletedPost = await Post.findByIdAndDelete(id)
//
//      return NextResponse.json(deletedPost)
//    } catch {
//      return NextResponse.json(
//        {
//          error: 'Failed to remove post'
//        },
//        {
//          status: 500
//        }
//      )
//    }
//  }
