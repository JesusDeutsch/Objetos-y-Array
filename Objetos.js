/*1.- Crea un objeto llamado citizen1 y dale las propiedades name, lastname y age. Elige tú los valores. */

const citizen1 = {
    name: 'Jesus',
    lastName: 'Aleman',
    age: 30,
}

/*2.- Una vez creado, añádele la propiedad city, con el valor que tú quieras, y cambia el valor de la propiedad age. Comprueba que los cambios han surtido efecto. */

citizen1.city = 'Madrid';

console.log(citizen1);

/*3.- Crea una función checkCitizenship que acepte como parámetro un objeto, compruebe la edad del ciudadano y, 
si ésta es mayor de 18, añada la propiedad canVote: true; de lo contrario, debe añadir canVote: false. Usala con el objeto citizen1. */

function checkCitizenship() {


    if (citizen1.age> 18) {
        citizen1.canVote = true;
    } else {
        citizen1.canVote = false;
    }
}
checkCitizenship(citizen1);
console.log(citizen1);

/*4.- Crea una función llamada createCitizen que acepte 3 strings: nombre, apellido y edad. Si los parámetros 
son válidos, debe retornar un nuevo objeto y almacenarlos en un array. */

let citizen = [];

function createCitizen(userName,lastName, age) {
    if (typeof userName === 'string'&& typeof lastName === 'string' && typeof age === 'string') {
        
        let newCitizen = {
            name: userName,
            lastName: lastName,
            age: age,
        }
        citizen.push(newCitizen);
        return newCitizen


    } else {
        alert('Parametros no validos')
    }
}

createCitizen( prompt('Ingrese su nombre'), prompt('Ingrese su apellido'), prompt('Ingrese su edad'));
console.log(citizen);