const express = require('express');
const app = express();
const dataBaseConection = require('./config/config')
const rutaApi = require('./routes/file.routes')
const port = 4001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


dataBaseConection()

app.use('/', rutaApi)



app.listen(() => {
    console.log(`Server is listenning on port ${ port }`)
})