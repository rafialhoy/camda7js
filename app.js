

let input = prompt('Eres de la camada 7? "Yes" o "No"');


while (input !== 'q' && input !== 'quit') {
    if (input === 'Yes') {
        const start = prompt('Bienvenido a este juego interactivo! Para empezar digita "Listo" y para digita "Quit"');
            while (start !== 'Quit') {
                if (start === 'Listo') {
                    const prg1 = prompt('Pregunta 1: Quien sabe mas de bases de datos? "Rafa" o "Profe Sergio"?');
                    if (prg1 === 'Rafa') {
                        alert('Respuesta correcta! No me sorprenderia si ya estas en la Base de datos de Rafa');
                        const prg2 = prompt('Pregunta 2: Cual es el apellido de Mei? "Mostyszczer" o "Mostysczcher?"');
                            if (prg2 === 'Mostyszczer') {
                                alert('Respuesta correcta! Algun dia lo sabremos pronunciar');
                                const prg3 = prompt('Pregunta 3: Cual es la variable mas sexy en JS? "const" , "let" o "var"?')
                                    if (prg3 === 'const') {
                                        alert('Respuesta correcta! Ezequiel estaria orgulloso de ti :)');
                                        const prg4 = prompt('Pregunta 4: Cuantas horas practicas JS al dia? "4" , "2" o "0"');
                                            if (prg4 === '0') {
                                                alert('Respuesta correcta! No te preocupes, pronto hare un juego de estos solo para que repases JS');
                                                const prg5 = prompt('Pregunta Final: Digita extamente como seria el codigo para mostrar en la consola una variable ya definida llamada "endgame"? Tip: solo es una linea de codigo, no olvides el ; al final.');
                                                    if (prg5 === 'console.log(endgame);') {
                                                        alert('GANASTE EL JUEGO! Si llegaste hasta este punto, no solo se nota que eres de la camada 7 sino que estas al dia con tu JS. Felicidades!');
                                                        alert('Creado por Rafael Alvarez alias "Rafa Colombia".');
                                                        alert('Para salir del juego, cierra la pestaña, aun no se como acabar un loop :)');
                                                    } else {
                                                        alert('Respuesta INCORRECTA! vuelve a intentarlo!');
                                                        prg5 = prompt('Pregunta Final: Digita extamente como seria el codigo para mostrar en la consola una variable ya definida llamada "endgame"? Tip: solo es una linea de codigo, no olvides el ; al final.');
                                                    }
                                            } else {
                                                alert('No te mientas a ti mismo/a, vuelve a intentarlo y responnde con sinceridad!');
                                                prg4 = prompt('Pregunta 4: Cuantas horas practicas JS al dia? "4" , "2" o "0"');
                                            }

                                            } else {
                                                alert('Respuesta Incorrecta Vuelve a Intentarlo!');
                                                const retry3 = prg3;
                                            }
                                    } else {
                                        alert('Respuesta Incorrecta Vuelve a Intentarlo!');
                                        const retry2 = prg2;
                                    }
                            } else {
                                alert('Respuesta Incorrecta! Vuelve a Intentarlo!');
                                prg1 = prompt('Pregunta 1: Quien sabe mas de bases de datos? "Rafa" o "Profe Sergio"?');
                            }
                    } else {
                        alert('Respuesta Incorrecta! Vuelve a Intentarlo!');
                        prg1 = prompt('Quien sabe mas de bases de datos? "Rafa" o "Profe Sergio"?');
                    }
                } 
                    start = prompt('Bienvenido a este juego interactivo! Para empezar digita "Listo" y para digita "Quit"');
                
    } else if (input === 'No') {
        alert('No tienes acceso');
    } input = prompt('Eres de la camada 7? "Yes" o "No"');
} 

console.log("Bye!");



