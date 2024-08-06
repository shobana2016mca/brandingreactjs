import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import fetch from 'node-fetch';
import routes from './routes.json' assert { type: 'json' }; // Import routes
import { formatTitle } from './utils/helpers.js';
import newsBlogs from './Constants/index.js'

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
