// const gulp = require("gulp");

// // Styles
// const sass = require("gulp-sass")(require("sass"));
// const csso = require("gulp-csso");
// const sourcemaps = require("gulp-sourcemaps");
// const autoprefixer = require("gulp-autoprefixer");

// // Utilities
// const browserSync = require("browser-sync").create();
// const rename = require("gulp-rename");
// const clean = require("gulp-clean");
// const imagemin = require("gulp-imagemin");

// // ---------------------------------------------------------
// // Variables
// const paths = {
//   sassSrc: "./src/sass/**/main.scss",
//   cssDist: "./dist/css",
//   HTMLsrc: "./src/**/*.html",
//   HTMLdist: "./dist",
//   imgSrc: "./src/img/*",
//   imgDist: "./dist/img",
//   clear: {
//     css: "./dist/css/*.css",
//     img: "./dist/img/*",
//   },
// };

// const cssFileName = "style";

// // ---------------------------------------------------------
// // TASKS

// function html() {
//   return gulp.src(paths.HTMLsrc).pipe(gulp.dest(paths.HTMLdist));
// }

// function cssDev() {
//   return gulp
//     .src(paths.sassSrc)
//     .pipe(sourcemaps.init())
//     .pipe(sass().on("error", sass.logError))
//     .pipe(autoprefixer())
//     .pipe(sourcemaps.write())
//     .pipe(rename(cssFileName + ".css"))
//     .pipe(gulp.dest(paths.cssDist))
//     .pipe(browserSync.stream());
// }

// function cssProd() {
//   return gulp
//     .src(paths.sassSrc)
//     .pipe(sourcemaps.init())
//     .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
//     .pipe(autoprefixer())
//     .pipe(csso())
//     .pipe(sourcemaps.write())
//     .pipe(rename(cssFileName + ".min.css"))
//     .pipe(gulp.dest(paths.cssDist));
// }

// function watchForChanges(cb) {
//   gulp.watch(paths.sassSrc, gulp.series(cssDev));
//   gulp.watch(paths.HTMLsrc, gulp.series(html));
//   gulp.watch(paths.imgSrc, gulp.series(imagemin));
//   gulp.watch("dist/**/*.html").on("change", browserSync.reload);
//   cb();
// }

// function clear(cb) {
//   gulp.src(paths.clear.css).pipe(clean());
//   gulp.src(paths.clear.img).pipe(clean());
//   cb();
// }

// const server = function (cb) {
//   browserSync.init({
//     server: {
//       baseDir: "./dist",
//     },
//     notify: false,
//     //host: "192.168.0.24",
//     //port: 3000,
//     open: true,
//     browser: "chrome",
//   });

//   cb();
// };

// function imageOpt() {
//   return gulp.src(paths.imgSrc).pipe(imagemin()).pipe(gulp.dest(paths.imgDist));
// }

// // ------------------------------------------------------

// exports.default = gulp.series(cssProd, imageOpt, html, server, watchForChanges);
// exports.clear = clear;

/////////////////////////////

const gulp = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
// JS
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
// Others
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");

const paths = {
  sass: "./src/sass/**/*.scss",
  css: "./dist/css",
  js: ["./src/js/**/*.js", "!./src/js/modules/**/*.js"],
  jsDist: "./dist/js",
  img: "./src/img/**/*",
  imgDist: "./dist/img",
  html: ["./src/**/*.html", "!./src/html/**/*.html"],
  dist: "./dist",
};

const cssFileName = "style";

function html() {
  return gulp.src(paths.html[0]).pipe(gulp.dest(paths.dist));
}

function buildStyles(done) {
  gulp
    .src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(rename(cssFileName + ".min.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css));
  done();
}

function javascript(done) {
  gulp
    .src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.jsDist));
  done();
}

function convertImg(done) {
  gulp.src(paths.img).pipe(imagemin()).pipe(gulp.dest(paths.imgDist));
  done();
}

function startBrowserSync(done) {
  browserSync.init({
    server: {
      baseDir: paths.dist,
    },
    open: true,
    browser: "chrome",
  });
  done();
}

function cleanStuff(done) {
  gulp
    .src(paths.dist + "/*", {
      read: false,
      allowEmpty: true,
    })
    .pipe(clean());
  done();
}

function watchForChanges(done) {
  gulp.watch(paths.html[0], html).on("change", browserSync.reload);
  gulp.watch(paths.sass, buildStyles).on("change", browserSync.reload);
  gulp.watch(paths.js, javascript).on("change", browserSync.reload);
  gulp.watch(paths.img, convertImg).on("change", browserSync.reload);
  done();
}

const build = gulp.parallel(html, buildStyles, javascript, convertImg);

exports.default = gulp.series(build, startBrowserSync, watchForChanges);

exports.clean = cleanStuff;
exports.build = build;
exports.server = gulp.series(startBrowserSync, watchForChanges);
