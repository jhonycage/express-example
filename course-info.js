const info = [
    {
        id: '0010',
        nombre: 'Fundamentos de programación orientada a objetos',
        duracion: 20,
        valor: 250000
    },
    {
        id: '0020',
        nombre: 'Entablando una relación con si mismo. Fundamentos de Mindfulness',
        duracion: 30,
        valor: 550000
    },
    {
        id: '0030',
        nombre: 'Gestión del conocimiento.',
        duracion: 25,
        valor: 450000
    },
    {
        id: '0040',
        nombre: 'Arquitectura de aplicaciones en la nube usando AWS',
        duracion: 40,
        valor: 8200000
    }
];

let getInfo = (i) => {
    setTimeout(() => {
        console.log(`*********---------- CURSO ------------*********\nNombre: ${info[i].nombre}\nCodigo: ${info[i].id}\nDuracion (horas): ${info[i].duracion}\nCosto (COP): $${info[i].valor}`);
        if (i < info.length - 1) getInfo(i + 1)
    }, 2000);
};

module.exports = { info, getInfo };
