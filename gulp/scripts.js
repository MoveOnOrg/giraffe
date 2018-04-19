let { isDevelopment, isLocal, isStaging, isProduction, isWatching,
      projectRoot, browserSync } = require('gulp-tasks-preset');

let rollup = require('rollup');
let uglify = require('rollup-plugin-uglify');
let notifier = require('node-notifier');

let output = projectRoot('public/scripts/app.js');
let donateOutput = projectRoot('public/scripts/donate.js');
let actionkitOutput = projectRoot('public/scripts/giraffe-actionkit.js');
let frontOutput = projectRoot('public/scripts/front.js');

let isDev = isDevelopment || isLocal ? true : false;
let isProd = isStaging || isProduction ? true : false;

// An options object has to be passed to rollup when using gulp,
// but we'll stick to a separate config file for consitency
let rollupConfig = require(projectRoot('rollup.config.js'));

module.exports = {

  fn: async function () {

    try {

      const bundle = await rollup.rollup(rollupConfig({ entry: projectRoot('src/scripts/app.js') }));

      await bundle.write({
        file: output,
        format: 'iife',
        name: 'app_scripts',
        sourcemap: isDev ? true : false,
      });

      const donateBundle = await rollup.rollup(rollupConfig({ entry: projectRoot('src/scripts/donate.js') }));

      await donateBundle.write({
        file: donateOutput,
        format: 'iife',
        name: 'donate_scripts',
        sourcemap: isDev ? true : false,
      });
      
      const actionkitBundle = await rollup.rollup(rollupConfig({ entry: projectRoot('src/scripts/actionkit.js') }));

      await actionkitBundle.write({
        file: actionkitOutput,
        format: 'iife',
        name: 'actionkit_scripts',
        sourcemap: isDev ? true : false,
      });

      const frontBundle = await rollup.rollup(rollupConfig({ entry: projectRoot('src/scripts/front.js') }));

      await frontBundle.write({
        file: frontOutput,
        format: 'iife',
        name: 'front_scripts',
        sourcemap: isDev ? true : false,
      });

      if ( isWatching && browserSync.initialized ) browserSync.reload();
      notifier.notify({ 'title': 'Gulp', 'message': 'Scripts Task Finished!'});

    } catch (error) {
      let title = 'Bundle Error!';
      notifier.notify({ 'title': title, 'message': error.message });
      console.log(title.red);
      console.log(error.message);
      console.log(error.stack.gray);
    }

  },


  deps: isDev ? [ 'lint-scripts' ] : [],


  watchFiles: projectRoot('src/scripts/**/*.js'),


}
