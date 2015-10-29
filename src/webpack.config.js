var CleanCSS = require('less-plugin-clean-css');
var AutoPrefix = require('less-plugin-autoprefix');

module.exports = {
  entry: {
    kudos: './kudos'
  }
  ,watch: false
  ,context: __dirname
  ,output: {
    filename: '[name].js'
    ,library: 'kudos'
    ,libraryTarget: 'umd'
  }
  ,resolve: {
    modulesDirectories: ['node_modules']
  }
  ,module: {
  }
  ,lessLoader: {
    lessPlugins: [
      new CleanCSS({advanced: true})
      ,new AutoPrefix()
    ]
  }
}
