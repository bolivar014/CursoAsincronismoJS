// Promesa "Algo va a Pasar"
const somethingWillHappen = () => {
    // retorno una nueva promesa con dos parametros "Resolve" si se ejecuta correctamente y "reject" en caso que no
    return new Promise((resolve, reject) => {
        // Verifico la promesa
        if(true) {  // En caso que sea verdadero
            resolve('Hey!');
        } else {    // De lo Contrario
            reject('Whooops!');
        }
    });
};


// Ejecutamos la promesa
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

// ----------------------------------------------

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whooop!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    
// ----------------------------------------------

// Retornar Arreglo de promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results: ', response)
    })
    .catch(err => {
        console.error(err);
    })