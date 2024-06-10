const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");

// Concat and minify CSS files
gulp.task("build-css", () => {
  return gulp
    .src("assets/css/*.css", "!assets/css/responsive.css")
    .pipe(concat("style.min.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest("assets/build"));
});

gulp.task("watch", function () {
  gulp.watch("assets/css/**/*.css", gulp.series("build-css"));
});

gulp.task("default", gulp.series("watch"));
