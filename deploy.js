var ghpages = require('gh-pages')

const callback = (err) => {
  console.log(err)
}

ghpages.publish('mob', {
  branch: 'master',
  repo: 'https://github.com/dadviegas/dadviegas.github.io'
}, callback)
