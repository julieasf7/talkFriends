/**
 * friends
 * 
 * Contiene todos los procesos relacionados a la relacion
 * de amigos de un usuario
 * 
 */
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (app, connection, protectedRoute) => {

  /**
   * listFriends
   * 
   * Lista los amigos de un usuario en especifico
   */
    app.post('/api/friends/listFriends',  (req, res) => {
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

    /**
     * addFriends
     * 
     * Permite adicionar un nuevo amigo a un usuario en especifico
     */
    app.post('/api/friends/addFriends',  (req, res) => {
      connection.query(`INSERT INTO friends (userId, userFriendId) VALUES (${req.body.userId}, ${req.body.userIdAdd})`, (err, result) => {
          if(err) throw err
      
          return res.json({ msg: "Informacion insertada" })
      
      })      
    })

    /**
     * deleteFriends
     * 
     * Permite eliminar la relacion de un amigo con un usuario
     */
    app.post('/api/friends/deleteFriends',  (req, res) => {
      connection.query(`DELETE FROM friends WHERE idfriends = ${req.body.idFriends}`, (err, result) => {
          if(err) throw err
      
          return res.json({ msg: "Registro eliminado" })
      
      })      
    })
}