require("rootpath")();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cheerio = require("cheerio");
const needle = require("needle");
const fetch = (...args) => import('node-fetch').then(({
    default: fetch
}) => fetch(...args));
const fs = require("fs");
const request = require("request");

const listkey = ['demo']
const keyloli = 'Indun' //Silahkan dapatkan apikey di https://api.loli.loveslife.biz

Path = process.cwd()

const {
    fetchJson
} = require("lib/fetcher");

const router = express.Router();
const app = express()

router.use(express.json());
router.use(express.urlencoded());
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

msg = {
    noApikey: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Silahkan massukkan parameter apikey yang valid!!, tidak punya apikey? silahkan hubungi saya di wa.me/6285785445412!`
        }
    },
    limit: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Opss!, limit hari ini sudah habis!, limit akan diriset setiap jam 00:00 WIB!`
        }
    },
    noUsername: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Harap masukkan paremeter username yang benar!`
        }
    },
    noUrl: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Harap masukkan paremeter url yang benar!`
        }
    },
    error: {
        statusCode: 404,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Sepertinya terjadi kesalahan!, silahkan ulangi beberapa saat lagi`
        }
    },
    noEndpoint: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Harap masukkan paremeter endpoint yang benar dan sesuai list yang disediakan!`
        }
    },
    noSearch: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Harap masukkan paremeter search yang benar!`
        }
    },
    noLc: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Harap masukkan paremeter code bahasa yang benar!`
        }
    },
    noQuery: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Harap masukkan paremeter query yang benar!`
        }
    },
    noText: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Harap masukkan paremeter text yang benar!`
        }
    },
    noText2: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Harap masukkan paremeter text2 yang benar!`
        }
    },
    noSurah: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Harap masukkan paremeter surah yang benar!, surah berupa angka!`
        }
    },
    angka: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Parameter harus berupa angka!`
        }
    },
    noNama: {
        statusCode: 403,
        watashi: `@ariasu.xyz`,
        date: new Date(),
        result: {
            message: `Harap masukkan paremeter nama yang benar!`
        }
    },
}

//==========[ STALKER  ]==========//

router.get('/github_stalk', async (req, res, next) => {
    const apikey = req.query.apikey,
    username = req.query.username
    if (!username) return res.send(msg.noUsername)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/github_stalk?apikey=${keyloli}&username=${username}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})

router.get('/pinterest_stalk', async (req, res, next) => {
    const apikey = req.query.apikey,
    username = req.query.username
    if (!username) return res.send(msg.noUsername)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/pinterest_stalk?apikey=${keyloli}&username=${username}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})

//==========[ END STALKER  ]==========//
//==========[ DOWNLOADER  ]==========//

router.get('/tiktok_downloader', async (req, res, next) => {
    const apikey = req.query.apikey,
    url = req.query.url
    if (!url) return res.send(msg.noUrl)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/tiktok_downloader?apikey=${keyloli}&url=${url}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})
router.get('/youtubedl_mp3', async (req, res, next) => {
    const apikey = req.query.apikey,
    url = req.query.url
    if (!url) return res.send(msg.noUrl)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/youtubedl_mp3?apikey=${keyloli}&url=${url}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})
router.get('/youtubedl_mp4', async (req, res, next) => {
    const apikey = req.query.apikey,
    url = req.query.url
    if (!url) return res.send(msg.noUrl)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/youtubedl_mp4?apikey=${keyloli}&url=${url}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})
router.get('/youtubedl_mp4', async (req, res, next) => {
    const apikey = req.query.apikey,
    url = req.query.url
    if (!url) return res.send(msg.noUrl)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/youtubedl_mp4?apikey=${keyloli}&url=${url}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})
router.get('/ytplay_mp3', async (req, res, next) => {
    const apikey = req.query.apikey,
    search = req.query.search
    if (!search) return res.send(msg.noSearch)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/ytplay_mp3?apikey=${keyloli}&search=${search}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})
router.get('/ytplay_mp4', async (req, res, next) => {
    const apikey = req.query.apikey,
    search = req.query.search
    if (!search) return res.send(msg.noSearch)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/ytplay_mp4?apikey=${keyloli}&search=${search}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})
router.get('/instagram_story', async (req, res, next) => {
    const apikey = req.query.apikey,
    username = req.query.username
    if (!username) return res.send(msg.noUsername)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/instagram_story?apikey=${keyloli}&username=${username}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.data
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})
router.get('/instagram_downloader', async (req, res, next) => {
    const apikey = req.query.apikey,
    url = req.query.url
    if (!url) return res.send(msg.noUrl)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/instagram_downloader?apikey=${keyloli}&url=${url}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})
router.get('/youtube_search', async (req, res, next) => {
    const apikey = req.query.apikey,
    search = req.query.search
    if (!search) return res.send(msg.noSearch)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/youtube_search?apikey=${keyloli}&search=${search}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})

//==========[ END DOWNLOADER  ]==========//
//==========[ GAME KUIS  ]==========//

router.get('/cak_lontong', async (req, res, next) => {
    const apikey = req.query.apikey
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/cak_lontong?apikey=${keyloli}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.data
            })
        } else {
            res.json(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})

//==========[ END GAME KUIS  ]==========//
//==========[ INFO  ]==========//

router.get('/covid_id', async (req, res, next) => {
    const apikey = req.query.apikey
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/covid_id?apikey=${keyloli}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.json(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})

//==========[ END INFO  ]==========//
//==========[ OTHER  ]==========//

router.get('/jadwal_bioskop', async (req, res, next) => {
    const apikey = req.query.apikey
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/jadwal_bioskop?apikey=${keyloli}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.json(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})
router.get('/http_headers', async (req, res, next) => {
    const apikey = req.query.apikey,
    url = req.query.url
    if (!url) return res.json(msg.noUrl)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/http_headers?apikey=${keyloli}&url=${url}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.json(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})
router.get('/web_reader', async (req, res, next) => {
    const apikey = req.query.apikey,
    url = req.query.url
    if (!url) return res.json(msg.noUrl)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/web_reader?apikey=${keyloli}&url=${url}`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.json(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})

//==========[ END OTHER  ]==========//
//==========[ ANIME  ]==========//

router.get('/anime_nekos', async (req, res, next) => {
    const apikey = req.query.apikey
    try {
        if (listkey.includes(apikey)) {
            const hasil = `https://api.loli.loveslife.biz/api/anime_neko?apikey=${keyloli}`
            data = await fetch(hasil).then(v => v.buffer())
            await fs.writeFileSync(Path + '/tmp/nekos.png', data)
            res.sendFile(Path + '/tmp/nekos.png')

        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})

//==========[ END ANIME  ]==========//
//==========[ FUN  ]==========//

router.get('/simsimi_id', async (req, res, next) => {
    const apikey = req.query.apikey,
    query = req.query.query
    if(!query) return res.json(msg.noQuery)
    try {
        if (listkey.includes(apikey)) {
            const data = await fetchJson(`https://api.loli.loveslife.biz/api/simsimi?apikey=${keyloli}&query=${query}&lc=id`)
            res.json({
                statusCode: res.statusCode,
                watashi: `@ariasu.xyz`,
                date: new Date(),
                results: data.result
            })
        } else {
            res.send(msg.noApikey)
        }
    } catch (e) {
        console.log(e)
        res.json(msg.error)
    }
})

//==========[ END FUN  ]==========//

module.exports = router