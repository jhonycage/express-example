const {info, getInfo} = require('./course-info');
const fs = require('fs');
var express = require('express')
var app = express();

const opciones = {
    codigo: {
        demand: true,
        alias: 'cod'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}
let crearArchivo = (curso) => {
    const c = info.find(e => e.id === curso.cod);
    if(c) {
        buildTemplate(curso, c);
    } else {
        console.log('\n\nCodigo no encontrado\n\n');
    }
}

function buildTemplate(course, info) {
    texto = `Prematriculado Exitosamente\n
    ---------------------------//----------------------------\n
    Curso: ${info.nombre}\n
    Valor (COP): $${info.valor}\n
    Duración (horas): ${info.duracion}\n
    Codigo: ${info.id}\n
    ---------------------------//----------------------------\n
    Datos del interesado:\n
    * Nombre: ${course.n}\n
    * Cedula: ${course.c}\n`;
    fs.writeFile(`EOI_${course.c}_${course.cod}.txt`, texto, (err) => {
        if(err) throw (err);
        else {
            console.log('Su Inscripcion se ha creado');
            //process.exit();
        }
    });
}

const argv = require('yargs')
    .command('inscribir', 'Inscribirse a un curso', opciones, (data) => {
        crearArchivo(data)
    })
    .argv

getInfo(0);

app.get('/', (req, res) => {
    res.send(texto);
});

app.listen(3000);


