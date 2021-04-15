const mysql = require('mysql')

let connexion = null

class DbMySQL {
  constructor () {
    env.config()
    connexion = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'univ_smb'
    })
  }

  startConnexion () {
    connexion.connect(function (err) {
      if (err) return err
    })
  }

  query (aQuery, anArgList) {
    return new Promise((resolve, reject) => {
      connexion.query(aQuery, anArgList, (err, rows) => {
        if (err) { return reject(err) }
        resolve(rows)
      })
    })
  }

  close () {
    return new Promise((resolve, reject) => {
      connexion.end(err => {
        if (err) { return reject(err) }
        resolve()
      })
    })
  }
}

module.exports = DbMySQL
