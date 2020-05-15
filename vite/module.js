const { resolve } = require('path')

console.log('vite module!')
module.exports = function (moduleOptions) {
  const options = {
    ...this.options['vite'],
    ...moduleOptions
  }

  // this.addPlugin({
  //   ssr: false,
  //   src: resolve(__dirname, 'plugin.js'),
  //   fileName: 'nuxt-vite.js',
  //   options
  // })
}

module.exports.meta = require('../package.json')
