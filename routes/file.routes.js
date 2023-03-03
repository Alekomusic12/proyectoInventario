const express = require('express')
const router = express.Router()
const controladorPeoduct = require('../controller/fileController')

//ruta contacto
router.post('/create-product',controladorPeoduct.createProduct)

module.exports = router