const Sql = require('../controllers/sql/db_aasqlite')

let connexion = null

class News {
  constructor (req, res) {
    this.req = req
    this.res = res

    connexion = new Sql()
  }

  async initialize () {
    await connexion.startConnexion()
    await this.getNewsList()
    await connexion.close()
  }

  async getNewsList () {
    try {
      this.news = await connexion.query('SELECT country, destination, photo, description FROM voyages ORDER BY country')
    } catch (anError) {
      console.log('Error to get news !')

      // See error from SQL news
      // console.log(anError);
    }
  }

  getNews () {
    return this.news
  }
}

module.exports = News