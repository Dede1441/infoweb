exports.start = function (req, res) {
    // Ici on fait nos pré-traitement (accès SQL, WebServices, etc.)

    var now = new Date(Date.now());

    res.render('news.html', { title: 'News du ' + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() });
    
    console.log('HTTP Referer : ' + req.headers.referer  + " ; Path : " + req.url)
}