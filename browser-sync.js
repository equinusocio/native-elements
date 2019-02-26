module.exports = {
  files: [
    './elements/native-elements/dist/native-elements.css'
  ],
  server: {
    baseDir: './',
    serveStaticOptions: {
      extensions: ['html', 'css', 'js']
    }
  },
  startPath: "/demo/index.html",
  open: true,
  injectChanges: true,
  notify: true
};
