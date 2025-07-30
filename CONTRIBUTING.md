# Contributing

## Local Setup

- Clone this repository.
- [Install nvm if you haven't previously used it](https://github.com/nvm-sh/nvm#installing-and-updating)
- Install/set NodeJS version: `nvm install`
- Install node dependencies: `npm ci`
- Edit .env to set `ENV=LOCAL`
- Run `npm run watch` to boot up local development server and build tools. Normally this would boot up `localhost:3000`, or whichever port is available.
- Get some coffee. Shake up. Start coding :).

## Build

Run `npm run compile` to compile all the source files into the `public` folder.

Run `npm run zip` to create a compressed zip file. This is saved as `moveon.zip` in the `public` folder.


## Files and Directories

All the editable files are located inside the `src` folder.  

The local server files are located inside the `public` folder.


### Templates

Templates are **twig** files compiled into html through `npx gulp pages`. They are located in `src/templates`.  

For Twig templating guides, please refer to their [site](https://twig.symfony.com/doc/2.x/templates.html).

### Stylesheets

SASS-compiled stylesheets are located in `src/styles`. 

### Scripts

Scripts are located in `src/scripts`. Please apply the [ES6 standards](http://es6-features.org/).

### Images

Raw images are located in `src/images`. They are optimized on build.

### Fonts

Fonts are located in `src/fonts`.
