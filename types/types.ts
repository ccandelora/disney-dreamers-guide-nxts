export type Post = {
  _id: string;
  title: string;
  description: string;
  body: string;
  slug: string;
  alt: string;
  category: string;
  categorySlug: string;
  fileName: string;
  photographer: string;
  photographerUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Params = {
  slug: string;
};

export type CategoryProps = {
    posts: Post[];
};
export type SocialProps = {
  post: Post;
};
