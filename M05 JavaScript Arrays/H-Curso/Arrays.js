
//VIDEO: INTRODUCCIÓN A LOS ARRAYS

// Queremos crear un arreglo o lista y agregarle elementos.
// var listaDeCompras = [];
// listaDeCompras[3] = 'Tomates';
// listaDeCompras[1] = 'Lechuga';
//console.log(listaDeCompras);

// Quiero recuperar elementos, para esto tenemos que saber cual es el indice.
// listaDeCompras[1];
// Guardamos los elementos en una variable. Tenemos que escribir el nombre del arreglo y en [] el indice que queremos recuperar.
// var elementoDelArray = listaDeCompras[1];
// console.log(elementoDelArray);

// LENGTH (Quiero saber cuantos elementos contiene un arreglo)
// console.log(listaDeCompras.length);



//VIDEO: Métodos de Arrays

// PUSH AND UNSHIFT (Queremos agregar un elemento al arreglo)
// Usamos +PUSH(Agrega al final) o +UNSHIFT(Agrega al inicio)
// var colores = ['amarillo', 'azul'];
// //Para agregar elementos
// colores.push('rojo');
// colores.unshift('verde');

// POP AND SHIFT (Queremos eliminar elementos)
// Usamos +POP(Elimina al final) o +SHIFT(Elimina al inicio)
// colores.pop();
// colores.shift();
// console.log(colores);


//INCLUDES (Queremos saber si incluye un elemento)-True
// var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dalí'];
// var incluyeDalí = pintores.includes('Dalí');
// console.log(incluyeDalí)
// (Queremos saber si incluye un elemento)-False
// var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dalí'];
// var incluyeDalí = pintores.includes('Monet');
// console.log(incluyeDalí)


//EVERY (Queremos saber si todos los numeros cumplen con la condición )
// var numeros = [1, 6, 8, 9];
// var CumplenCondiciones = numeros.every((num) => {
// return num > 5;
// });
// console.log(CumplenCondiciones);



//VIDEO:Métodos split(separa el string en elementos) y join(une los elementos en un string)

// SPLIT (Queremos arreglar un string, convirtiendolo en un arreglo)
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');
// palabraSeparada.pop();
// palabraSeparada.push('y');
// console.log(palabraSeparada);
//+
// JOIN (Queremos volver a cpnvertir el arreglo en string)
// var palabraArreglada = palabraSeparada.join('');
// console.log(palabraArreglada);

//FOREACH (Queremos que haga un console log de cada uno de los numeros por separado)
//  var numeros = [1, 2, 3, 4];
//  numeros.forEach((num) => console.log(num));

//+(Queremos que haga un console log, solo de los numeros iguales a 3.
//  numeros.forEach(num => {if(num ===3) {console.log(num)}});

//MAP (Queremos sumarle 1 a todos los numeros del arreglo)
// var numeros = [1, 2, 3, 4];
// var masUno = numeros.map((num) => {return num + 1;});
// console.log(masUno);



//VIDEO: Bucles o ciclos en los Arrays: Aprenderemos distintos bucles, el Bucle For y el otro es el Bucle While.

//FOR 

//Exp(var i = 0;) LA PRIMERA ITERACION SIEMPRE SERA LA NÚMERO CERO POR LO QUE LA IGUALEMOS A ESTA.
//Exp(;i < arr.length) PARA DEFINIR ESTE DATO, QUE QUEREMOS ITERAR?  SIEMPRE VAMOS A ITERRAR ARREGLOS, POR LO QUE TENEMOS QUE DEFINIR QUE ARREGLOS SERÁ. YA DECIDIDO, MIENTRAS SE CUMPLA QUE CONDICION QUIERO QUE ESTE BUCLE SE ITERE? ESTO NOS PERMITE PONER UNA SENTENCIA DE CIERRE A ESTE BUCLE.
//Exp(; i++) INDICA QUE SUCEDERA CON LA VARIABLE DE ITERACIÓN AL FINAL DE CADA ITERACIÓN. i++ SE SUMARA 1 A LA VARIABLE i.

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//Nos piden que construyamos una funcion que reciba un string y regrese alguna de estas letras de este string en la letra p

// function encontrarLetraP(string) {
//     var letras = string.split('');

//     for(let i = 0; i < letras.length; i++) {
//         if (letras[i] === 'p') {
//             console.log('Si contiene a p');
//         }
//     }
// }
// encontrarLetraP('JavaScript');
// encontrarLetraP('Henry');

//WHILE - Repetir la tarea muchas veces, si quisiera repetir una palabra 

// var arr = [];
// while (arr.length < 5) {
//     arr.push('BOOM');
// }

// console.log(arr);