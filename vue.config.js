module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#ffc633",
          "link-color": "#ffc633",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    disableHostCheck: true
    // proxy: "http://localhost:8083"
  }
};
