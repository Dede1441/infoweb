
const News = require('../../model/news')

exports.render = async function (req, res) {
  const defaultComponent = new News(req, res)

  await defaultComponent.initialize()

  const newsList = defaultComponent.getNews()

  res.render('news.html', { newsItem: newsList })
}
