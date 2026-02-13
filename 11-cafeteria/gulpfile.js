// CSS & SASS
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')

// Images
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const avif = require('gulp-avif')

function css(done) {
   // Compilar SaSS
   src('src/scss/app.scss')    // 1. Identificar archivo
      .pipe(sass({ outputStyle: 'expanded' })) // 2. Compilar
      .pipe(postcss([autoprefixer()])) // 3. Agregar prefijos
      .pipe(dest('build/css'))  // 3. Guardar archivo .css

   done()
}

function images(done) {
   // Carga la carpeta imagenes
   src('src/img/**/*')
      .pipe(imagemin({ optimizationLevel: 3 }))
      .pipe(dest('build/img'))

   done()
}

function imgWebp(done) {
   // Convierte imagenes a formato .webp
   src('src/img/**/*.{jpg,png}')
      .pipe(webp())
      .pipe(dest('build/img'))
   done()
}

function imgAvif(done) {
   // Convierte imagenes a formato .avif
   src(['src/img/**/*.{png,jpg}', '!src/img/**/*.svg'])
      .pipe(avif({ quality: 50 }))
      .pipe(dest('build/img'))
   done()
}

function dev() {
   // Identifica cambios en el archivo y lo compila
   watch('src/scss/**/*.scss', css)
   watch('src/img/**/*', images)
}

// Serie - inicia una tarea despues de otra
// Parallel - inicia varias tareas al mismo tiempo
exports.css = css;
exports.dev = dev;
exports.images = images;
exports.imgWebp = imgWebp;
exports.imgAvif = imgAvif;
exports.default = series(images, imgWebp, css, dev);
