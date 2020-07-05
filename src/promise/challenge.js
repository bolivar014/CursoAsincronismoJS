// Requerimos fetchData dentro de la carpeta utils
const fetchData = require("../utils/fetchData")
// URL de la API
const API = 'https://rickandmortyapi.com/api/character/';

// Recibimos los datos de la API asignada anteriormente
fetchData(API) 
    // Se obtiene los datos del primer llamado
    .then(data => {
        console.log(data.info.count);
        // Retorna los datos de la primera petición
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.log(err))
