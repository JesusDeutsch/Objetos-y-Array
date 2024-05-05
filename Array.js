/*1.- Crea una variable que tenga como valor un array vacío. */

const array = [];

/*2.- Crea una variable que tenga como valor un array con al menos 3 tipos de datos distintos. */

const mercedes = ["a180D", "Blanco","Nuevo" ];

/*3.- 
         3.1.- Crea un array vacío y añádele dos valores usando push(), dos valores usando unshift() y 
         luego usa pop() y shift() una vez. A continuación, muestra por consola la longitud del array.
*/
    
const laLiga = [];

const newTeam = laLiga.push("Valencia","Barcelona");
const newTeam2 = laLiga.unshift("Getafe","Leganes");
const removed = laLiga.pop();
const removed2 = laLiga.shift();

console.log(laLiga);
console.log(laLiga.length);


/*3.2.- Crea un array classNames con todos los nombres de tus compañer@s de clase. Muestra por 
         consola tu nombre seleccionando el que hay en el array classNames.
*/

const classNames = ["Yisus","Roger","Javmir","Andrea","Jesus","Adriana","Gabriela"];

console.log(classNames[0]);

/*4.- Crea el siguiente array: const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"].
 A continuación, muestra por consola los nombres ["María, Isidro"] usando slice(). Luego, 
 sustituye "Elizondo" por "Parma" usando splice() y muestra el resultados por consola. */

const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"];

console.log(names);
console.log(names.slice(1,3));
names.splice(3,1,"Parma");
console.log(names);

/*5.- Convierte el array anterior (names) en un string de nombres separados por espacios. */

console.log(names.join(' '));

/* 6.- Crea la variable const sentence = "El perro de San Roque no tiene rabo". 
A continuación, conviértela en un array de palabras, y, luego, en otro de letras.*/

const sentence = "El perro de San Roque no tiene rabo";

const words = sentence.split(' ');
const letters = sentence.split('')

console.log(sentence);
console.log(words);
console.log(letters);

/* 7.- Diseña un programa (función) que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y 
deberá decir cuantos números son pares y cuantos son impares. 
La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico. ( permite detectar valores no numéricos).*/

let numbers = [];
let oddNumber = 0;
let evenNumber = 0;

function oddAndEven() {  
    
   while (true) {
    let input = parseInt(prompt('Ingrese un numero'));

        if (isNaN(input) || input === null) {
             break;
        } else if (input === 0){
            break;
        }
        numbers.push(input);
        
        if (input%2 === 0) {
            ++evenNumber;
        } else {
            ++oddNumber;
        }
      
   }
}

oddAndEven()

console.log(numbers);
console.log("Numeros impares ",oddNumber);
console.log("Numeros pares ",evenNumber);

/*8.- Un servicio de atención al cliente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana se encarga del servicio una persona: 
Lunes - María; Martes - Luis; Miércoles - Antonia; Jueves - Pedro; Viernes - Marisa; Sábado y Domingo - Sin Servicio.
Usa un array para almacenar los datos del servicio. En este array cada elemento será un par [día - nombre]. 
Crea una función que responda con el nombre de la persona encargada del servicio sabiendo el día. Si le pido servicio('Lunes') me debería decir "Este día se encarga María" y si le pido servicio(Miércoles") me daría Antonia.
*/

let days = prompt("Ingrese el dia")
let daysServices= days.toLowerCase()

function service(daysServices) {
    const services = [["lunes", 'Maria'], 
                    ["martes","Luis"],
                    ["miercoles","Antonia"],
                    ["jueves","Pedro"],
                    ["viernes","Marisa"],
                    ["sabado","Sin servicio"],
                    ["domingo","Sin servicio"]
];

    let index; 

    for (let index = 0; index < services.length; index++) {
        if (services[index][0] === daysServices) {
            return `Este dia estara encagado del servicio ${services[index][1]}.`
        }
    }
    return "Dia no valido."
}

console.log(service(daysServices));

/* 9.- Una tienda vende monitores, teclados y ratones. Los precios se almacenan en una estructura array donde cada elemento 
es un par [producto - precio]. Diseña una función que reciba como argumento el nombre de un producto (minúscula o mayúscula) 
y devuelva su precio. Si la lista de precios es monitor: 200€, teclado: 20€ ratón: 10€, al pedir precio('monitor') me devolverá 200.
*/

let entrace = prompt('Ingrese producto');
let product = entrace.toLowerCase();

function priceProduct(product) {
    const inventory = [
                        ['monitor','200€'], 
                        ['teclado','20€'], 
                        ['raton', '10€']
                    ];

                    let index;
                    for (let index = 0; index < inventory.length; index++) {;
                        if (inventory[index][0] === product) {
                            return `El precio es ${inventory[index][1]}`
                        }
                    }
                    return `Producto no encontrado.`
}

console.log(priceProduct(product));