require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//Crear el servidor de express
const app = express();

//Configurar cors
app.use( cors() );

console.log( 'Hola, estoy intentando arreglar mi problema con git' );

//Base de datos
dbConnection();

//console.log( process.env );

//Rutas
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })

} );


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
})
