module.exports = {
  entry : {
    test:'./app',
  },
  watch:false,
  context:__dirname,
  output : {
    filename:'[name].js'
  },
  resolve:{
    modulesDirectories: ['../lib'],
  },
  module: {
  }
};
