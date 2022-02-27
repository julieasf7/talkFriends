const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (app, connection, protectedRoute) => {

    app.post('/api/profile/getInfo',  (req, res) => {
      connection.query(
          `SELECT  idprofile, 
                  about, 
                  birthdayDate,
                  live,
                  web 
          FROM profile
          WHERE userId = ${req.body.userId}`, 
        (err, result) => {
          if(err) throw err
      
          return res.json(result[0])
      
      })      
    })

    app.post('/api/profile/addProfile',  (req, res) => {
      connection.query(`INSERT INTO profile (userId, about, birthdayDate, live, web) VALUES ('${req.body.user}','${req.body.about}', '${req.body.date}', '${req.body.live}', '${req.body.site}')`, (err, result) => {
          if(err) throw err
      
          return res.json({ msg: "Informacion insertada" })
      
      })      
    })

    app.post('/api/profile/updateProfile',  (req, res) => {
      connection.query(`
        UPDATE profile SET 
          about        = '${req.body.about}', 
          birthdayDate = '${req.body.date}', 
          live         = '${req.body.live}', 
          web          = '${req.body.site}'
        WHERE userId = '${req.body.user}'`, (err, result) => {
          if(err) throw err
      
          return res.json({ msg: "Registro actualizado" })
      
      })      
    })
}