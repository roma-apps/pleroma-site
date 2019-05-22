'use strict';

// Load Plugins
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat-util');
const cssnano = require('cssnano');
const gulp = require('gulp');
const htmlbeautify = require('gulp-jsbeautifier');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass');

// Critical CSS
const critical = () => {
  const plugins = [autoprefixer({browsers: ['> 5%']}), cssnano()];
  return gulp
      .src('assets/css/critical.scss')
      .pipe(plumber())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(plugins))
      // wrap with style tags
      .pipe(concat.header(`<style nonce="generateHash">`))
      .pipe(concat.footer('</style>'))
      // convert it to an include file
      .pipe(
        rename({
          basename: 'critical',
          extname: '.html',
        })
      )
      // insert file
      .pipe(gulp.dest('layouts/partials'))
}

/*
HTML fixHugo:
- Removed HTML comments.
- Removed extra <p> tags.
*/
const fixHugo = () => {
  return gulp
  .src(['public/**/*.html'])
  .pipe(plumber())
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(replace(/<p><(p|a|div|section|h1|h2|h3|h4|ul|li|img|figure|picture)(.*?)>/g, '<$1$2>'))
  .pipe(replace(/<\/(p|a|div|section|h1|h2|h3|h4|ul|li|img|figure|picture)(.*?)><\/p>/g, '</$1$2>'))
  .pipe(replace(/<p><\/p>/g, ''))
  .pipe(htmlbeautify({
    indent_char: ' ',
    indent_size: 2
  }))
  .pipe(gulp.dest('public'));
}

// Watch asset folder for changes
const watchFiles = () => {
  gulp.watch('assets/css/common.scss', critical);
  gulp.watch('assets/css/critical.scss', critical);
  gulp.watch('assets/css/extends.scss', critical);
  gulp.watch('assets/css/fonts.scss', critical);
  gulp.watch('assets/css/mixins.scss', critical);
  gulp.watch('assets/css/reset.scss', critical);
  gulp.watch('assets/css/variables.scss', critical);
}

// Tasks
gulp.task('critical', critical);
gulp.task('fixHugo', fixHugo);

// Run Watch as default
gulp.task('watch', watchFiles);

// Run Watch as default
gulp.task('watch', watchFiles);

// Build
gulp.task('build', critical);
