/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    // dirs: ["pages", "utils", "components"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

module.exports = nextConfig;
