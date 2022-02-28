const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (app, connection, protectedRoute) => {

    app.post('/api/comments/getComment',  (req, res) => {
      connection.query(
          `SELECT a.idcomments,
                  a.comment,
                  DATE_FORMAT(a.date, "%W %M %e %Y %r") AS date,
                  b.fullName
          FROM comments a
          INNER JOIN users b
            ON b.userId = a.idUser
          WHERE a.idPost = ${req.body.idPost} 
          ORDER BY a.date DESC`, 
        (err, result) => {
          if(err) throw err
      
          return res.json(result)
      
      })      
    })

    app.post('/api/comments/addComment',  (req, res) => {
      connection.query(`INSERT INTO comments (comment, idUser, idPost) VALUES ('${req.body.comment}', ${req.body.userId}, ${req.body.idPost})`, (err, result) => {
          if(err) throw err
      
          return res.json({ msg: "Informacion insertada" })
      
      })      
    })
}