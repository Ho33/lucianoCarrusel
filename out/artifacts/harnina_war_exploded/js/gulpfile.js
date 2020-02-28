const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require("gulp-concat");

//gulp.task('default', 'view','ajax');
//function(){
// gulp.watch('./view/*.js',gulp.series('view'));
// gulp.watch('./ajax/*.js',gulp.series('ajax'));
//});

gulp.task('cpDDBB', ()=>
    gulp.src(['store.js','./indexedDB/*.js'])
        .pipe(concat('f1indexDB.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
);
gulp.task('examen', ()=>
    gulp.src(['./examen/*.js'])
        .pipe(concat('f0examen.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
);
gulp.task('template', ()=>
    gulp.src('./template/*.js')
        .pipe(concat('f2template.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
);

gulp.task('util', ()=>
    gulp.src('./util/*.js')
        .pipe(concat('f3util.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
);
gulp.task('ajax', ()=>
    gulp.src('./ajax/*.js')
        .pipe(concat('f4ajax.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
);


gulp.task('factory', ()=>
    gulp.src(['./factory/factoryFrame/*.js',
        './factory/factoryControl/*.js',
        './factory/factoryTag/*.js',
        './factory/factoryMainContainers/*.js','' +
        './factory/factoryPage/*.js'])
        .pipe(concat('f5factory.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
);

gulp.task('view', ()=>
    gulp.src('./view/*.js')
        .pipe(concat('f6view.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
);

gulp.task('indexController', ()=>
    gulp.src('./controller/indexController.js')
        .pipe(concat('f7clientController.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
);

gulp.task('clientController', ()=>
    gulp.src('./controller/clientController.js')
        .pipe(concat('f7indexController.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
);

gulp.task('jsCss', ()=>
    gulp.src('./jsCss/dado2020.js')
        .pipe(concat('f8jsCss.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
);

gulp.task('todoIndex', ()=>
    gulp.src(['./dest/*.js','!./dest/f7indexController.js'])
        .pipe(concat('indexApp.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./global'))
);
gulp.task('todoClient', ()=>
    gulp.src(['./dest/*.js','!./dest/f7clientController.js'])
        .pipe(concat('clientApp.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./global'))
);

gulp.task('index', gulp.series('cpDDBB','template','examen','util', 'ajax','factory','view','indexController', 'jsCss','todoIndex'))
gulp.task('client', gulp.series('cpDDBB','template','examen','util', 'ajax','factory','view','clientController', 'jsCss','todoClient'))
gulp.task('watch', function () {
    gulp.watch(['./**/*.js','!./global/*js', '!./dest/*.js'], gulp.series('default'));
});
gulp.task('default', gulp.series('index','client'));
//gulp.task('default', gulp.series(gulp.parallel('sass', 'watch', 'server')))
