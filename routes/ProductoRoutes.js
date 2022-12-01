import express  from "express";
import { crearProducto } from "../controllers/ProductoController";

const productoRouter = express.Router() //instanciando

productoRouter.post('/', crearProducto)

export {
    productoRouter
}

