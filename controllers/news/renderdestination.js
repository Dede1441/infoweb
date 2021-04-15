
const News = require('../../model/destination')

exports.render = async function (req, res) {
  const defaultComponent = new News(req, res)

  await defaultComponent.initialize()

  const newsList = defaultComponent.getNews()

  res.render('destinations.html', { voyagesItem: newsList })
}
