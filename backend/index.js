const express = require('express')
const app     = express()
const cors    = require('cors')
const jwt     = require('jsonwebtoken')
const mysql   = require('mysql')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'talkfriendsdb'
  })

const protectedRoute = (req, res, next) => {
    const token = req.headers["authorization"]
    if(!token)
        return res.status(401).json({ error: "Unauthorized" })

    jwt.verify(token, 'secretKey', (err, decoded) => {
        if(err)
        return res.status(401).json({ error: "Unauthorized" })
        
        req.decoded = decoded
        next()
    })
}
  
  
require('./resources/users.js')(app, connection, protectedRoute)

app.listen(4000,() => {
    console.log("El servidor funciona en el puerto 4000")
})