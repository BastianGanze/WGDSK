var gulp = require('gulp'),
    browserify = require('browserify'),
    tsify = require('tsify'),
    source = require('vinyl-source-stream'),
    watchify = require('watchify'),
    paths = {src: "src/", build:"build/", tmp:"tmp/"},
    mainFile = "Start.ts",
    version = "0.0.1";

var srcCodeBundler = browserify({debug:true}).add(paths.src+mainFile).plugin(tsify),
    watchifyBundler = watchify(browserify({debug:true}).add(paths.src+mainFile).plugin(tsify));

function transpile(bundler){
    return function()
    { return bundler.bundle()
        .on('error', function(error){
            console.error(error.toString());
        })
        .pipe(source('build-'+version+'.js'))
        .pipe(gulp.dest(paths.build));
    }
}

gulp.task('transpile', transpile(srcCodeBundler));

gulp.task('watchify', transpile(watchifyBundler));

gulp.task('watch', ['transpile'], function() {
    gulp.watch(paths.src+'**/*.ts', ['watchify']);
});

gulp.task('default', ['transpile']);