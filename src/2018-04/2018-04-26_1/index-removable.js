var postcss = require('postcss');

var css = postcss([
    require('postcss-cssnext')({
        browsers: 'chrome >= 42, safari >= 8',
        features: {
            autoprefixer: { remove: false }
        }
    })
]).process(`
.foo {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
}`).css;

console.log(css);