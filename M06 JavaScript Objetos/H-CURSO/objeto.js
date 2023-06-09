// A diferencia de las matrices que tienen elementos valorados en índices, los objetos usan un concepto llamado pares de clave:valor. 

// La clave (key) es el identificador y el valor (value) es el valor que queremos guardar en esa clave. La sintaxis es "clave: valor". Los objetos pueden contener muchas pares de clave-valor, deben estar separados por una coma (importante: sin punto y coma dentro de un objeto). 

//*Las claves son únicas en un objeto, solo puede haber una clave de ese nombre, aunque varias claves pueden tener el mismo valor. Los valores pueden ser cualquier tipo de dato de Javascript; cadena, número, booleano, matriz, función o incluso otro objeto. 

// var deportes = {
//     conBalón: ['Fútbol', 'Baloncesto', 'Golf'],
//     sinBalón: ['Boxeo', 'Surf', 'Trekking'],
//  };
//  var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

// var persona = { nombre: 'Lucas', edad: 26, estudios: {esProgramador: true} };

// //console.log(persona.edad);
// persona.nombre = 'Martin';
// // console.log(persona.nombre);
// persona.edad = 32;
// // console.log(persona.edad);


// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// //si quiero eliminar la propiedad
// delete autos.marcas;
// console.log(autos);

// var misFunciones = {
//     saludar: function () {
//     console.log('Hola');
// },
// };

// misFunciones.saludar();

// 1-Para acceder a la propiedad de un objeto simplemente tenemos que escribir el nombre del objeto seguido de un punto y el nombre de la propiedad.

// 2-Para cambiar el valor de una propiedad simplemente tenemos que acceder a ella e igualarla al nuevo valor.

// 3- eliminar propiedades utilizaremos una palabra reservada llamada delete .  

// // ACCEDER
// var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// console.log(persona.edad);
// // ASIGNAR
// var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// persona.nombre = 'Martín';
// console.log(persona.nombre);

// //CREAR
// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// console.log(autos);

// //BORRAR
// delete autos.marcas;
// console.log(autos);

//Dot-Notation y Bracket-Notation

//Dot-Notation:

// var atuendos = {manos:['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// // console.log(atuendos.manos);

// // Bracket-Notation

// atuendos['Piernas'] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);

// //Creamos una nueva con bracket-notation
// var comidas = {};
// var diferenciaDeNotaciones = function (propUno, propDos) {
//     comidas[propUno] = ['Frutas', 'Vegetales'];
//     comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
// };
// diferenciaDeNotaciones('saludable', 'noSaludable');
// console.log(comidas);

// De la misma manera que utilizamos la Dot-Notation o notación por puntos para acceder o asignar un valor, también podemos usar Bracket-Notation, o notación por corchetes. Lo único que cambia es la forma en la que lo escribimos.

// Muchas veces nos puede suceder que necesitemos utilizar una variable externa para guardarla como propiedad en un objeto. Es importante que en esos casos recordemos utilizar Bracket-Notation sin comillas para que funcione correctamente.


//VIDEO: Objetos avanzados

// En este video clase vamos a aprender a trabajar de forma más avanzada con objetos. Aprenderemos más funciones predefinidas de este lenguaje, que nos permitirán realizar tareas de manera mucho más rápida.


// Métodos de objetos

// 1-El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.

// 2-El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.

// Recorridos en objetos

// De la misma manera que podíamos recorrer los elementos de un arreglo, podemos recorrer las propiedades de un objeto junto con sus valores.

// El bucle For-In nos permite iterar sobre un objeto utilizando dos variables pivot. Una representa el objeto que recorremos, y la otra la propiedad en la que se está realizando la iteración. Utilizando ambos valores podremos acceder al valor de cada propiedad del objeto.

// Contextos en JavaScript

// Dentro de este lenguaje de programación existe un objeto global llamado this. Este nos permite manipular el contexto en el que las funciones y la información está siendo ejecutada. De esta forma podremos tener un alcance más preciso dentro de nuestro código.

// // HAS OWN PROPERTY
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var tienePropiedad = libro.hasOwnProperty('nombre');

// console.log(tienePropiedad);

// // KEYS
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var todasLasPropiedades = Object.keys(libro);

// console.log(todasLasPropiedades);
// for (let prop in mundo) {
//     console.log('Esta es la propiedad: ', prop);
//     console.log('Este es el valor: ', mundo[prop]);
//  }

//  //THIS
// var mascota = {
//     animal: 'Perro',
//     raza: 'Ovejero Alemán',
//     amistoso: true,
//     dueño: 'María López',
//     info: () => {
//        console.log('Mi perro es un  ' + this.raza);
//     },
//  };