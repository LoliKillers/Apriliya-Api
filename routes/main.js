__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/docs/home.html')
})

router.get('/docs', (req, res) => {
	res.sendFile(__path + '/docs/dashboard.html')
})

router.get('/docs/photooxy', (req, res) => {
	res.sendFile(__path + '/api/photooxy.html')
})

router.get('/docs/media', (req, res) => {
	res.sendFile(__path + '/api/media.html')
})

router.get('/docs/anime', (req, res) => {
	res.sendFile(__path + '/api/anime.html')
})

router.get('/docs/game', (req, res) => {
	res.sendFile(__path + '/api/game.html')
})

router.get('/docs/other', (req, res) => {
	res.sendFile(__path + '/api/other.html')
})

router.get('/docs/downloader', (req, res) => {
	res.sendFile(__path + '/api/downloader.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'Multi Prefix',
            namabot: 'AR BotZ',
            namaowner: 'Loli Killer',
            instagram: 'ariasu_62',
            github : 'https:\/\/github.com\/LoliKillers',
        }
    }
    res.json(config)
})

module.exports = router
