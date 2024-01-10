/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.kinokompendium.de',
        
            
          },
        ],
      },
}

module.exports = nextConfig
