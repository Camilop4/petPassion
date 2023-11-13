const { Router } = require('express');
const { Producto } = require("../db");


const router = Router();


router.get( ('/', async (req, res) =>{
    console.log('ruta de productos');
    try {
        const productos = await Producto.findAll();
        res.status(200).send({ productos });
    } catch (error) {
        res.status(400).send( {error: error.message })
    }
}));

router.get("/:nombre", async (req, res) => {
    console.log("busqueda por nombre success");
    try {
        const nombre = req.params.nombre;
        const results = await Producto.findAll();
        if (results) {
            const nombreProd = results.filter((e) =>
               e.nombre && e.nombre.toLowerCase().includes(nombre.toLowerCase())
            );
            if(nombreProd.length > 0) {
                res.status(200).send(nombreProd);
            } else {
                res.status(404).send("no hay existencias del producto");
            }
        } else {
            res.status(404).send("Producto no existe");
        }
    } catch (error) {
        res.status(500).send( {error: error.message} );
    }
});

router.get("/id/:id", async (req, res) => {
    console.log("buesqueda por id success");
    try {
        const id = req.params.id;
        const productoId = id.trim();
        const producto = await Producto.findByPk(productoId);
        if (!producto) {
            res.status(404).send("No se Encontro el Producto");
        } else {
            res.status(200).send(producto);
        }
    } catch (error) {
        res.status(500).send( {error: error.menssage });
    }
});

router.post("/create", async (req, res) => {
    console.log("Insertar un producto");
    try {
        const { nombre, descripcion, diseño, color, cantidad, precio, imagen, categoria, rating, numRewiews, active, categoriaId } = req.body;
        const newProducto = await Producto.create({ nombre, descripcion, diseño, color, cantidad, precio, imagen, categoria, rating, numRewiews, active, categoriaId });
        res.status(201).send(newProducto);
    } catch (error) {
        res.status(400).send({error: error.message});
    }
})

router.post("/bulk", async (req, res) => {
    console.log('estoy en la ruta bulk de crear');
    try {
        const data = req.body;
        const newProducto = Producto.bulkCreate(data);
        res.status(201).send(newProducto);
    } catch (error) {
        res.status(400).send( {error: error.message });
    }
    
});

router.put("/:id", async(req, res) => {
    console.log("Actualizar Producto succes");
    const id = req.params.id;
    const updateProducto = req.body; 
    try {
        const producto = await Producto.findByPk(id);
        if(!producto) {
            res.status(400).send({ error: 'Producto no Encontrado'});
        }
        await producto.update(updateProducto);
        res.status(200).send(producto);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
})


module.exports = router;