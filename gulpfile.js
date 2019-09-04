const { watch, src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');


function css() {
  return src('src/sass/style.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('css'))
}

function js() {
  return src('src/js/main.js', { sourcemaps: true })
    .pipe(dest('js', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
exports.dev = function () {
  watch('src/sass/**/*.scss', css);
  watch('src/js/main.js', js);
}
