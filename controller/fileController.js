const File = require('./../models/File')


exports.createProduct = async(req, res) =>  {
    console.log(req.bodys)
    const { modelo,fabricante,precio,rutaImg,asignadoA,estado, tock, cedula  } = req.body  
    try { 
        const file = await File.findOne({ cedula: cedula })
        console.log(file)
        if(file) return res.status(400).json({
            ok: false,
            msg: 'la cedula ya existe, contacte a su administrador'
        })


        const dbFile = new File({
            modelo: modelo,
            fabricante: fabricante,
            precio:precio,
            rutaImg:rutaImg,
            asignadoA:asignadoA,
            estado:estado,
            tock:tock,
            cedula:cedula
        })
        await dbFile.save()
        return res.status(201).json({
            ok:true,
            msg:'el producto fue creado con exito',
            dbFile

        })
        
    } catch(error) {
        res.status(500).json({
            ok: false,
            msg: 'error en el servidor,contacte a su administrador'
        })
    }
}

exports.obtenerProduct = async(req, res) => {
    try {
        const{id} = req.params
        const file = await File.findById(id)
        if(!file) return res.status(404).json({
            ok: false,
            msg: 'el archivo solicitado no existe'
        })
         return res.status(200).json({
            ok:true,
            msg: 'la consulta fue exitosa',
            file

         })

    } catch (error) {
        res.status(404).send('Algo pasa a la hora de buscar un producto especifico')
        
    } }

    exports.deleteproduct = async(req, res) => {
        try {
            
        } catch (error) {
            res.status(403).send('algo pasa y no elmina el producto')
            
        }
    } 

    exports.modifyproducto = async(req, res) => {
        try {
            
        } catch (error) {
            res.status(500).send('algo pasa y no modifica')
        }
    }


    exports.obtenerProductos = async(req, res) => {
        try {
            const file = await File.find()
            return res.status(200).json({
                ok:true,
                file
            })
        } catch (error) {
            return res.status(500).json({
                ok:false,
                msg: 'ups el archivo esta en veremos, pero si se pude', 
            })
            
        }
    } 
    
