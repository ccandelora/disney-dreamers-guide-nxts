import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  description: string;
  author: string;
  body: string;
  fileName: string;
  slug: string;
  alt: string;
  category: string;
  categorySlug: string;
  photographer: string;
  photographerUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  body: {
    type: String,
  },
  fileName: {
    type: String,
  },
  slug: {
    type: String,
  },
  alt: {
    type: String,
  },
  category: {
    type: String,
  },
  categorySlug: {
    type: String,
  },
  photographer: {
    type: String,
  },
  photographerUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

export const Post = (mongoose.models.Post ||
  model("Post", PostSchema)) as Model<IPost>;
