/** @type {import('next').NextConfig} */
const nextConfig = {
    output : "standalone",
    images: {
        domains: ['staging.agno-api.agnesmere-sarl.com'], // Ajoutez le domaine de votre image
    },
};

export default nextConfig;
