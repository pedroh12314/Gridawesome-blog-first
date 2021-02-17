// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ getCollection }) => {
    // load the "BlogPost" collection
    const posts = getCollection('BlogPost')

    // go over every article and either remove it or prefix with "RASCUNHO: ", depending on NODE_ENV
    const now = new Date()
    posts.data().forEach(node => {
      if (new Date(node.date) > now) {
        if (process.env.NODE_ENV === 'production') {
          posts.removeNode(node.id) // must remove by node id
        } else {
          node.title = `RASCUNHO: ${node.title}`
        }
      }
    })
  })

  api.createPages(({ createPage }) => { })
}
