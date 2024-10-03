/** @type {import('next').NextConfig} */
import WithBundleAnalyzer from "@next/bundle-analyzer";
const withBundleAnalyzer = WithBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })

const nextConfig = withBundleAnalyzer({
    output : "standalone",
    images: {
        domains: ['staging.agno-api.agnesmere-sarl.com'], // Ajoutez le domaine de votre image
    },
})

/*
const nextConfig = {
   
};*/

export default nextConfig;
