# MoveOn Style

## Live version

This repository contains CSS and the needed fonts/images/etc.
It also contains a styleguide (and implicitly visual tests) to help build HTML that conforms to
MoveOn's style and design.

The two largest sources that use the live version of this CSS are
  [front.moveon.org](https://front.moveon.org) (WordPress) and [act.moveon.org](https://act.moveon.org) (ActionKit).

Visit [https://static.moveon.org/giraffe/index.html](https://static.moveon.org/giraffe/index.html) for the
  live styleguide with details of how to reference and build out other pages.

## Development

For development please read **CONTRIBUTING.md**.

### Deployment

Deploy CSS, JS, images and fonts to AWS S3 (for MoveOn devs)

Updating `main` branch and pushing to github with ENV=production (in .env) triggers AWS S3 autodeploy via Travis. Minified assets are copied from public/fonts, public/images, public/scripts and public/styles into the `deploy` directory and then pushed to https://static.moveon.org/giraffe/. See `.travis.yml` for details.

To generate a new encrypted secret_access_key, install the travis command line tool https://github.com/travis-ci/travis.rb#installation and then run the `travis encrypt` command in https://docs.travis-ci.com/user/deployment/s3/ using the credentials for an aws user with write access to the proper s3 bucket. Be sure to lint your updated config with `travis lint .travis.yml`!

### Uglify and minify assets

Setting ENV=production in .env ensures that assets are minified in gulp tasks that run before deployment. To uglify, set ENV=LOCAL before running `gulp` or `gulp watch`.

## History

* This repository was first created by [RedPeak in 2018](https://www.facebook.com/RedPeak/posts/1629588547110114)
  as part of a logo and brand redesign. Besides providing initial CSS and media, they 
* After the assets were provided and rebrand implementation started, MoveOn hired its first (amazing) designer.
  This was unfortunate ordering, since an in-house designer can generally be much more useful when brought on
  *during* a redesign rather than after.
* We called this repository "giraffe" to avoid references to 'redesign' or 'new design' which immediately goes out
  of date and gets confusing exactly when work is being done.
* In-practice over time, several 'paper cuts' in the design evolved to work called the "lost-pages redesign"
  which will now be called "giraffe v3" (version 2 was the initial redpeak implementation, version 1 was pre-giraffe 1990s-style MoveOn design).

## External documentation

[MoveOn's custom WordPress theme](https://github.com/MoveOnOrg/front-wordpress) implements giraffe and has [documentation on how to manually configure key content on a site running the theme](https://github.com/MoveOnOrg/front-wordpress/blob/main-giraffe/wp-content/themes/moveon2018/CONTENT-MANAGEMENT.md).