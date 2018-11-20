/* eslint-disable */
String.prototype.replaceAll = function (str, replacement) {
  return this.replace(new RegExp(str, 'gm'), replacement)
}

module.exports = require('./loader')
module.exports.plugin = require('./MiniPlugin')
module.exports.transformPlugin = require('./Transform')

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error)
})
