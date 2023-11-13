const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const routeProductos = require('./Producto');
const routeCategorias = require('./Categoria');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/producto', routeProductos);
router.use('/categoria', routeCategorias);




module.exports = router;