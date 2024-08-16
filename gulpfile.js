
//this is the website:https://gulpjs.com/docs/en/api/dest

// Flexible
// Using code over configuration, utilize all of JavaScript to create your gulpfile—where tasks can be written using your own code or chained single purpose plugins.

// Composable sample
// Composable
// Write individual, focused tasks and compose them into larger operations, providing you with speed and accuracy while reducing repetition.

// Efficient sample
// Efficient
// By using gulp streams, you can apply many transformations to your files while in memory before anything is written to the disk—significantly speeding up your build process.




//import a module from node modules
var gulp=require('gulp');
var concat =require('gulp-concat');
var prefix=require('gulp-autoprefixer'),
sass=require('gulp-sass'),
pug=require('gulp-pug'),
livereload=require('gulp-livereload')
;
// gulp.task('aya',function(){
//     console.log('gratz for your first task');
// });
gulp.task('elzero',function(){
    //any file end with html will be moved from source folder to distination folder
    // return gulp.src('project/*.html')
    return gulp.src(['project/index.html','project/about.html'])//you can put multiple objects
//     .pipe(elzeroMinfiy())
// .pipe(elzeroRename())
//we clear them as they still not created
//pipe is used to chain tasks
//.pipe(sass())//for compilation
.pipe(sass({outputStyle:'compressed'}))//this will make a compressed file
.pipe(prefix())//you can say last 2 versions as a parameter it will make a prefix based on the last two versions
.pipe(gulp.dest('dist'))//if the folder isn't found gulp will create it
.pipe(livereload());
});
//plugin concatenate is used to link strings or files together 

//css task
gulp.task('css',function(){
    return gulp.src('project/*.css')//move files wnd with css
    .pipe(concat('all.css'))//concat them to one file
    .pipe(gulp.dest('dist'))
});

//js task

gulp.task('scripts',function(){
    return gulp.src('project/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
})

//gulp prefixer put the attributes of css together
//you need to know the order of functions and which function will be done first

// gulp-sass is a plugin for Gulp that allows you to compile Sass files to CSS. Sass is a CSS preprocessor that allows you to use variables, nested rules, mixins, and more. By using gulp-sass, you can automate the process of converting
//  your Sass files to CSS files that can be used in a web application.


//html task
//gulp-pug
gulp.task('html',function(){
    require('./server');//turn on the server before
    return gulp.src('project/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'));
})
//local seerver to test your work
//code:npm i static-server --save
//make folder Server.js

///*********watch */

gulp.task('watch',function(){
    gulp.watch('',[]);//in the curely brackets you can put a collection of tasks
});

//watch task
gulp.task('watch',function(){
    require('./server');
    livereload.listen();//you need to listen to all pipes in tasks

    gulp.watch('project/index.pug',['html']);
    gulp.watch('project/css/**/*.scss',['css']);
    //any folder and any file inside make watch to the css task
});

//gulp-livereload

//npm i gulp-livereload --save-dev

//gulp-sourcemaps

//gulp-uglify