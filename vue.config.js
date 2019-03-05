module.exports = {
  publicPath: 'EPL-Stats-Dashboard',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/variables.scss";
          @import "@/styles/mixins.scss";
        `
      }
    }
  }
};
