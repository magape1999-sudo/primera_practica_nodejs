
//archivo: app.js
import { obtenerTitulo, obtenerEjecutor, obtenerMentor, obtenerMonitor } from '../funciones.js';
import {curso} from '../cursos.js'

import readline from 'readline'
import chalk from 'chalk'
import { sumar, restar, division } from '../operaciones basicas.js';

const leer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mostrarMenu() {
    console.log(chalk.blue('calculadora'))
    console.log('1, suma')
    console.log('2, resta')
    console.log('3, division')
    console.log('4, Mostrar informacion')
    leer.question('ingrese una opcion: ', opcion => {
        switch (opcion) {
            case '1':
                leer.question('Digite el primer numero a sumar', n1 => {
                    leer.question('Digite el segundo numero a sumar', n2 => {
                        console.log(sumar(n1, n2))
                        mostrarMenu()
                    })
                })
                break;
            case '2':
                leer.question('Digite el primer numero a restar', n1 => {
                    leer.question('Digite el segundo numero a restar', n2 => {
                        console.log(restar(n1, n2))
                        mostrarMenu()
                    })
                })
                break;
            case '3':
                leer.question('Digite el primer numero a dividir', n1 => {
                    leer.question('Digite el segundo numero a dividir', n2 => {
                        console.log(division(n1, n2))
                        mostrarMenu()
                    })
                })
                break;
            case '4':
                console.log(obtenerTitulo())
                console.log(obtenerEjecutor(curso.autor))
                console.log(obtenerMentor(curso.mentor))
                console.log(obtenerMonitor(curso.monitor))
                mostrarMenu()
                break;
            default:
                console.log(chalk.red('opcion invalida'))

        }

    })
}
mostrarMenu()