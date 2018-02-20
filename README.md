# MoveOn

For development please read **CONTRIBUTING.md**.

## Deploy CSS, JS, images and fonts to AWS S3 (for MoveOn devs)

Updating `main` branch and pushing to github with ENV=production (in .env) triggers AWS S3 autodeploy via Travis. Minified assets are copied from public/fonts, public/images, public/scripts and public/styles into the `deploy` directory and then pushed to //s3.amazonaws.com/s3.moveon.org/giraffe/. See `.travis.yml` for details.

## Uglify and minify assets

Setting ENV=production in .env ensures that assets are minified in gulp tasks that run before deployment. To uglify, set ENV=LOCAL before running `gulp` or `gulp watch`.