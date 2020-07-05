// Instancia al llamado de una API desde JS
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// URL de la API
let API = 'https://rickandmortyapi.com/api/character/';


    // Fetch Traer los datos desde la API
    function fetchData(url_api, callback) {
        // Genera una instancia a la referencia del objeto
        let xhttp = new XMLHttpRequest();

        // Abre un llamado a una URL ('GET' -> TIPO DE PETICION, url_api -> la URL desde la cual se obtendra la data, true -> que sea asincrona)
        xhttp.open('GET', url_api, true);

        // Si obtiene un cambio, si recibe valores desde el API realiza una función
        xhttp.onreadystatechange = function (event) {
            // Verifico el estado del Callback === 4 "Completado"
            if(xhttp.readyState === 4){
                // Estado 200  -> Cargo Correctamente
                if(xhttp.status === 200) {
                    // Estructura de los callback(Error, CadenadeTexto); 
                    callback(null, JSON.parse(xhttp.responseText));
                } else {
                    // En caso de obtener un error desde la API
                    const error = new Error('Error: ' + url_api);
                    return callback(error, null);
                }
            }
        }

        // Enviar la Solicitud
        xhttp.send();
    }

    // Api para obtener los datos 
    fetchData(API, function(error1, data1){
        if(error1) return console.error(error1);                      // En caso que exista algun error, lo IMPRIMIMOS, sino
        fetchData(API + data1.results[0].id, function(error2, data2){ // Recupera los datos del personaje
            if(error2) return console.error(error2);                  // En caso que exista algun error, lo IMPRIMIMOS, sino  
            fetchData(data2.origin.url, function (error3, data3){     // Recupera los datos de la dimensión
                if(error3) return console.error(error3);              // En caso que exista algun error, lo IMPRIMIMOS, sino
                // Imprimimos los valores
                console.log(data1.info.count);  
                console.log(data2.name);
                console.log(data3.dimension);
            });
        });    // Recupera el primer resultado de la API
    })


