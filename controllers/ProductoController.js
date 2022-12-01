import Producto from "../models/ProductoModel"

const crearProducto = async (req, res) => {
    try {
        Producto.create(req.body)
        res.json({
            message: "Usuario creado correctamente"
        })        
    } catch (error) {
        res.json({
            message:"No es posible registrar el producto  ${error}"
        })
    }

}

const listarProductos = () => {

}

const listarProducto = () => {

}

const editarProducto = () => {

}

const eliminarProducto = ()=>{

}

export{
    crearProducto,
    listarProducto,
    listarProductos,
    editarProducto,
    eliminarProducto,
}