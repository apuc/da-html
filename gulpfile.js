var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync').create(), // Подключаем Browser Sync
    concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache = require('gulp-cache'), // Подключаем библиотеку кеширования
    extender = require('gulp-html-extend'),//Подключаем бибилиотеку для склейки html-файлов
    rimraf = require('rimraf'),//Очищает указанные исходники
    plumber = require('gulp-plumber'),//Подключаем плагин, который не останавливает задачи от остановки во время их выполнения при возникновении ошибки
    postcss = require('gulp-postcss'),//Блиотека-парсер стилей для работы с postcss-плагинами
    autoprefixer = require('autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    cssnano = require('cssnano'),//postcss-плагин, для минификации CSS кода, идущего на продакшен.
    short = require('postcss-short'),
    stylefmt = require('stylefmt'),
    assets = require('postcss-assets'),
    sorting = require('postcss-sorting'),
    fontmagic = require('postcss-font-magician'),
    fixes = require('postcss-fixes'),
    reporter = require('postcss-reporter'),
    syntax_scss = require('postcss-scss'),
    stylelint = require('stylelint');

gulp.task('css-libs', function () { // Создаем таск css-libs
    var processors = [
        cssnano
    ];
    return gulp.src([
        'app/libs/**/*.css'
    ]) // Берем источник
        .pipe(postcss(processors))// сжымаем
        .pipe(concat('libs.min.css'))// объеденяем в файл
        .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.stream({})); // Обновляем CSS на странице при изменении
});


gulp.task('sass', function () { // Создаем таск Sass
    var processors = [// подключаем постпроцессоры в массиве
        assets,
        short,
        fontmagic,
        fixes,
        autoprefixer(['last 16 versions', '> 5%', 'ie 8', 'ie 7', 'ie 9', 'safari 5', 'safari 10', 'opera 12.1', 'ios 6', 'ios 7', 'ios 8', 'ios 9', 'android 4'], {
            cascade: true
        }),
        sorting(),
        stylefmt,
        cssnano
    ];
    return gulp.src('app/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream({}));
});

gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync.init({ // Выполняем browserSync
        server: {
            target: './' // Директория для сервера - app
        },
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('compress', function () {// Создаем таск compress
    return gulp.src('app/js/*.js')// Берем все необходимые библиотеки
        .pipe(plumber())
        .pipe(concat('script.js'))// Собираем их в кучу в новом файле script.js
        .pipe(rename({
            suffix: ".min",// Добавляем суффикс .min
            extname: ".js"// Добавляем окончание .js
        }))
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(plumber.stop())
        .pipe(gulp.dest('js'))// Выгружаем в папку js
        .pipe(browserSync.stream({}));

});

// gulp.task("clean", function (cb) {
//     rimraf('./js/script.min.js', cb);
// });

gulp.task('extend-pages', function () {
    gulp.src('./app/html/pages/*.html')
        .pipe(extender({annotations: true, verbose: false})) // default options
        .pipe(gulp.dest('./'))
});

gulp.task('extend-blocks', function () {
    gulp.src('./app/html/*.html')
        .pipe(extender({annotations: true, verbose: false})) // default options
        .pipe(gulp.dest('./'))
});

gulp.task('watch', ['compress', 'extend-pages', 'css-libs', 'sass'], function () {
    gulp.watch('app/libs/**/*', ['css-libs']); // Наблюдение за папкой libs
    // gulp.watch('app/img/**/*', ['img']);// Наблюдение за папкой img
    gulp.watch('app/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch(['app/html/**/*.html'], ['extend-pages']);// Наблюдение за HTML-файлами в папке html
    gulp.watch('app/js/**/*.js', ['compress']); // Наблюдение за js-файлами
});


// gulp.task('img', function () {
//     return gulp.src('app/img/**/*')
//         .pipe(imagemin({
//             interlaced: true,
//             progressive: true,
//             optimizationLevel: 5,
//             svgoPlugins: [{removeViewBox: true}]
//         }))
//         .pipe(gulp.dest('img'))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// });

gulp.task('clear', function (callback) {
    return cache.clearAll();
});

gulp.task("scss-lint", function () {

// Stylelint config rules
    var stylelintConfig = {
        "rules": {
            "block-no-empty": true,
            "color-no-invalid-hex": true,
            "declaration-colon-space-after": "always",
            "declaration-colon-space-before": "never",
            "function-comma-space-after": "always",
            "function-url-quotes": "double",
            "media-feature-colon-space-after": "always",
            "media-feature-colon-space-before": "never",
            "media-feature-name-no-vendor-prefix": true,
            "max-empty-lines": 5,
            "number-leading-zero": "never",
            "number-no-trailing-zeros": true,
            "property-no-vendor-prefix": true,
            "rule-no-duplicate-properties": true,
            "declaration-block-no-single-line": true,
            "rule-trailing-semicolon": "always",
            "selector-list-comma-space-before": "never",
            "selector-list-comma-newline-after": "always",
            "selector-no-id": true,
            "string-quotes": "double",
            "value-no-vendor-prefix": true
        }
    }

    var processors = [
        stylelint(stylelintConfig),
        reporter({
            clearMessages: true,
            throwError: true
        })
    ];

    return gulp.src(
        ['app/sass/**/*.scss',
// Ignore linting vendor assets
// Useful if you have bower components
            '!app/sass/breakpoint/**/*.scss',
            '!app/sass/compass-sass-mixins/**/*.scss',
            '!app/sass/libs/*.scss'
        ]
    )
        .pipe(postcss(processors, {syntax: syntax_scss}));
});


gulp.task('default', ['watch', 'browser-sync']);

/*
npm i gulp gulp-sass browser-sync gulp-concat gulp-uglifyjs gulp-rename del gulp-imagemin imagemin-pngquant calipers-png calipers-jpeg calipers-gif gulp.spritesmith gulp-svgstore gulp-svgmin gulp-cache gulp-html-extend gulp-sourcemaps rimraf gulp-plumber gulp-postcss autoprefixer cssnano postcss-pxtorem postcss-px-to-em postcss-short stylefmt postcss-assets postcss-short-spacing postcss-focus postcss-sorting postcss-font-magician postcss-fixes stylelint-config-standard gulp-postcss postcss-reporter stylelint postcss-scss --save-dev
*/