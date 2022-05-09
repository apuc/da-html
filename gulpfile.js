const { src, dest, series, watch } = require('gulp')
const del = require('del')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create() // Подключаем Browser Sync
const concat = require('gulp-concat') // Подключаем gulp-concat (для конкатенации файлов)
const uglify = require('gulp-uglifyjs') // Подключаем gulp-uglifyjs (для сжатия JS)
const rename = require('gulp-rename') // Подключаем библиотеку для переименования файлов
const imagemin = require('gulp-imagemin') // Подключаем библиотеку для работы с изображениями
const pngquant = require('imagemin-pngquant') // Подключаем библиотеку для работы с png
const cache = require('gulp-cache') // Подключаем библиотеку кеширования
const extender = require('gulp-html-extend') // Подключаем бибилиотеку для склейки html-файлов
const rimraf = require('rimraf') // Очищает указанные исходники
const plumber = require('gulp-plumber') // Подключаем плагин, который не останавливает задачи от остановки во время их выполнения при возникновении ошибки
const postcss = require('gulp-postcss') // Библиотека-парсер стилей для работы с postcss-плагинами
const autoprefixer = require('autoprefixer') // Подключаем библиотеку для автоматического добавления префиксов
const cssnano = require('cssnano') // postcss-плагин, для минификации CSS кода, идущего на продакшен.
const short = require('postcss-short')
const stylefmt = require('stylefmt')
const assets = require('postcss-assets')
const sorting = require('postcss-sorting')
const fontmagic = require('postcss-font-magician')
const fixes = require('postcss-fixes')
const reporter = require('postcss-reporter')
const syntax_scss = require('postcss-scss')
const stylelint = require('stylelint')

const clear = () => {
  return del('dist')
}
exports.clear = clear

const cssLibs = () => {
  return src(['app/libs/**/*.css']) // Берем источник
    .pipe(postcss([cssnano])) // сжимаем
    .pipe(concat('libs.min.css')) // объединяем в файл
    .pipe(dest('dist/css')) // Выгружаем результата в папку app/css
  //.pipe(browserSync.stream({})) // Обновляем CSS на странице при изменении
}
exports.cssLibs = cssLibs

const scss = () => {
  var processors = [
    // подключаем постпроцессоры в массиве
    assets,
    short,
    fontmagic,
    fixes,
    autoprefixer(
      [
        'last 16 versions',
        '> 5%',
        'ie 8',
        'ie 7',
        'ie 9',
        'safari 5',
        'safari 10',
        'opera 12.1',
        'ios 6',
        'ios 7',
        'ios 8',
        'ios 9',
        'android 4'
      ],
      {
        cascade: true
      }
    ),
    sorting(),
    stylefmt,
    cssnano
  ]
  return src('app/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(
      rename({
        suffix: '.min',
        extname: '.css'
      })
    )
    .pipe(plumber.stop())
    .pipe(dest('dist/css'))
  //.pipe(browserSync.stream({}))
}
exports.scss = scss

const compress = () => {
  // Создаем таск compress
  return src('app/js/*.js') // Берем все необходимые библиотеки
    .pipe(plumber())
    .pipe(concat('script.js')) // Собираем их в кучу в новом файле script.js
    .pipe(
      rename({
        suffix: '.min', // Добавляем суффикс .min
        extname: '.js' // Добавляем окончание .js
      })
    )
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(plumber.stop())
    .pipe(dest('dist/js')) // Выгружаем в папку js
    .pipe(browserSync.stream({}))
}
exports.compress = compress

const extendPages = () => {
  return src('./app/html/pages/*.html')
    .pipe(extender({ annotations: true, verbose: false })) // default options
    .pipe(dest('dist'))
}
exports.extendPages = extendPages

const extendBlocks = () => {
  return src('./app/html/*.html')
    .pipe(extender({ annotations: true, verbose: false })) // default options
    .pipe(dest('dist'))
}
exports.extendBlocks = extendBlocks

const img = () => {
  return src('app/img/**/*')
    .pipe(
      imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{ removeViewBox: true }]
      })
    )
    .pipe(dest('dist/img'))
}
exports.img = img

const fonts = () => {
  return src('app/fonts/**/*').pipe(dest('dist/fonts'))
}
exports.fonts = fonts

const serve = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })

  watch('app/html/**/*.html').on(
    'change',
    series(extendPages, browserSync.reload)
  )
  watch('app/libs/**/*').on('change', series(cssLibs, browserSync.reload))
  watch('app/sass/**/*.scss').on('change', series(scss, browserSync.reload))
  watch('app/js/**/*.js').on('change', series(compress, browserSync.reload))
  watch('app/img/**/*').on('change', series(img, browserSync.reload))
}
exports.start = series(
  clear,
  extendPages,
  cssLibs,
  scss,
  img,
  fonts,
  compress,
  serve
)

exports.build = series(clear, extendPages, cssLibs, scss, img, fonts, compress)

/*
  gulp start - запуск сервера для разработки
  gulp build - сборка проекта
 */
