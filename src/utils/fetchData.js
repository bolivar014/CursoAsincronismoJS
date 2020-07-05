// Instancia al llamado de una API desde JS
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// URL de la API
let API = 'https://rickandmortyapi.com/api/character/';


    // Fetch Traer los datos desde la API
    const fetchData = (url_api) => {
        return new Promise((resolve, reject) => {
            // Genera una instancia a la referencia del objeto
            const xhttp = new XMLHttpRequest();

            // Abre un llamado a una URL ('GET' -> TIPO DE PETICION, url_api -> la URL desde la cual se obtendra la data, true -> que sea asincrona)
            xhttp.open('GET', url_api, true);

            // Si obtiene un cambio, si recibe valores desde el API realiza una función
            xhttp.onreadystatechange = (() => {
                // Verifico el estado del Callback === 4 "Completado"
                if(xhttp.readyState === 4){
                    // Expresion Ternaria 
                    (xhttp.status === 200) 
                        ? resolve(JSON.parse(xhttp.responseText))
                        : reject(new Error('Error: ', url_api))
                }
            });
            // Enviar la Solicitud
            xhttp.send();
        });
    }

// Exportar modulos con NODE.JS
module.exports = fetchData; 