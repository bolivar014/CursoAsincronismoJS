// Declaro una promesa Async
const doSomethingAsync = () => {
    // Retorno la promesa en el momento que se ejecute
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)  
            : reject(new Error ('Test Error'))   
    });
}

// Ejecuto la promesa en el momento que sea necesario
const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

// Imprimo los valores
console.log('Before1');
doSomething();
console.log('After1');

// Capturar Errores 
const anotherFunction = async() => {
    try {
        const something = await doSomethingAsync();
        console.log(something); // Imprimo el valor
    } catch (err) {
        console.error(err);     // Imprimo Error
    }
}


// Imprimo los valores
console.log('Before2');
anotherFunction();
console.log('After2');
