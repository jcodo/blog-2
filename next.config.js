const withMdxEnhanced = require('next-mdx-enhanced')
const withOptimizedImages = require('next-optimized-images')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
})(withOptimizedImages())
