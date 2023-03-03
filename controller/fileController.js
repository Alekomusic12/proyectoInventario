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

