// Función para sumar dos valores
function sum(num1, num2) {
    return num1 + num2;
}

// Callback que recibe los num y hace que se calcule
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

// Calcula los valores enviados al callback e imprime el resultado
console.log(calc(5, 4, sum));

// Función obtiene la fecha actual cada 3 segundos
function date(callback) {
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, 3000)
}

// función para imprimir la fecha actual
function printDate(dateNow) {
    console.log(dateNow);
}

// 
date(printDate);