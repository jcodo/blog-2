const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
})({
  // Copied from https://github.com/tailwindlabs/blog.tailwindcss.com/blob/master/next.config.js
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    if (!dev && isServer) {
      const originalEntry = config.entry

      config.entry = async () => {
        const entries = { ...(await originalEntry()) }
        entries['./scripts/build-rss.js'] = './scripts/build-rss.ts'
        return entries
      }
    }

    return config
  },
})
