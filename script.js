/* 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos 
de 5 desde 1 hasta el número introducido por el usuario. */

/* let numeroPedido = parseInt(prompt("Por favor digite un numero"));
let i = 1

while (i <= numeroPedido) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
} */

/* 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50,
pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario. */

/* let numero1 = parseInt(prompt("Digite un número de 1 a 50"));
let numero2 = parseInt(prompt("Digite un numero de 1 a 50"))
let i = 1;

while (i <= 50) {
    if (i === numero1 || i === numero2) {
        console.log(i + "¡Lotería!");
    }else {
        console.log(i);
    }
    i ++;
} */

/* 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. 
Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola. */


/* let numero = [];

while (true) {
   let caracter = parseInt(prompt("Digite un caracter"));
   if (caracter === 0) {
       break;
   } else if (!isNaN(caracter)) {
       numero.push(caracter);
   } else {
       console.log("error");
   }
   console.log(numero); */
/*

/* 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. 
Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas. */

/* let pedirPalabras = " ";

let guardarPalabras = [];

while (pedirPalabras !== null && pedirPalabras !== "") {
    pedirPalabras = prompt("Digite palabras o letras");

    if(pedirPalabras !== null && pedirPalabras !== "") {
        guardarPalabras.push(pedirPalabras);
    }
    
}

let unir = guardarPalabras.join("");

console.log(`Union de todas las palabras ${unir}`); */


/* const y = []
let x = parseInt(prompt ("Escriba una letra o palabra"))

while (x !== "") {
    if (isNaN(parseInt(x))) {
        y.push (x);
    } else {
        alert ("Debe ingresar solo palabras o letras")
    }
    x=prompt("Escriba una letra o palabra, si no quieres ingresar mas numeros deja vacio")
}

console.log (y); */

/* 5. Crea un programa que solicite al usuario un día de la semana(ej: lunes, jueves, domingo, etc).El programa mostrará un mensaje personalizado 
para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo 
mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información */

let diaSemana = null

while (diaSemana !== "domingo") {
    diaSemana = prompt("Digite un dia de la semana")
    if(diaSemana === "lunes") {
        console.log("Empezamos semana");
    } else if(diaSemana === "martes") {
        console.log("Martes ni te cases ni te embarques");
    }else if(diaSemana === "miercoles") {
        console.log("Ya mitad de semana");
    }else if(diaSemana === "jueves") {
        console.log("😎🎉Juernes🤗");
    }else if(diaSemana === "viernes") {
        console.log("termina semana quiero descansar 😴😴😴");
    } else if(diaSemana === "sabado") {
        console.log("Para beber y bailar🍾🥂🍺");
    } else { 
        alert("Ve a descansar");
    } 
}