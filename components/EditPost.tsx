"use client";
import InputField from "@/components/InputField";
import TextAreaInput from "@/components/TextAreaInput";
import { Post as PostType} from "../types/types";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

const EditPost = (props: { post: PostType }) => {
    const post = props.post;
    const [postInfo, setPostInfo] = useState({
            id: post._id,
            title: post.title,
            slug: post.slug,
            description: post.description,
            content: post.body,
            author: post.author,
            category: post.category,
            categorySlug: post.categorySlug,
            fileName: post.fileName,
            alt: post.alt,
            photographer: post.photographer,
            photographerUrl: post.photographerUrl,
            createdAt: post.createdAt,
            updatedAt: Date.now(),
    });

    const {
        id,
        title,
        slug,
        description,
        content,
        author,
        category,
        categorySlug,
        fileName,
        alt,
        photographer,
        photographerUrl,
        createdAt,
        updatedAt,
    } = postInfo;

    const router = useRouter();

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;
        setPostInfo({
            ...postInfo,
            [name]: value,
        });
    };

    const handleTextAreaChange: ChangeEventHandler<HTMLTextAreaElement> = ({
        target,
    }) => {
        const { name, value } = target;
        setPostInfo({
            ...postInfo,
            [name]: value,
        });
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const res = await fetch("/api/post", {
            method: "PUT",
            body: JSON.stringify(postInfo),
        }).then((res) => res.json());
        console.log(res);
        router.replace("/dashboard");

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="max-w-md w-full space-y-8">
            <InputField
                label="Title"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
            />
            <InputField
                label="Slug"
                type="text"
                name="slug"
                value={slug}
                onChange={handleChange}
            />
            <TextAreaInput
                label="Description"
                name="description"
                value={description}
                onTextAreaChange={handleTextAreaChange}
            />
            <TextAreaInput
                label="Content"
                name="content"
                value={content}
                onTextAreaChange={handleTextAreaChange}
            />
            <InputField
                label="Author"
                type="text"
                name="author"
                value={author}
                onChange={handleChange}
            />
            <InputField
                label="Category"
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
            />
            <InputField
                label="Category Slug"
                type="text"
                name="categorySlug"
                value={categorySlug}
                onChange={handleChange}
            />
            <InputField
                label="File Name"
                type="text"
                name="fileName"
                value={fileName}
                onChange={handleChange}
            />
            <InputField
                label="Alt"
                type="text"
                name="alt"
                value={alt}
                onChange={handleChange}
            />
            <InputField
                label="Photographer"
                type="text"
                name="photographer"
                value={photographer}
                onChange={handleChange}
            />
            <InputField
                label="Photographer Url"
                type="text"
                name="photographerUrl"
                value={photographerUrl}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
                Edit Post
            </button>
        </form>
        </div>
    );
}

export default EditPost;