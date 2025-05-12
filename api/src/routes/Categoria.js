const { Router } = require('express');
const { Categoria, Producto } = require("../db");



const router = Router();

router.get("/", async (req, res) => {
    console.log("Ruta principal Categorias");
    try {
        const allCategorias = await Categoria.findAll();
        res.status(200).send(allCategorias);
    } catch (error) {
        res.status(404).send({error: error.message});
    }
});

//Ruta de busqueda de productos por categoria
router.get("/:categoria", async (req, res) => {
    console.log("busqueda de productos por categoria success");
    try {
        const {categoria} = req.params;
        //console.log(categoria);
        //Logica para buscar todos los productos que pertenezcan a la categoria proporcionanda en params
        const productosByCategoria = await Producto.findAll({
            where: {},
            include: [{
                model: Categoria,
                where: {nombre: categoria },
                attributes: [],
                foreignKey: 'categoriaId',
            }],
            //logging: console.log, // Muestra la consulta SQL en la consola
        })
        //console.log(productosByCategoria);

        if(productosByCategoria.length === 0) {
            return res.status(404).json({ error: "No se encontraron productos en esta categoria" });
        }

        res.status(200).json(productosByCategoria);
    } catch (error) {
        console.error("Error al obtener productos por categoria:", error);
        res.status(500).json({ error: "Error interno del servidor"});
    }
});

router.post("/create", async (req, res) => {
    console.log("Insertar una categoría");
    try {
        const { nombre, imagen } = req.body;
        const newCategoria = await Categoria.create({ nombre, imagen });
        res.status(201).send(newCategoria);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.post("/bulk", (req, res) => {
    console.log('Agragar todas las categorias success');
    try {
        const data = req.body;
        const newCategoria =  Categoria.bulkCreate(data);
        res.status(201).send(newCategoria);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

module.exports = router;