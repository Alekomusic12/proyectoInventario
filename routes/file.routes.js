const express = require ('express')
const router = express.Router()
const { createProduct }= require('./../controller/fileController')

//ruta contacto
router.post('/create-product',() => {
    console.log('pasa por aca')
}  ,createProduct)

module.exports = router