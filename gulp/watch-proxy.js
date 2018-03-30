let { browserSync } = require('gulp-tasks-preset');
let gulp = require('gulp');
let watch = require('gulp-watch');

gulp.task('proxy-mop-frontend', ['styles'], function () {
  browserSync.init({
    proxy: 'localhost:8080',
    // To use these styles in mop-frontend, use `THEME=giraffe LOCAL_CSS=/styles/main.css npm run dev`
    serveStatic: [{
        route: '/styles',
        dir: 'public/styles'
    }, {
      route: '/fonts',
      dir: 'public/fonts'
  }]
  }, () => { browserSync.initialized = true; });

  gulp.watch("src/styles/**/*.scss", ['styles']);
});