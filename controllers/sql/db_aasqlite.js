const sqlite = require('aa-sqlite')

let options = {}

class DbSqlite {
  constructor () {
    options = {
      fileName: './db/univ.db'
    }
  }

  async startConnexion () {
    await sqlite.open(options.fileName)
  }

  async query (aQuery, anArgList) {
    return await sqlite.all(aQuery, [])
  }

  async close () {
    await sqlite.close()
  }
}

module.exports = DbSqlite
