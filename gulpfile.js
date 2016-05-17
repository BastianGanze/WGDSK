var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    
    paths = {src: "src/", build:"build/"},
    version = "0.0.1";

gulp.task('transpile', function() {
    return gulp.src(paths.src+"**/*.ts")
        .pipe(ts({
            noImplicitAny: true,
            out: 'build-'+version+'.js'
        }))
        .pipe(gulp.dest(paths.build));
});

gulp.task('default', ['transpile']);