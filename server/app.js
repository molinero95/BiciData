require("daemon");
const express = require("express");//express
const fs = require("fs");
const https = require("https");
const cors = require("cors");//peticiones entre dominios dif

let privateKey = fs.readFileSync("./clave.pem");
let cert = fs.readFileSync("./certificado_firmado.crt");

let app = express();

let server = https.createServer({ key: privateKey, cert: cert }, app);
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
        response.json(res);
    });
});

app.get("/accidentesFecha", (request, response) => {
    fs.readFile('./datos/accidentesFecha.txt', (err, data) => {
        var line = data.toString().split('\n');
        var res = [];
        line.forEach(elem =>{
            var datos = elem.split('\t');
            if(datos[1]){
                var ob = {
                    mes: datos[0].trim(),
                    accidentes: datos[1],
                }
                res.push(ob);
            }
            ob = new Object();
        });
        response.json(res);
    });
});

app.get("/accidentesDistritosHoras", (request, response) => {
    fs.readFile('./datos/accidentesDistritosHoras.txt', (err, data) => {
        var line = data.toString().split('\n');
        var res = [];
        line.forEach(elem =>{
            var datos = elem.split('\t');
            if(datos[1]){
                var ob = {
		    lugar: datos[0].trim(),
                    accidentes: datos[1],
                    hora: datos[2].trim(),
                }
                res.push(ob);
            }
            ob = new Object();
        });
        response.json(res);
    });
});


server.listen(5000, function (err) {
    if (err) {
        console.log("No se ha podido iniciar el servidor.")
        console.log(err);
    } else {
        console.log(`Servidor escuchando en puerto 5000.`);
    }
});

//http://www.lauradhamilton.com/how-to-set-up-a-nodejs-web-server-on-amazon-ec2
