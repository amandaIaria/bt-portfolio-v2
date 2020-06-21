# Portfolio
This uses the WP Boilerplate with Express. 

## A work in progress portfolio. V0.2

I thought I would take the time to update it, but I wanted a more Agile approach. So this will be updated in chuncks. The first chunk being the Header, About, and setup.


# Webpack-boilerplate
## A boilerplate for Babel, SCSS, Webpack

I created this, for work and personal projects. This isn't for any actual framework, but you might be able to set up REACTJS

__This repo includes__: 
  -  webpack 
      +  Create production ready projects
      +  Minificaiton and catcation
  -  SCSS
  -  webpack-dev-server
      +  allows you to have a dev server running, and will reload on changes to the HTML, SCSS, and JS
  -  Babel
  -  Mocha and Chia
      +  Unit testing
  -  Linting
      +  stylelint
      +  eslint
      +  HTML linting
  -  Loaders
      +  HTML allows to have module HTML
      +  SVG
      +  File
      +  Babel (nautrally)
      +  Postcss/scss/css
  -  aliases
      +  '@components': HTML components
      +  '@style': Style directory
      +  '@fonts': Fonts directory
      +  '@img': Images directory
      +  '@js': Scripts/Js directory
      +  '@':  Overall src directory


__Future__
  -  Typescript is sort of set up, but more work and testing will have to be done
  -  SCSS Unit testing
  -  Allow REACT to work with this
  -  See what happens with Angular
  -  Hope that I can move .babelrc to the .config folder
  -  Be able to create a npm module with this
  -  Add routing that doesn't involve a framework (this is more of a learning exercise on how routing in JS works, so it won't be as amazing as angular or react-router)
  -  See how jenkins can be integrated with ... It might just be adding a Jenkins file and making sure whatever server has Jenkins on it 🤷


__Problems__
  -  HtmlWebpackPlugin.options does not work with the HTML loader. I've tried suggestions from what I could find and they didn't work.
  -  Linting rules need some work

__Tips__
  -  When importing node_modules remember to add ~ to the beginning of the package. For example, ~packagename/

## Helpful scripts
npm run ...

  -  build
        +  Regular production build
        +   "rm -rf ./production/ && webpack --mode production --config ./.configs/webpack/webpack.production.config.js",
  -  build-check
        +  Bulds and checks the typescript
        +  "rm -rf ./production/ && npm run check-types && webpack --mode production --config ./.configs/webpack/webpack.production.config.js",
  -  dev
        +  Your watch while you make
        +  "webpack-dev-server --mode development --config ./.configs/webpack/webpack.dev.config.js",
  -  test-watch  
        +  Watch while you make your tests
        +  possible needs some work
        +  "webpack --mode development -w --progress --colors --config ./.configs/webpack/webpack.test.config.js",
  -  test-build   
        +  builds your tests and prefoms
        +  "npm run delete-tests && webpack  --mode production --progress --colors --config ./.configs/webpack/webpack.test.config.js",
  -  lint-style
        +  Check your styles
        +  should be in the watch command too.
        +  "sass-lint -c .sass-lint.yml 'src/**/*.scss' -v -q",
  -  test-and-lint
        +  Builds tests and lints your styles
        +  "npm run lint-style && npm run test-build",
  -  test-type-and-lint
        + . Need to make command
  -  delete-tests
        +  Deletes tests
        + "rm -rf ./tests/compiled/",
  -  check-types        
        +  check typescripts
        +  "tsc",
