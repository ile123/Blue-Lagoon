/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains: ['s3.amazonaws.com', 'cdnb.lystit.com', 'surf50south.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "surf50south.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
