const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssNesting = require('postcss-nesting')
const purgecssConfig = require('./purgecss.config')

const postcssPlugins = [
  tailwind(),
  autoprefixer(),
  postcssNesting()
]


if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss(purgecssConfig));

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: true } ]
          ]
        },
        // add this refs section so the BlogPosts are linked with the generated Tags pages
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      }
    }
  ],
  templates: {
    BlogPost: '/blog/:slug',
    // add the tags template
    Tag: '/tag/:id/',
  },
  css: {
      loaderOptions: {
          postcss: {
              plugins: postcssPlugins,
          },
      },
  },
}