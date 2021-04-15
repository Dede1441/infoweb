const db = require('mariadb')

let connexion = null
let options = {}

class DbMariaDB {
  constructor () {
    options = {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'univ_smb'
    }
  }

  async startConnexion () {
    connexion = await db.createConnection(options)
  }

  async query (aQuery, anArgList) {
    return await connexion.query(aQuery, anArgList)
  }

  async close () {
    await connexion.end()
  }
}

module.exports = DbMariaDB
