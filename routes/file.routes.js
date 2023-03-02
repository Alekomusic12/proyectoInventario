const express = require ('express')
const router = express.Router()
const fileController = require('./../controller/fileController')

//ruta contacto
router.post('/create-product',fileController)



module.exports = router