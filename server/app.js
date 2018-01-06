const express = require("express");//express

const app = express();

app.get("/", (request, response) => {
    response.send("Hola mundo");
});

app.listen(3000, function (err) {
    if (err) {
        console.log("No se ha podido iniciar el servidor.")
        console.log(err);
    } else {
        console.log(`Servidor escuchando en puerto 80.`);
    }
});

//http://www.lauradhamilton.com/how-to-set-up-a-nodejs-web-server-on-amazon-ec2