/* > === MAYOR
< === MENOR */
/* Condicion puede ser TRUE OR FALSE  */

/* ----------------------- IF EJEMPLO: ----------------------*/
if (4 < 5) {
    console.log("El número es menor a 5");
}

/* ----------------------- IF / ELSE EJEMPLO: ----------------------*/
if (4 > 5) {
    console.log("El número es mayor a 5");
} else {
    console.log("El número es menor o igual 5");
}

/* ----------------------- ANIDACION EJEMPLO: ----------------------*/
if (14 < 15) {
    if (1 === 1) {
        console.log("El número es menor a 5 y es 1");
    } else {
        console.log("El número es menor a 5, pero no es 1");
    }
}

/* ----------------------- TERNARIO EJEMPLO: ----------------------*/
let edad = 17;
let esMayorEdad = edad > 18 ? true : false;



/* PRACTICA :
Consigna: Crea un algoritmo que solicite al usuario uno o más
valores ingresados por prompt(), compare las entradas y, en
función de ciertas condiciones, muestre por consola o alert() el
resultado según los valores ingresados y las condiciones
cumplidas.
Ejemplo:
- Pedir número mediante prompt y si es mayor a 1000
mostrar un alert.
- Pedir un texto mediante prompt, y si es igual a "Hola"
mostrar un alerta por consola.
- Pedir un número por prompt y evaluar si está entre 10 y 50.
En caso positivo mostrar un alert */


/* Un array vacío: */
let grupo = [];
/* Un array con elementos: */
let mascotas = ['gato', 'perro', 'pato'];
console.log(mascotas) //array de strings

/* VER UN ARRAY POR INDICE: */
let datos = ['dato1', 'dato2', 'dato3'];
console.log(datos[0]);

/* EJEMPLO .LENGTH: */
let colorMascotas = [
    ['perro', 'marron'],
    ['gato', 'blanco'],
    ['pez', 'anaranjado']
];
console.log(colorMascotas.length);


/* PRACTICA
Crea un array de strings con 5 elementos que quieras.
Luego, mostrá en consola:
1. El array
2. Cuántos elementos tiene el array
3. El índice 0 del array */


/* PRACTICA:
Crear una lista de artículos para el supermercado de mínimo 5 items.
Con el método prompt() pedile al usuario que ingrese un artículo para
agregar a la lista.
Si el artículo ya está en la lista (método: array.includes()) avisarle al usuario
que el artículo ya está.
Si no, agregar el artículo a la lista y mostrarle al usuario la lista de todo lo
que tiene que comprar */


/* SOLUCION 
let lista = ['papa','cebolla',prompt('ingresa un articulo')]

if (lista.includes(lista[2])) {
    console.log("ese articulo ya esta en la lista");
}else{
    console.log(lista);
} */


/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* SWITCH
La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

expresión:
Es una expresión que es comparada con el valor de cada instancia case.

case: valorN
Una instancia case valorN es usada para ser comparada con la expresión. Si la expresión coincide con el valorN, las declaraciones dentro de la instancia case se ejecutan hasta que se encuentre el final de la declaración switch o hasta encontrar una interrupción break.

default:
Una instancia default, cuando es declarada, es ejecutada si el valor de la expresión no coincide con cualquiera de las otras instancias case valorN

Syntaxis
switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]
  ...
  case valorN:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    [break;]
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    [break;]
}

SWITCH DESCRIPCION:
Si ocurre una coincidencia, el programa ejecuta las declaraciones asociadas correspondientes. Si la expresión coincide con múltiples entradas, la primera será la seleccionada, incluso si las mayúsculas son tenidas en cuenta.

El programa primero busca la primer instacia case cuya expresión se evalúa con el mismo valor de la expresión de entrada (usando comparación estricta (en-US), ===) y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas. Si no se encuentra una cláusula de case coincidente, el programa busca la cláusula default opcional, y si se encuentra, transfiere el control a esa instancia, ejecutando las declaraciones asociadas. Si no se encuentra una instancia default el programa continúa la ejecución en la instrucción siguiente al final del switch. Por convención, la instancia default es la última cláusula, pero no tiene que ser así.

La declaración break es opcional y está asociada con cada etiqueta de case y asegura que el programa salga del switch una vez que se ejecute la instrucción coincidente y continúe la ejecución en la instrucción siguiente. Si se omite el break el programa continúa la ejecución en la siguiente instrucción en la declaración de switch .

Ejemplos
Usando switch
En el siguiente ejemplo, si expresión se resuelve a "Platanos", el algoritmo compara el valor con el case "Platanos" y ejecuta la declaración asociada. Cuando se encuentra un break, el programa sale del condicional switch y ejecuta la declaración que lo procede. Si se omite el break, el case "Cerezas" también es ejecutado.

switch (expr) {
    case 'Naranjas':
        console.log('El kilogramo de naranjas cuesta $0.59.');
    break;
    case 'Manzanas':
        console.log('El kilogramo de manzanas cuesta $0.32.');
    break;
    case 'Platanos':
        console.log('El kilogramo de platanos cuesta $0.48.');
        break;
    case 'Cerezas':
        console.log('El kilogramo de cerezas cuesta $3.00.');
        break;
    case 'Mangos':
    case 'Papayas':
        console.log('El kilogramo de mangos y papayas cuesta $2.79.');
    break;
    default:
        console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
}

console.log("¿Hay algo más que te quisiera consultar?"); */

/* AND (&&) */
/* let mascota = 'Perro';
let anio = 1;
if (mascota == 'Perro' && anio < 2) {
console.log("Tu perro es cachorro");
} */

/* OR (||) */
let mascota = 'Caballo';
if (mascota == 'Perro' || mascota == 'Gato') {
    console.log("Tu mascota será bienvenida al alojamiento")
}else{
console.log("Lo sentimos, solo recibimos perros o gatos");
}

/* NOT (!) */
/* El operador lógico NOT no realiza ninguna comparación como lo hacen los operadores AND y OR. Además, se opera en solo un operando.

Se utiliza un símbolo "!" (signo de exclamación) para representar un operador NOT. */

let tieneMascota = false;
if (!tieneMascota ) {
console.log("No tenés mascotas.");
}
/* Convierte el operando al tipo booleano: true/false y retorna el valor
contrario */