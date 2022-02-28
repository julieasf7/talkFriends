const express = require('express')
const app     = express()
const cors    = require('cors')
const jwt     = require('jsonwebtoken')
const mysql   = require('mysql')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

/**
 * Creacion de la conexion a la DB
 */
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'talkfriendsdb'
  })

  /**
   * Permite la verificacion del token enviado a la api y protegerla
   * en caso de enviarse un token incorrecto
   * 
   * @param {*} req Contiene los atributos enviados al proceso
   * @param {*} res Contiene la respuesta del proceso
   * @param {*} next Permite continuar con los procesos despues de la verificacion
   * @returns 
   */
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
  
/**
 * Modelos implementados en el proyecto
 */  
require('./resources/users.js')(app, connection, protectedRoute)
require('./resources/friends.js')(app, connection, protectedRoute)
require('./resources/post.js')(app, connection, protectedRoute)
require('./resources/profile.js')(app, connection, protectedRoute)
require('./resources/comments.js')(app, connection, protectedRoute)

/**
 * Se configura el puerto en el que se ejecutara el proyecto
 */
app.listen(4000,() => {
    console.log("El servidor funciona en el puerto 4000")
})