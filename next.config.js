const withPlugins = require('next-compose-plugins');

// BASE_PATH and ASSET_PREFIX: set in CI for project sites (e.g. username.github.io/repo-name).
// Leave unset for user site (username.github.io) or local dev.
const basePath = process.env.BASE_PATH || '';
const assetPrefix = process.env.ASSET_PREFIX || '';

const nextConfig = {
  basePath,
  assetPrefix: assetPrefix || undefined,
  images: {
    domains: ['pbs.twimg.com', 'images.unsplash.com', 'placehold.co'],
    unoptimized: true,
  },
  output: 'export',
};
module.exports = withPlugins([], nextConfig);
