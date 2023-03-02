const File= require('./../models/File')
const { request, response } = require('express')


const createProduct = async(req = request, res = response) =>  {
    const { modelo,fabricante,precio,rutaImg,asignadoA,estado, tock, cedula  } = req.body  
    try { 
        const file = await File.findOne({ cedula: cedula})
        if (file) return res.status(400).json({
            ok: false,
            msg: 'la cedula ya existe, contacte a su administrador'
        })

        file.create({
            modelo: modelo,
            fabricante: fabricante,
            precio:precio,
            rutaImg:rutaImg,
            asignadoA:asignadoA,
            estado:estado,
            tock:tock,
            cedula:cedula
        })
        res.status(201).json({
            ok:true,
            msg:'el producto fue creado con exito',
            file

        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'error en el servidor,contacte a su administrador'
        })
    }
}
module.exports = createProduct
