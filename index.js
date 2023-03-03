const express = require('express');
const app = express();
const dataBaseConection = require('./config/config')
const api = require('./routes/file.routes')
const port = 4001

dataBaseConection()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', api)


app.listen(() => {
    console.log(`Server is listening on port ${ port }`)
})