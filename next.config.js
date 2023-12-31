/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',

  pageExtensions: ['page.tsx', 'api.ts'],
  images: {
    domains: [
      'sch.sgp1.cdn.digitaloceanspaces.com',
      'res.cloudinary.com',
      'drive.google.com',
    ],
  },

  // rewrites login to /auth/login & /register  to /auth/register
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
        permanent: false,
      },
      {
        source: '/register',
        destination: '/auth/register',
        permanent: false,
      },
      {
        source: '/dashboard/event/bst/pendaftaran-bootcamp',
        destination: '/dashboard/event/bst',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
