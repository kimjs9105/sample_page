/**
 * Created by N_01 on 2017-07-18.
 */

/** ==============================
 * gulp 플러그인 호출 *
 * ============================== */

var gulp = require("gulp"),
    sass = require("gulp-sass");

/** ==============================
 * 경로들을 담을 객체 생성 *
 * ============================== */

var src = './src';
var dist = './dist/css';
var scss = src + '/scss/**/*.scss';

/** ==============================
 * SCSS : SCSS Config(환경설정) *
 * ============================== */

var scssOptions = {
    /** * outputStyle (Type : String , Default : nested)
     * * CSS의 컴파일 결과 코드스타일 지정
     * * Values : nested, expanded, compact, compressed
     * */
    outputStyle : "expanded",

    /** * indentType (>= v3.0.0 , Type : String , Default : space)
     * * 컴파일 된 CSS의 "들여쓰기" 의 타입 * Values : space , tab
     * */
    indentType : "tab",

    /** * indentWidth (>= v3.0.0, Type : Integer , Default : 2)
     * * 컴파일 된 CSS의 "들여쓰기" 의 갯수
     * */
    indentWidth : 1, // outputStyle 이 nested, expanded 인 경우에 사용

    /** * precision (Type : Integer , Default : 5)
     * * 컴파일 된 CSS 의 소수점 자리수.
     * */
    precision: 6,

    /** * sourceComments (Type : Boolean , Default : false)
     * * 컴파일 된 CSS 에 원본소스의 위치와 줄수 주석표시.
     * */
    sourceComments: false
};

/** ==============================
 * SCSS : SCSS Compile(파일 변환) / watch(실시간 감지) *
 * ============================== */

gulp.task('test',function(){
    console.log('gulp-test-start');
});

gulp.task('sass',function(){
    return gulp.src(scss)
        .pipe(sass(scssOptions).on("error",sass.logError))
        .pipe(gulp.dest(dist))
});

gulp.task('sassWatch',function(){
    gulp.watch(scss,[sass])
});


gulp.task('default',["sass","sassWatch"]);

