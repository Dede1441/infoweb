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
      console.log('Error to get destinations !')

      // See error from SQL news
      // console.log(anError);
    }
  }

  async setCommentary () {
    try {
      this.news = await connexion.query('INSERT INTO "main"."commentaire" ("id","commentaire","date") VALUES (id,input,date);')
    } catch (anError) {
      console.log('Error to set commentary !')

      // See error from SQL news
      // console.log(anError);
    }
  }
  async getcommentaireList () {
    try {
      this.news = await connexion.query('SELECT commentaire FROM commentaire ORDER BY date')
    } catch (anError) {
      console.log('Error to get commentaire !')

      // See error from SQL news
      // console.log(anError);
    }
  }
  
  getNews () {
    return this.news
  }
}

module.exports = News
