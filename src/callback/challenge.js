// Instancia al llamado de una API desde JS
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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


