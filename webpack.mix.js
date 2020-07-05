const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/client.js', 'public/js/app.js')
   .js('resources/js/server.js', 'public/js');
   //.sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.common.js',
      '~': path.join(__dirname, './resources/js')
    }
  }
});
