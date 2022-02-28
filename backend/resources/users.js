/**
 * users
 * 
 * Contiene todos los procesos relacionados al usuario
 * 
 */

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (app, connection, protectedRoute) => {

    /**
     * login
     * 
     * Permite realizar el login a la aplicacion
     */
    app.post('/api/users/login', (req, res) => {
        connection.query(`SELECT userId, fullName, email, password from users where email = '${req.body.email}'`, (err, result) => {
            if(err) throw err
        
            if(!result[0])
              return res.json({ error: "Usuario no encontrado" })
        
            bcrypt.compare(req.body.password, result[0].password, (err, ok) => {
              if(!ok)
                return res.json({ error: "Contraseña incorrecta" })
              
              var userData = {
                id       : result[0].userId,
                username : result[0].fullName,
                email    : result[0].email
              }
          
              jwt.sign(userData, 'secretKey', { }, (err, token) => {
                if(err) throw err
                return res.json({ token: token, id: userData.id, username: userData.username, email: userData.email})
              })
            })
        })      
    })
    
    /**
     * register
     * 
     * Permite registrar un nuevo usuario
     */
    app.post('/api/users/register', (req, res) => {
        bcrypt.hash(req.body.password, 10, (err, password) => {
            connection.query(`INSERT INTO users (fullName, email, password) VALUES ('${req.body.fullName}', '${req.body.email}','${password}')`, (err, result) => {
                if (err) throw err
        
                var userData = {
                    id       : result.insertId,
                    username : req.body.fullName,
                    email    : req.body.email
                }
        
                jwt.sign(userData, 'secretKey', { }, (err, token) => {
                if(err) throw err
                    res.json({ token: token, id: result.insertId, username: req.body.fullName, email: userData.email })
                })
            })
        })      
    })

    /**
     * listUsers
     * 
     * Permite consultar la lista de usuarios
     */
    app.post('/api/users/listUsers',  (req, res) => {
      connection.query(
          `SELECT 
          a.userId, 
            a.fullName, 
            a.email
        FROM users a 
        LEFT JOIN friends b
          ON b.userFriendId = a.userId
            AND b.userId = ${req.body.userId}
        WHERE a.userId != ${req.body.userId}
        AND b.idfriends IS NULL`, 
        (err, result) => {
          if(err) throw err
      
          return res.json(result)
      
      })      
    })
}