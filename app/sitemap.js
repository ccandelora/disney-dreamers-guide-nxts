import { MetadataRoute } from 'next'
import { Post } from "../models/Post";
import { connectToDatabase } from "../libs/mongodb";

connectToDatabase();

const sitemapDomain = 'https://www.disneydreamersguide.com';

async function getPost() {
  const posts = await Post.find();
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!posts) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return posts.reverse()
  }

  async function getCategory() {
    const posts = await Post.aggregate(
      [
          { "$group": { "_id": {category: "$category", "categorySlug": "$categorySlug" }}},
      ] 
  );
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.
     
      if (!posts) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
      return posts.reverse()
    }
  export default async function sitemap() {
    const postsData = await getPost('/api/post')
    const categoriesData = await getCategory('/api/category')
    const posts = postsData.map(({ slug, updatedAt }) => (
        {
        url: `${sitemapDomain}/post/${slug}`,
        lastModified: updatedAt,
      }));
     
      const routes = ["", "/magic-kingdom-wait-times", "/epcot-wait-times", "/hollywood-studios-wait-times", "/animal-kingdom-wait-times",].map((route) => ({
        url: `${sitemapDomain}${route}`,
        lastModified: new Date().toISOString(),
      }));

      const categories = categoriesData.map(({ _id }) => (
        {
        url: `${sitemapDomain}/category/${_id.categorySlug}`,
        lastModified: new Date().toISOString(),
      }));

     
      return [...routes, ...categories, ...posts];
  }