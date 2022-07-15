const http = require('http');
//const { listenerCount } = require('process');

let servidor = http.createServer().listen(80);

servidor.on('request', function(req, res){
    res.writeHeader(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

    let regalos = {"datos": [{"id_regalo":1,"descripcion":"Globo rojo metálico","costo":150.35,"estrellas_promedio":4,"id_categoria":1},{"id_regalo":2,"descripcion":"Globo transparente Cumpleaños","costo":200.99,"estrellas_promedio":5,"id_categoria":1},{"id_regalo":3,"descripcion":"Globo metálico azul","costo":145,"estrellas_promedio":3,"id_categoria":1},{"id_regalo":4,"descripcion":"Osito Teddy Bear","costo":250,"estrellas_promedio":5,"id_categoria":2},{"id_regalo":5,"descripcion":"Panda bear","costo":290.5,"estrellas_promedio":4,"id_categoria":2},{"id_regalo":6,"descripcion":"Cupcakes Chocolate","costo":147.56,"estrellas_promedio":4,"id_categoria":3},{"id_regalo":7,"descripcion":"Cervezas importadas","costo":450.61,"estrellas_promedio":4,"id_categoria":4}]};

    res.end(JSON.stringify(regalos));

    });