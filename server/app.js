
const express = require("express");//express
const fs = require("fs");
const cors = require("cors");//peticiones entre dominios dif

const app = express();
app.use(cors());

app.get("/", (request, response) => {
    response.send("Hola mundo");
});

app.get("/accidentesDistrito", (request, response) => {
    fs.readFile('./datos/accidentesDistrito.txt', (err, data) => {
        var line = data.toString().split('\n');
        var res = [];
        line.forEach(elem =>{
            var datos = elem.split('\t');
            if(datos[1]){
                var ob = {
                    accidentes: datos[0],
                    lugar: datos[1].trim(),
                }
                res.push(ob);
            }
            ob = new Object();
        });
        console.log(res);
        response.json(res);
    });
});

app.listen(3000, function (err) {
    if (err) {
        console.log("No se ha podido iniciar el servidor.")
        console.log(err);
    } else {
        console.log(`Servidor escuchando en puerto 3000.`);
    }
});

//http://www.lauradhamilton.com/how-to-set-up-a-nodejs-web-server-on-amazon-ec2
