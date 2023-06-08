/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length === 0) {
      return undefined;
   }
   return array[0];
}
console.log(devolverPrimerElemento([1, 2, 3]));
console.log(devolverPrimerElemento(['a', 'b', 'c']));
console.log(devolverPrimerElemento([]));

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length === 0) {
      return undefined;
   }
   return array[array.length - 1];

}
console.log(devolverUltimoElemento([1, 2, 3]));
console.log(devolverUltimoElemento(['a', 'b', 'c']));
console.log(devolverUltimoElemento([]));

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}
console.log(obtenerLargoDelArray([1, 2, 3]));
console.log(obtenerLargoDelArray(['a', 'b', 'c']));
console.log(obtenerLargoDelArray([]));


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var element = [1, 2, 3];
   return array.map((element) => element + 1);
}
console.log(incrementarPorUno([1, 2, 3]));

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
      array.push(elemento);
      return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
      return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}
console.log(dePalabrasAFrase(['Hello', 'world!']));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}
console.log(arrayContiene([1, 2, 3], 2));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce((acumulador, elemento) => acumulador + elemento, 0);
}
console.log(agregarNumeros([1, 2, 3]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sumador = 0;
   var m = resultadosTest.length
   for (var i = 0; i < m; i++) {
      sumador += resultadosTest[i];
   }
   return sumador / m;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var max = 0
   
   for (var i = 0; i < arrayOfNums.length; i++) {
  if (arrayOfNums[i]>max) {
   max = arrayOfNums[i];
   }
   }
   return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length < 1) return 0;
    var cuenta = 1;
    for(var i = 0; i < arguments.length; i++){
		cuenta *= arguments[i];
    }
    return cuenta;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   return array.filter((elemento) => elemento > 18).length;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 7 || numeroDeDia === 1) {
      return "Es fin de semana";
   }
      return "Es dia laboral"
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numstring = num.toString();
   if(numstring[0] === '9'){
      return true;
   } else {
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
  
   var primerElemento = array[0];
   for (var i = 1; i < array.length; i++) {
      if (array[i] !== primerElemento) {
      return false;
      }
      }
    return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   // i = index
   const nuevoarray = []
   for ( let i = 0; i< array.length; i++) {
      if (array[i]==='Enero' || array[i]==='Marzo' || array[i]==='Noviembre') {
      nuevoarray.push(array[i])
      }
   }
   if (nuevoarray.length === 3) {
   return nuevoarray}
   else {
      return "No se encontraron los meses pedidos"
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaDelSeis=[];
   var lim=10;
   //Inicializo Multi convirtiendolo en una variable que tiene valor cero
   var Multi=0;
   for(i=0;i<(lim+1);i++){
      Multi=i*6;
	   tablaDelSeis.push(Multi);
   }
   return(tablaDelSeis);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código: 
   const mayorACien=[];
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 100) {
      mayorACien.push(array[i]);
      }
   }
   return mayorACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
      let sumaDos = [];
      for (let i = 0; i < 10; i++) {
        num += 2;
        sumaDos.push(num);
        if (num === i) {
          return "Se interrumpió la ejecución";
        }
      }
      return sumaDos;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
 
   const newarray = [];
   let sumador = num;
   for (let i = 0; i< 10; i++) {
      if (i === 5) continue;
      sumador = sumador +2;
      newarray.push(sumador);
   } 
   return newarray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
