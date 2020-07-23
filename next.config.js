const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
})({
  // Copied from https://github.com/tailwindlabs/blog.tailwindcss.com/blob/master/next.config.js
  webpack: (config, options) => {
    if (!options.dev && options.isServer) {
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
