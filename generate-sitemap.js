import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import fetch from 'node-fetch';
import routes from './routes.json' assert { type: 'json' }; // Import routes
import { formatTitle } from './utils/helpers.js';

export const newsBlogs = [
    { id: 1, image: 'single-post-img.jpg', title: 'Use keywords strategically throughout the blog post.',content:"content", author:"teja",date:"03-07-2024",category:"uncategorized" },
    { id: 2, image: 'single-post-img1.jpg', title: 'What is SEO? An explanation for beginners',content:"content" , author:"teja",date:"03-07-2024",category:"Seo  "  },
    { id: 3, image: 'single-post-img2.jpg', title: 'What is SEO? An explanation for beginners' ,content:"content", author:"teja",date:"03-07-2024",category:"Seo"  },
    { id: 4, image: 'single-post-img.jpg', title: 'Use keywords strategically throughout the blog post.',content:"content" , author:"teja",date:"03-07-2024" ,category:"keywords strategically" },
    { id: 5, image: 'single-post-img.jpg', title: 'Use keywords strategically throughout the blog post.',content:"content", author:"teja",date:"03-07-2024",category:"uncategorized" },
    { id: 6, image: 'single-post-img1.jpg', title: 'What is SEO? An explanation for beginners',content:"content" , author:"teja",date:"03-07-2024",category:"Seo  "  },
    { id: 7, image: 'single-post-img2.jpg', title: 'What is SEO? An explanation for beginners' ,content:"content", author:"teja",date:"03-07-2024",category:"Seo"  },
    { id: 8, image: 'single-post-img.jpg', title: 'Use keywords strategically throughout the blog post.',content:"content" , author:"teja",date:"03-07-2024" ,category:"keywords strategically" },
  ];

async function fetchDynamicRoutes() {
    try {
    //   const res = await fetch({`${process.env.APP_URL}/posts`});
    //   if (!res.ok) {
    //     throw new Error(`HTTP error! Status: ${res.status}`);
    //   }
    //   const posts = await res.json();
      return newsBlogs.map(post => ({
        url: `/blog/${post.id}/${formatTitle(post.title)}`,
        changefreq: 'weekly',
        priority: 0.7,
      }));
    } catch (error) {
      console.error('Error fetching dynamic routes:', error.message);
      return [];
    }
  }
  

  async function generateSitemap() {
    const dynamicLinks = await fetchDynamicRoutes();
    const allLinks = [
      ...routes,
      ...dynamicLinks,
    ];
  
    const hostname = "https://main--reacttsxsitedesign.netlify.app/" ;
  
    const stream = new SitemapStream({ hostname });
    const writeStream = createWriteStream('./public/sitemap.xml');
  
    await new Promise((resolve, reject) => {
      stream.pipe(writeStream)
        .on('error', reject)
        .on('end', resolve);
  
      allLinks.forEach(link => stream.write(link));
      stream.end();
    });
  
    console.log('Sitemap created successfully!');
  }

generateSitemap();
