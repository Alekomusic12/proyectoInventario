const express = require ('express')
const router = express.Router()
const { createProduct }= require('./../controller/fileController')

//ruta contacto
router.post('/create-product', createProduct)

module.exports = router