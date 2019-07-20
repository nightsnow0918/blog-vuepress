module.exports = {
  title: 'Snow\'s blog',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' },
      { text: 'Works', link: '' },
    ],
    sidebar: [
      '/posts/',
      // '/page-a',
      // ['/page-b', 'Explicit link text']
    ]
  }
}
