var path = require('path');
const items = require("./tasks.js");

const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/tasks/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(items))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})