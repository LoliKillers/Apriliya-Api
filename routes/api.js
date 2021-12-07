require("rootpath")();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cheerio = require("cheerio");
const needle = require("needle");
/*const fetch = (...args) => import('node-fetch').then(({
    default: fetch
    }) => fetch(...args));*/
const fs = require("fs");
const request = require("request");

const listkey = ['demo']
const keyloli = 'Indun'

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
})

//==========[ END DOWNLOADER  ]==========//

module.exports = router