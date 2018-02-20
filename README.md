# MoveOn

For development please read **CONTRIBUTING.md**.

## Deploy CSS, JS, images and fonts to AWS S3 (for MoveOn devs)

Updating `main` branch and pushing to github with ENV=production (in .env) triggers AWS S3 autodeploy via Travis. Minified assets are copied from public/fonts, public/images, public/scripts and public/styles into the `deploy` directory and then pushed to //s3.amazonaws.com/s3.moveon.org/giraffe/. See `.travis.yml` for details.

To generate a new encrypted secret_access_key, install the travis command line tool https://github.com/travis-ci/travis.rb#installation and then run the `travis encrypt` command in https://docs.travis-ci.com/user/deployment/s3/ using the credentials for an aws user with write access to the proper s3 bucket. Be sure to lint your updated config with `travis lint .travis.yml`.

## Uglify and minify assets

Setting ENV=production in .env ensures that assets are minified in gulp tasks that run before deployment. To uglify, set ENV=LOCAL before running `gulp` or `gulp watch`.