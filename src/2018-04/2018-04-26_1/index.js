var postcss = require('postcss');

var css = postcss([
    require('postcss-cssnext')({
        browsers: 'chrome >= 42, safari >= 8',
        features: {
            autoprefixer: { remove: true }
        }
    })
]).process(`
.foo {
  display: -webkit-box;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-box-align: stretch;
}`).css;

console.log(css);