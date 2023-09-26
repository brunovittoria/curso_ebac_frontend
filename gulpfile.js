const sass = require("gulp-sass")(require("sass"));
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function compilaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./build/styles"));
}

function comprimeJS() {
  return gulp
    .src("./source/script/script.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/script"));
}

function comprimeImagens() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/imagens"));
}


exports.default = function(){

    gulp.watch('./source/style/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));

    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));

    gulp.watch('./source/script/*.js', {ignoreInitial: false}, gulp.series(comprimeJS));

}
