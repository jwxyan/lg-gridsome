// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const JournalList = addCollection('JournalLists')
    const GraphList = addCollection('GraphLists')

    //journalList

    JournalList.addNode({
      id: '1',
      title: 'Gridsome with Forestry CMS',
      linkUrl: 'gridsome-forestry-cms',
      excerpt: '  Get up and running with Forestry CMS, a git-backed headless CMS with a slick editing interface.',
      author: 'Nichlas W. Andersen',
      date: '7. June 2019',
      time: '1 min read',
      article: ''
    })

    JournalList.addNode({
      id: '2',
      title: 'VueJS for your next project',
      linkUrl: 'use-gridsome-vuejs',
      excerpt: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.',
      author: 'Nichlas W. Andersen',
      date: '4. June 2019',
      time: '1 min read',
      article: ''
    })

    JournalList.addNode({
      id: '3',
      title: 'macOS development environment',
      linkUrl: 'macos-development-environment',
      excerpt: 'Get up and running with a fresh macOS Catalina install',
      author: 'Nichlas W. Andersen',
      date: '18. May 2019',
      time: '1 min read',
      article: ''
    })

    JournalList.addNode({
      id: '4',
      title: 'About Typography',
      linkUrl: 'a-journal-entry',
      excerpt: 'Font face, vertical rythm, readability, this long fake text should flow.',
      author: 'Nichlas W. Andersen',
      date: '17. May 2019',
      time: '2 min read',
      article: ''
    })

    //GraphList

    GraphList.addNode({
      id: '1',
      title: 'Banana',
      categories: ['photography', 'pink'],
      year: '2019',
      linkUrl: 'chelsea-landmark',
      image: '/img/mike-dorner-173502-unsplash.jpg',
      article: ''
    })

    GraphList.addNode({
      id: '2',
      title: 'Pineapple',
      categories: ['photography', 'blue'],
      year: '2019',
      linkUrl: 'sunk',
      image: '/img/cody-davis-253925-unsplash.jpg',
      article: ''
    })

    GraphList.addNode({
      id: '3',
      title: 'Ice Cream',
      categories: ['photography', 'yellow'],
      year: '2019',
      linkUrl: '3d-graff',
      image: '/img/ian-dooley-281897-unsplash.jpg',
      article: ''
    })

    GraphList.addNode({
      id: '4',
      title: 'Porta400',
      categories: ['photography', 'yellow'],
      year: '2019',
      linkUrl: 'ios-concept',
      image: '/img/markus-spiske-516263-unsplash.jpg',
      article: ''
    })

  })

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      allGraphLists {
        edges {
          node {
            linkUrl
          }
        }
      }
    }`)

    data.allGraphLists.edges.forEach(({ node }) => {
      createPage({
        path: `/projects/${node.linkUrl}`,
        component: './src/templates/projectDetail.vue',
        context: {
          type: node.linkUrl
        }
      })
    })

    const { data: data2 } = await graphql(`{
      allJournalLists {
        edges {
          node {
            linkUrl
          }
        }
      }
    }`)

    data2.allJournalLists.edges.forEach(({ node }) => {
      createPage({
        path: `/journal/${node.linkUrl}`,
        component: './src/templates/journalDetail.vue',
        context: {
          type: node.linkUrl
        }
      })
    })

  })

}
