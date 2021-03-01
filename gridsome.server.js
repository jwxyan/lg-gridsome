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
      linkUrl: '/gridsome-forestry-cms/'
    })

    JournalList.addNode({
      id: '2',
      title: 'VueJS for your next project',
      linkUrl: '/use-gridsome-vuejs/'
    })

    JournalList.addNode({
      id: '3',
      title: 'macOS development environment',
      linkUrl: '/macos-development-environment/'
    })

    JournalList.addNode({
      id: '4',
      title: 'About Typography',
      linkUrl: '/a-journal-entry/'
    })

    //GraphList

    GraphList.addNode({
      id: '1',
      title: 'Banana',
      color: 'pink',
      linkUrl: '/chelsea-landmark/',
      image: '/img/mike-dorner-173502-unsplash.jpg'
    })

    GraphList.addNode({
      id: '2',
      title: 'Pineapple',
      color: 'blue',
      linkUrl: '/sunk/',
      image: '/img/cody-davis-253925-unsplash.jpg'
    })

    GraphList.addNode({
      id: '3',
      title: 'Ice Cream',
      color: 'yellow',
      linkUrl: '/3d-graff/',
      image: '/img/ian-dooley-281897-unsplash.jpg'
    })

    GraphList.addNode({
      id: '4',
      title: 'Porta400',
      color: 'yellow',
      linkUrl: '/ios-concept/',
      image: '/img/markus-spiske-516263-unsplash.jpg'
    })

  })


  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
