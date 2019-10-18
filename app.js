const argv = require('./config/yargs').argv;
const color = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
//console.log(argv);

const comando = argv._[0];

switch(comando){

    case 'listar':
        listarTabla(argv.base, argv.limite)
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo}`.underline.blue))
        .catch(e => console.log(e));
    break;
    
    default:
        console.log('Comando no reconocido');
}

let argv2 = process.argv;
/*let parametro = argv[2];
let base = parametro.split('=')[1]; //Interes en el segundo elemento*/
