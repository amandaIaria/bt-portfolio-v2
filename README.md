# Webpack-boilerplate
## A boilerplate for Babel, SCSS, Webpack

I created this, for work and personal projects. This isn't for any actual framework, but you might be able to set up REACTJS

__This repo includes__: 
  -  webpack 
      +  Create production ready projects
      +  Minificaiton and catcation
  -  SCSS
  -  wepack-dev-server
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
  -  Typescript is sort of set up, but more work and testing will have to be done.
  -  SCSS Unit testing
  -  Allow REACT to work with this
  -  See what happens with Angular


__Problems__
  -  HtmlWebpackPlugin.options does not work with the HTML loader. I've tried suggestions from what I could find and they didn't work.



## Helpful scripts
npm run ...

  -  "build":              "rm -rf ./production/ && webpack --mode production --config ./webpack/webpack.production.config.js",
  -  "build-check":        "rm -rf ./production/ && npm run check-types && webpack --mode production --config ./webpack/webpack.production.config.js",
  -  "dev":                "webpack-dev-server --mode development --config ./webpack/webpack.dev.config.js",
  -  "test-watch":         "webpack --mode development -w --progress --colors --config ./webpack/webpack.test.config.js",
  -  "test-build":         "npm run delete-tests && webpack  --mode production --progress --colors --config ./webpack/webpack.test.config.js",
  -  "lint-style":         "sass-lint -c .sass-lint.yml 'src/**/*.scss' -v -q",
  -  "test-and-lint":      "npm run lint-style && npm run test-build",
  -  "delete-tests":       "rm -rf ./tests/compiled/",
  -  "check-types":        "tsc",
