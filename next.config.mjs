/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/pal2sim_website' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/pal2sim_website/' : '',
  }
  
  export default nextConfig