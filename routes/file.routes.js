const express = require('express')
const router = express.Router()
const controladorPeoduct = require('../controller/fileController')

//ruta contacto
router.post('/create-product',controladorPeoduct.createProduct)
router.get('/obtener-product/:id',controladorPeoduct.obtenerProduct)
router.get('/obtener-product',controladorPeoduct.obtenerProductos)
// router.delete('/delete-product',controlador.elmininarProduct)
// router.put('/modify-producto',controlado.modificarProduct)

module.exports = router