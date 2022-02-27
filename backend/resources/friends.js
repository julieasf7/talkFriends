const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (app, connection, protectedRoute) => {

    app.post('/api/friends/listFriends', protectedRoute, (req, res) => {
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

    app.post('/api/friends/addFriends', protectedRoute, (req, res) => {
      connection.query(`INSERT INTO friends (userId, userFriendId) VALUES (${req.body.userId}, ${req.body.userIdAdd})`, (err, result) => {
          if(err) throw err
      
          return res.json({ msg: "Informacion insertada" })
      
      })      
    })

    app.post('/api/friends/deleteFriends', protectedRoute, (req, res) => {
      connection.query(`DELETE FROM friends WHERE idfriends = ${req.body.idFriends}`, (err, result) => {
          if(err) throw err
      
          return res.json({ msg: "Registro eliminado" })
      
      })      
    })
}