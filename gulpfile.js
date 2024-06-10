"use strict";

//https://github.com/mrDtech/GULP-Structure-2022

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
var sass = require("gulp-sass")(require("sass"));
const livereload = require("gulp-livereload");
const notify = require("gulp-notify");
var reload = browsersync.reload;

// CSS task
gulp.task("css", () => {
  return gulp
    .src("assets/css/style.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(plumber.stop())
    .pipe(gulp.dest("assets/build"))
    .pipe(
      notify({
        message: "main SCSS processed",
      })
    );
});


gulp.task(
  "default",
  gulp.series("css", () => {
    gulp.watch(["assets/css/**/*"], gulp.series("css"));
  })
);
