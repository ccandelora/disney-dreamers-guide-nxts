const domain = 'https://www.disneydreamersguide.com';

export async function getStaticParams() {
  const postsTemp = await fetch('/api/post').then((postsTemp) => postsTemp.json())
  const categoriesTemp = await fetch('/api/category').then((categoriesTemp) => categoriesTemp.json())
  const routesTemp = ["", "/magic-kingdom-wait-times", "/epcot-wait-times", "/hollywood-studios-wait-times", "/animal-kingdom-wait-times",]
  const routes =  routesTemp.map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date().toISOString(),
  }));
  const categories = categoriesTemp.map(({ _id }) => (
    {
    url: `${domain}/category/${_id.categorySlug}`,
    lastModified: new Date().toISOString(),
  }));
  const posts = postsTemp.map(({ slug, updatedAt }) => (
    {
    url: `${domain}/post/${slug}`,
    lastModified: updatedAt,
  }));
  return [...routes, ...categories, ...posts];
}

async function getPost() {
    const path = '/api/post'
    const domain = process.env.API_DOMAIN
    const url = domain + path
    const res = await fetch(url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  async function getCategory() {
    const path = '/api/category'
    const domain = process.env.API_DOMAIN
    const url = domain + path
    const res = await fetch(url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  export default async function sitemap() {
    const postsData = await getPost('/api/post')
    const categoriesData = await getCategory('/api/category')
    const posts = postsData.map(({ slug, updatedAt }) => (
        {
        url: `${domain}/post/${slug}`,
        lastModified: updatedAt,
      }));
     
      const routes = ["", "/magic-kingdom-wait-times", "/epcot-wait-times", "/hollywood-studios-wait-times", "/animal-kingdom-wait-times",].map((route) => ({
        url: `${domain}${route}`,
        lastModified: new Date().toISOString(),
      }));

      const categories = categoriesData.map(({ _id }) => (
        {
        url: `${domain}/category/${_id.categorySlug}`,
        lastModified: new Date().toISOString(),
      }));

     
      return [...routes, ...categories, ...posts];
  }