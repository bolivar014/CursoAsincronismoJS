// Requerimos fetchData dentro de la carpeta utils
const fetchData = require("../utils/fetchData")
// URL de la API
const API = 'https://rickandmortyapi.com/api/character/';

// Evento Asincrono
const anotherFunction = async (url_api) => {
    // En caso de que se ejecute correctamente
    try {
            // Recupero los datos que hay en la API
            const data = await fetchData(url_api);
            const character = await fetchData(`${API}${data.results[0].id}`);
            const origin = await fetchData(character.origin.url);
            
            // 
            console.log(data.info.count);
            console.log(character.name);
            console.log(origin.dimension);

    } catch (err) { // En caso de suceder algun error, imprimirlo
        console.error(err);
    }
}

// Imprimir los resultados
console.log('Before');
anotherFunction(API);
console.log('After');