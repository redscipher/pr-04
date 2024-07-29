// importacoes
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')

// funcoes
let compilaSASS = function(){
    try {
        // objeto
        let obj = gulp.src(['./src/estilos/sass/**/*.scss'])
                    .pipe(sourcemaps.init())
                    .pipe(sass())
                    .pipe(sourcemaps.write('./mapas'))
                    .pipe(gulp.dest('./build/dev/css'));
        // def retorno
        return obj;
    } catch (error) {
        console.log(error.message);
    }
}

let compilaSASSDist = function(){
    try {
        // objeto
        let obj = gulp.src(['./src/estilos/sass/**/*.scss'])
                    .pipe(sourcemaps.init())
                    .pipe(sass({
                        outputStyle: 'compressed'
                    }))
                    .pipe(sourcemaps.write('./mapas'))
                    .pipe(gulp.dest('./build/dist/css'));
        // def retorno
        return obj;
    } catch (error) {
        console.log(error.message);
    }
}

let executaTarefas = async function(){
    try {
        // inicia tarefas em paralelo
        gulp.parallel(compilaSASS());
    } catch (error) {
        console.log(error.message);
    }
}

let executaTarefasDist = async function(){
    try {
        // inicia tarefas em paralelo
        gulp.parallel(compilaSASSDist());
    } catch (error) {
        console.log(error.message);
    }
}

let executaWatch = function(){
    try {
        // inicia observacao dos arquivos
        gulp.watch(['./src/**/*'], {ignoreInitial:false}, executaTarefas);
    } catch (error) {
        console.log(error.message);
    }
}

// exportacoes
exports.default = executaTarefas;
exports.watch = executaWatch;
// compila producao
exports.compila_prod = executaTarefasDist;