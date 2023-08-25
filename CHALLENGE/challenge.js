
//1
    'use strict';

    const fs = require('fs');

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', function(inputStdin) {
        inputString += inputStdin;
    });

    process.stdin.on('end', function() {
        inputString = inputString.split('\n');

        main();
    });

    function readLine() {
        return inputString[currentLine++];
    }


/*
 * Completa la función actividadesEnComun a continuación.
 *
 * La función debería retornar un ARREGLO DE STRINGS.
 * La función acepta dos ARREGLOS DE STRINGS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */


 function actividadesEnComun(persona1, persona2) {
    // Tu código aquí
    const newarray = [];

    for (let i = 0; i < persona1.length; i++) {
        for (let j = 0; j < persona2.length; j++) {
            if (persona1[i] === persona2[j]) {
            newarray.push(persona1[i]);
            }
        }
    }

  return newarray;
 }
 //----------------------------------------------------------------------
 function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const persona1Count = parseInt(readLine().trim(), 10);

    let persona1 = [];

    for (let i = 0; i < persona1Count; i++) {
        const persona1Item = readLine();
        persona1.push(persona1Item);
    }

    const persona2Count = parseInt(readLine().trim(), 10);

    let persona2 = [];

    for (let i = 0; i < persona2Count; i++) {
        const persona2Item = readLine();
        persona2.push(persona2Item);
    }

    const result = actividadesEnComun(persona1, persona2);

    ws.write(result.join('\n') + '\n');

    ws.end();
 }


// //2
//     'use strict';

//     const fs = require('fs');

//     process.stdin.resume();
//     process.stdin.setEncoding('utf-8');

//     let inputString = '';
//     let currentLine = 0;
//     let length;

//     process.stdin.on('data', function(inputStdin) {
//         inputString += inputStdin;
//     });

//     process.stdin.on('end', function() {
//         inputString = inputString.split('\n');
//         length = inputString.length;
        
//         main();
//     });

//     function readLine() {
//         return inputString[currentLine++];
//     }


// /*
//  * Complete the 'mayorMenosMenor' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY numeros as parameter.
//  */

//  function mayorMenosMenor(numeros) {
//     //Tu código aquí
//  var numMayor = numeros[0];
//  var numMenor = numeros[0];
 
 
//     for(var i = 0; i < numeros.length; i++) {
//         if (numeros[i] > numMayor) {
//          numMayor = numeros[i];
//         }
//         else if(numeros[i] < numMenor) {
//          numMenor = numeros[i];
//         }
//     }
//  var diferencia = numMayor - numMenor;
//  return diferencia;
//   }
//  //---------------------------------------------------------------
//  function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     let numeros = [];

//     for (let i = 0; i < length; i++) {
//         const numerosItem = parseInt(readLine().trim(), 10);
//         numeros.push(numerosItem);
//     }

//     const result = mayorMenosMenor(numeros);

//     ws.write(result + '\n');

//     ws.end();
//  }

// //3
//     "use strict";

//     const fs = require("fs");

//     process.stdin.resume();
//     process.stdin.setEncoding("utf-8");

//     let inputString = "";
//     let currentLine = 0;

//     process.stdin.on("data", function (inputStdin) {
//         inputString += inputStdin;
//     });

//     process.stdin.on("end", function () {
//         inputString = inputString.split("\n");

//         main();
//     });

//     function readLine() {
//         return inputString[currentLine++];
//     }
// /*
//  * Completa la clase Mascota a continuación, definiendo su constructor y sus métodos.
//  *
//  * El constructor acepta un STRING ("nombre"), un OBJETO ("dueño"), y un ARREGLO DE OBJETOS ("actividades") como parámetro.
//  *
//  * No modifiques nada por fuera del cuerpo de la clase.
//  */

//  class Mascota {
//     constructor(nombre, dueño, actividades) {
//         // Inicializar las propiedades de la Mascota con los valores         recibidos como    argumento
//         // tu código aquí
//      this.nombre = nombre;
//      this.dueño = dueño;
//      this.actividades = actividades;
//     }

//     getNombre() {
//         // tu código aquí
//         return this.nombre;
//     }

//     getDueño() {
//         // retorna un string concatenando el nombre y el apellido del dueño
//         // tu código aquí
//         return this.dueño.nombre + " " + this.dueño.apellido;

//     }

//     addActividad(actividad, frecuencia) {
//         // Agrega un objeto {actividad: actividad, frecuencia: frecuencia} al arreglo de  actividades de la mascota.
//         // tu código 
//          this.actividades.push({ actividad: actividad, frecuencia: frecuencia });
//     }

//     getActividades() {
//         // tu código aquí
//         return this.actividades;
//     }

//     getFrecuencia(actividad) {
//         // El metodo debe retornar la frecuencia de dicha actividad
//         // [{actividad: 'salir a caminar', frecuencia: '1 vez al dia'}, {actividad: 'baño', frecuencia: '1 vez al mes'}]
//         // mascotas.getFrecuencia('baño') debería devolver '1 vez al mes'
//         // tu código aquí
        

//         const actividades = this.getActividades();
//         for (let i = 0; i < actividades.length; i++) {
//             if (actividades[i].actividad === actividad) {
//                 return actividades[i].frecuencia;
//             }
//         }
//         return "No se encontró la frecuencia para la actividad especificada";
//     }
//  } 

// //------------------------------------------------------------------
// function main() {
// 	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

// 	const nombre = readLine().trim(),
// 		[nombreDueño, apellidoDueño] = readLine().split(" "),
// 		actividadesLength = parseInt(readLine().trim(), 10);

// 	const dueño = { nombre: nombreDueño, apellido: apellidoDueño },
// 		actividades = [];

// 	for (let i = 0; i < actividadesLength; i++) {
// 		const [actividad, frecuencia] = readLine().split("-");
// 		actividades.push({ actividad, frecuencia });
// 	}

// 	const { actividad: ultimaAct, frecuencia: ultimaFrec } = actividades.pop();

// 	const nuevaMascota = new Mascota(nombre, dueño, actividades);

// 	nuevaMascota.addActividad(ultimaAct, ultimaFrec);

// 	const result = {
// 		nombre: nuevaMascota.getNombre(),
// 		dueño: nuevaMascota.getDueño(),
// 		actividades: nuevaMascota.getActividades(),
// 		frecuencia: nuevaMascota.getFrecuencia(nuevaMascota.getActividades()[0]),
// 	};

// 	Object.keys(result).forEach(k => {
// 		let printValue = result[k];

// 		if (Array.isArray(printValue)) {
// 			printValue = printValue.join(" ").trim();
// 		}

// 		ws.write(printValue + "\n");
// 	});

// 	ws.end();
//  }

// //4
//     'use strict';

//     const fs = require('fs');

//     process.stdin.resume();
//     process.stdin.setEncoding('utf-8');

//     let inputString = '';
//     let currentLine = 0;
//     let length;

//     process.stdin.on('data', function(inputStdin) {
//         inputString += inputStdin;
//     });

//     process.stdin.on('end', function() {
//         inputString = inputString.split('\n');
//         length = inputString.length - 2;

//         main();
//     });

//     function readLine() {
//         return inputString[currentLine++];
//     }



// /*
//  * Completa la función 'ingredienteEnMalEstado' a continuación.
//  *
//  * La función debe retornar un ARRAY DE STRING ó un STRING.
//  * La función recibe los siguientes parámetro(s):
//  *  1. OBJETO 'menu'
//  *  2. STRING 'comida'
//  *  3. STRING 'ingrediente'
//  *
//  * No modifiques nada por fuera del cuerpo de la función.
//  */

//  function ingredienteEnMalEstado(menu, comida, ingrediente) {
//     //Tu código aquí
    
//     let eliminarIngredientes = [];
//     if (menu[comida]) {
//         let arraytam = menu[comida].length;   
//         for(let i = 0; i < arraytam; i++) {
//             if (menu[comida][i] === ingrediente) {
//                 eliminarIngredientes.push(menu[comida][i-1]);
//                 eliminarIngredientes.push(menu[comida][i]);
//                 eliminarIngredientes.push(menu[comida][i+1]);
//             }
           
//         }
//     }
    
//     if (eliminarIngredientes.length > 0) {
//         return eliminarIngredientes;
//     }
//     else {
//         return "El menú está perfecto"
//     }
//  }
//  //------------------------------------------------------------------------------
//  function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//     const forbiddenMethods = [".includes"];
//     const ingredienteEnMalEstadoString = ingredienteEnMalEstado.toString();
    
//     let usingForbiddenMethods = false;
    
//     forbiddenMethods.forEach(method => {
//         if(ingredienteEnMalEstadoString.includes(method)) usingForbiddenMethods = true;
//     });
    
    
//     let menu = {};

//     for (let i = 0; i < length; i++) {
//         let menuItem = readLine().split(' ');
//         menu[menuItem.shift()] = menuItem
//     }

//     const comida = readLine();

//     const ingrediente = readLine();
    
//     if(usingForbiddenMethods) {
//         ws.write("No está permitido usar el método 'includes'")        
//     } else {
//         let result = ingredienteEnMalEstado(menu, comida, ingrediente);
//         ws.write(typeof result === 'string' ? result : result.join('\n') + '\n');
//     };
        


//     ws.end();
//  }

// //5
//     'use strict';

//     const fs = require('fs');

//     process.stdin.resume();
//     process.stdin.setEncoding('utf-8');

//     let inputString = '';
//     let currentLine = 0;
//     let length;

//     process.stdin.on('data', function(inputStdin) {
//         inputString += inputStdin;
//     });

//     process.stdin.on('end', function() {
//         inputString = inputString.split('\n');
//         length = inputString.length

//         main();
//     });

//     function readLine() {
//         return inputString[currentLine++];
//     }

// /*
//  * Completa la función 'vegan' a continuación.
//  *
//  * La función debe retornar un INTEGER.
//  * La función recibe un OBJETO como parámetro.
//  *
//  * No modifiques nada por fuera del cuerpo de la función
//  */

// function vegan(invitados) {
//     // tu código aquí
//     let veganos = 0;
//     const arrayInvitados = Object.keys(invitados);
    
//     for(let element of arrayInvitados) {
//        if (invitados[element].vegan === true) {
//            veganos++
//        }
//     }
//     return veganos;
//  }
// //--------------------------------------------------
//  function main() {
// 	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

// 	const invitados = {};

// 	for (let i = 0; i < length; i++) {
// 		const [name, veganBool] = readLine().trim().split(" ");

// 		invitados[name] = { vegan: veganBool == "true" ? true : false };
// 	}

//     const result = vegan(invitados)

//     ws.write(result + "\n")

// 	ws.end();
//  }


// //6
//     "use strict";

//     const fs = require("fs");

//     process.stdin.resume();
//     process.stdin.setEncoding("utf-8");

//     let inputString = "";
//     let currentLine = 0;
//     let length;

//     process.stdin.on("data", function (inputStdin) {
//         inputString += inputStdin;
//     });

//     process.stdin.on("end", function () {
//         inputString = inputString.split("\n");
//         length = inputString.length;

//         main();
//     });

//     function readLine() {
//         return inputString[currentLine++];
//     }

//     function testCbA(obj) {
//         if (obj.edad > 18) return true;
//         return false;
//     }

//     function testCbB(obj) {
//         if (obj.precio >= 50) return true;
//         return false;
//     }

// /*
//  * Completa la función 'filtrar' a continuación.
//  *
//  * La función debe retornar un ARREGLO.
//  * La función recibe un CALLBACK como parámetro.
//  *
//  * No modifiques nada por fuera del cuerpo de la función.
//  */

// Array.prototype.filtrar = function (cb) {
//     // tu código aquí
//   const resultado = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) {
//       resultado.push(this[i]);
//     }
//   }
//   return resultado;
//  }
//  //-----------------------------------------------------------
//  function main() {
// 	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

// 	const arreglo = [];
// 	let cbA;

// 	for (let i = 0; i < length; i++) {
// 		const inputObj = {};

// 		readLine()
// 			.split(" ")
// 			.forEach(prop => {
// 				const [key, value] = prop.split(":");
// 				inputObj[key] = isNaN(value) ? value : Number(value);
// 			});

// 		if (inputObj.hasOwnProperty("edad")) cbA = true;

// 		arreglo.push(inputObj);
// 	}

// 	const result = arreglo.filtrar(cbA ? testCbA : testCbB);

//     const finalOutput = [];

// 	result.forEach(obj => {
// 		let outputLine = "";

// 		for (let prop in obj) {
// 			outputLine = `${outputLine} ${prop}:${obj[prop]}`;
// 		}

// 		finalOutput.push(outputLine.trim());
// 	});

// 	finalOutput.forEach(line => {
// 		ws.write(line + "\n");
// 	});


// 	ws.end();
// }

// //7
//     'use strict';

//     const fs = require('fs');

//     process.stdin.resume();
//     process.stdin.setEncoding('utf-8');

//     let inputString = '';
//     let currentLine = 0;
//     let length;

//     process.stdin.on('data', function(inputStdin) {
//         inputString += inputStdin;
//     });

//     process.stdin.on('end', function() {
//         inputString = inputString.split('\n');
//         length = inputString.length;

//         main();
//     });

//     function readLine() {
//         return inputString[currentLine++];
//     }
//  /*
//  * Completa la función 'ideas' a continuación.
//  *
//  * La función debe retornar un STRING.
//  * La función acepta un ARREGLO DE STRINGS como parámetro.
//  *
//  * No modifiques nada por fuera del cuerpo de la función.
//  */

//  function ideas(listaDeIdeas) {
//     // tu código aquí
//  let ideasBuenas = 0;
//     for(let element of listaDeIdeas) {
//         if(listaDeIdeas[element] === 'buena') {
//          ideasBuenas++;
//         }
//     } 
//     if(ideasBuenas >= 3) {
//      return "Jackpot!"
//     }
//     else if (ideasBuenas > 0) {
//      return "Activa!"
//     }
//     return "Fail!"
//  }
//  //-----------------------------------------------------------------
//     function main() {
//         const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
//         let listaDeIdeas = [];
    
//         for (let i = 0; i < length; i++) {
//             const listaDeIdeasItem = readLine();
//             listaDeIdeas.push(listaDeIdeasItem);
//         }
    
//         const result = ideas(listaDeIdeas);
    
//         ws.write(result + '\n');
    
//         ws.end();
//     }
    

// //8

//     let currentLine = 0;

//     process.stdin.on('data', function(inputStdin) {
//         inputString += inputStdin;
//     });

//     process.stdin.on('end', function() {
//         inputString = inputString.split('\n');

//         main();
//     });

//     function readLine() {
//         return inputString[currentLine++];
//     }
// /*
//  * Completa la función 'buscaDestruye' a continuación.
//  *
//  * La función debe retornar un ARREGLO DE ENTEROS.
//  * La función recibe un ARREGLO DE ENTEROS y un ENTERO como parámetros.
//  *
//  * No modifiques nada por fuera del cuerpo de la función.
//  */

//  function buscaDestruye(numeros, n) {
//     // Tu código aquí
    
//  const arrayEnteros = [];
 
//     for(let i = 0; i < numeros.length; i++) {
//         if(numeros[i] !== n) {
//             arrayEnteros.push(numeros[i]);
//         }
//     }
//  return arrayEnteros;
//  }
//  //---------------------------------------------------------------------
//  function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const numerosCount = parseInt(readLine().trim().split(" ")[1], 10);

//     let numeros = [];

//     for (let i = 0; i < numerosCount; i++) {
//         const numerosItem = parseInt(readLine().trim(), 10);
//         numeros.push(numerosItem);
//     }

//     const n = parseInt(readLine().trim(), 10);

//     const result = buscaDestruye(numeros, n);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
//  }
