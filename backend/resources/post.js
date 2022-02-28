/**
 * post
 * 
 * Contiene todos los procesos al post de la aplicacion
 * 
 */
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (app, connection, protectedRoute) => {

  /**
   * getPostProfile
   * 
   * Permite consultar los post realizados por un usuario
   */
    app.post('/api/post/getPostProfile',  (req, res) => {
      connection.query(
          `SELECT  
                a.idpost, 
                a.description, 
                a.idUser, 
                DATE_FORMAT(a.date, "%W %M %e %Y %r") AS date,
                b.fullName
            FROM post a 
              INNER JOIN users b
              ON b.userId = a.idUser
            WHERE a.idUser = ${req.body.userId} 
            ORDER BY a.date DESC`, 
        (err, result) => {
          if(err) throw err
      
          return res.json(result)
      
      })      
    })

    /**
     * getPostHome
     * 
     * Permte consultar los posts de los amigos de un usuario
     */
    app.post('/api/post/getPostHome',  (req, res) => {
      connection.query(
          `SELECT  a.idpost, 
                a.description, 
                a.idUser, 
                DATE_FORMAT(a.date, "%W %M %e %Y %r") AS date,
                      c.fullName
            FROM post a 
            INNER JOIN friends b
              ON b.userFriendId = a.idUser
                  AND userId = ${req.body.userId} 
            INNER JOIN users c
              ON a.idUser = c.userId
            ORDER BY a.date DESC`, 
        (err, result) => {
          if(err) throw err
      
          return res.json(result)
      
      })      
    })

    /**
     * addPost
     * 
     * Permite el registro de un post
     */
    app.post('/api/post/addPost',  (req, res) => {
      connection.query(`INSERT INTO post (description, idUser) VALUES ('${req.body.description}', ${req.body.userId})`, (err, result) => {
          if(err) throw err
      
          return res.json({ msg: "Informacion insertada" })
      
      })      
    })
}