const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (app, connection, protectedRoute) => {
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
    
    app.post('/api/users/register', (req, res) => {
        bcrypt.hash(req.body.password, 10, (err, password) => {
            connection.query(`INSERT INTO users (fullName, email, password) VALUES ('${req.body.fullName}', '${req.body.email}','${password}')`, (err, result) => {
                if (err) throw err
        
                var userData = {
                    email: req.body.email
                }
        
                jwt.sign(userData, 'secretKey', { }, (err, token) => {
                if(err) throw err
                    res.json({ token: token, id: result.insertId, username: req.body.fullName, email: userData.email })
                })
            })
        })      
    })

    app.post('/api/users/listUsers', protectedRoute, (req, res) => {
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

    app.post('/api/users/listFriends', protectedRoute, (req, res) => {
      connection.query(
          `SELECT 
          a.idfriends,
          b.userId, 
            b.fullName, 
            b.email
        FROM friends a
        LEFT JOIN users b
          ON b.userId = a.userFriendId
        WHERE a.userId = ${req.body.userId}`, 
        (err, result) => {
          if(err) throw err
      
          return res.json(result)
      
      })      
    })

    app.post('/api/users/addUser', protectedRoute, (req, res) => {
      connection.query(`INSERT INTO friends (userId, userFriendId) VALUES (${req.body.userId}, ${req.body.userIdAdd})`, (err, result) => {
          if(err) throw err
      
          return res.json({ msg: "Informacion insertada" })
      
      })      
    })

    app.post('/api/users/deleteFriends', protectedRoute, (req, res) => {
      connection.query(`DELETE FROM friends WHERE idfriends = ${req.body.idFriends}`, (err, result) => {
          if(err) throw err
      
          return res.json({ msg: "Registro eliminado" })
      
      })      
    })
}