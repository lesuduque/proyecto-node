import express  from "express";
import { dataBase } from './database/dataBase.js';
import { productoRouter } from './router/productoRouter'


app.use('productoRouter', productoRouter)

try {
    await dataBase.authenticate()
    console.log("Conexión exitosa")
} catch (error) {
    console.log(error)
}

const app = express();

app.listen(3100, ()=>{
    console.log ('Servidor corriendo en el puerto 3100')
    console.log ('http://localhost:3100')
})