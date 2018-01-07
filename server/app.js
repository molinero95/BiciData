
const express = require("express");//express
const fs = require("fs");
const https = require("https");
const cors = require("cors");//peticiones entre dominios dif

let app = express();
app.use(cors());

let clavePriv = fs.readFileSync("./clave.pem");
let certificado = fs.readFileSync("./certificado_firmado.crt");

let servidor = https.createServer({ket: clavePriv, cert: certificado}, app);


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

servidor.listen(5000, function (err) {
    if (err) {
        console.log("No se ha podido iniciar el servidor.")
        console.log(err);
    } else {
        console.log(`Servidor escuchando en puerto 5000.`);
    }
});

//http://www.lauradhamilton.com/how-to-set-up-a-nodejs-web-server-on-amazon-ec2
