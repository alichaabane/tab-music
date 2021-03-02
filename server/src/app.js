const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
// used to allow any client or host to access server from any place around world
app.use(cors())
// or post or put etc... so to send or get request to 'status' endpoint
app.get('/status', (req,res) =>{
    res.send({
        message: 'Hello Guys'
    })
})
app.listen(process.env.PORT || 8081)