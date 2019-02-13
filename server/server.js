const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json())

const port = 4850

app.listen(port, () => {
    console.log(`The magic be happening on port ${port}`)
})