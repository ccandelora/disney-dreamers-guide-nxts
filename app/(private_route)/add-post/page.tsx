"use client";
import InputField from "@/components/InputField";
import TextAreaInput from "@/components/TextAreaInput";
import { set } from "mongoose";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

const AddPost = () => {
  const [postInfo, setPostInfo] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
    fileName: "",
    category: "",
    alt: "",
    photographer: "",
    photographerUrl: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const {
    title,
    description,
    content,
    author,
    fileName,
    category,
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
      method: "POST",
      body: JSON.stringify(postInfo),
    }).then((res) => res.json());
    console.log(res);
    router.replace("/dashboard");
  };
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
        <TextAreaInput
          label="Description"
          name="description"
          value={description}
          onTextAreaChange={handleTextAreaChange}
        />
        <TextAreaInput
          label="Body"
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
          label="Photo File Name"
          type="text"
          name="fileName"
          value={fileName}
          onChange={handleChange}
        />
        <InputField
          label="Alt Photo Name"
          type="text"
          name="alt"
          value={alt}
          onChange={handleChange}
        />
        <InputField
          label="Photographer Name"
          type="text"
          name="photographer"
          value={photographer}
          onChange={handleChange}
        />
        <InputField
          label="Photographer URL"
          type="text"
          name="photographerUrl"
          value={photographerUrl}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
