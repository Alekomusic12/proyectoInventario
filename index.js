const express = require('express');
const app = express();
const dataBaseConection = require('./config/config')
const port = 4001

dataBaseConection()

app.listen(() => {
    console.log(`Server is listenning on port ${ port }`)
})