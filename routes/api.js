__path = process.cwd()

var aexm = require('@lolikillers/aexm-api');
var express = require('express');
var db = require(__path + '/database/db');
try {
var lolkill = db.get("lolkill");
} catch (e) {
	console.log('')
}

var creatorList = ['Ari','Ari susanto','Rii','Pril','Lolkill','LoliKillers','Apriliya','Apriliya putri fatmawati','Apriliya Kingdom'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

keyapi = 'LoliKillers'

var axios = require('axios');
var qs = require('qs');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

_ = require('lodash')
__path = process.cwd();

loghandler = {
    error: {
        status: false,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    notapikey: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey anda',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Apriliya-Putri-Fatmawati'+'LOLI--KILLERS';
        
 
 async function cekApiKey(api) {
 	ap = await lolkill.findOne({apikey:api})
 return ap;
 }
 
 router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email;

    if (!apikey) return res.sendFile(__path + '/docs/403.html')
    if (!(apikeyInput && email)) return res.json(loghandler.notAddApiKey)
    if (apikey != `${keyapi}`) return res.json(loghandler.invalidKey)

    try {
        lolkill.insert({
            apikey: apikeyInput,
            email: email
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(__path + '/docs/503.html')
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.sendFile(__path + '/docs/403.html')
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})

router.get('/pxy_text_on_cup', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_3d_summer', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_3d_nature', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_wolf_metal', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_wood_heart', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_flower_heart', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_wooden_board', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_tiktok_effect', async (req, res, next) => {
             var text = req.query.text;
             var text2 = req.query.text2;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!text2) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_text_love', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_double_heart', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_coffee_cup', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_under_grass', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_text_on_cup2', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_romantic_text', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_text_burn_paper', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_shadow_text', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/jadwal_sholat', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	//if (!url) return res.json(loghandler.noturl)
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (isNaN(q)) return res.sendFile(__path + '/docs/406.html')
	//if (!apikey) return res.json(loghandler.notapikey)
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	//if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.sholat(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/surah', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	//if (!url) return res.json(loghandler.noturl)
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (isNaN(q)) return res.sendFile(__path + '/docs/406.html')
	//if (!apikey) return res.json(loghandler.notapikey)
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	//if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.surah(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/fbdownloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	//if (!url) return res.json(loghandler.noturl)
	if (!url) return res.sendFile(__path + '/docs/406.html')
	//if (!apikey) return res.json(loghandler.notapikey)
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	//if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.fbdown(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/igstalk', async(req, res, reject) => {
	var username = req.query.username;
	var apikey = req.query.apikey
	
	if (!username) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.igstalk(username)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/igstory', async(req, res, reject) => {
	var username = req.query.username;
	var apikey = req.query.apikey
	
	if (!username) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.igstory(username)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/igdownloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.igdl(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/pinterest', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.igdl(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/lirik', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.lirik(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/wallpaper_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.chara(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/ytmp3', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.youtube(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/find', async (req, res, next) => {
	    var apikey = req.query.apikey
    if (!apikey) return res.sendFile(__path + '/docs/403.html')
    if (apikey != `${keyapi}`) return res.sendFile(__path + '/api/403.html')
    try {
        lolkill.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(__path + '/docs/503.html')
    }
})

router.get('/tiktokdownloader', async(req, res, reject) => {
	var url = req.query.url;
	var apikey = req.query.apikey
	
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.ttdownloader(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/linkwa', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.linkwa(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/playstore', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.playstore(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/wattpadsearch', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.wattpad(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/tebakgambar', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.tebakgambar()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/komiku_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.komiku(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/otaku_search', async(req, res, reject) => {
	var q = req.query.q;
	var apikey = req.query.apikey
	
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.otakudesu(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/otaku_ongoing', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.ongoing()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/covid', async(req, res, reject) => {
	var apikey = req.query.apikey;
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	aexm.covid()
	.then(data => {
		var data = data;
		res.json({
			data
		})
		})
		.catch(e => {
			res.sendFile(__path + '/docs/503.html')
	})
})

router.get('/anime_random', async (req, res, next) => {
var apikey = req.query.apikey

    if (!apikey) return res.sendFile(__path + '/docs/403.html')
    if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/anime/random`))
        .then(response => response.json())
        .then(data => {
        var data = data; SW
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/simsimi', async (req, res, next) => {
             var query = req.query.query;
			 var apikey = req.query.apikey

    if (!apikey) return res.sendFile(__path + '/docs/403.html')
    if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	if (!query) return res.sendFile(__path + '/docs/406.html')
       fetch(encodeURI(`https://api.simsimi.net/v1/?text=${query}&lang=id&cf=true`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	result: {
             		query: `${query}`,
             		answer: `${data.messages[0].response}`
             	},
             	note: `Jangan di spam ya om, siminya, kasihan ntar nangis :(`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/anime_search', async (req, res, next) => {
             var q = req.query.q;
             var apikey = req.query.apikey
   
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
	
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/anime/search?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/githubstalk', async (req, res, next) => {
             var username = req.query.username;
             var apikey = req.query.apikey
   
	if (!username) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/github/stalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/jooxsearch', async (req, res, next) => {
             var q = req.query.q;
             var apikey = req.query.apikey
   
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/joox/search?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	data,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	res.json(longhandler.error)
})
})

router.get('/dnslookup', async (req, res, next) => {
             var url = req.query.url;
             var apikey = req.query.apikey
   
	if (!url) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/dns/lookup?domain=${url}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	data,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/caklontong', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/LoliKillers/Arnz-Database/master/game/caklontong.json`))
        .then(response => response.json())
        .then(data => {
        var lontong = data;
        var result = lontong[Math.floor(Math.random() * lontong.length)];
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	result
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/samehadaku_genre', async (req, res, next) => {
             var q = req.query.q;
             var apikey = req.query.apikey
   
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/genre/${q}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/samehadaku_page', async (req, res, next) => {
             var page = req.query.page;
             var apikey = req.query.apikey
   
	if (!page) return res.sendFile(__path + '/docs/406.html')
	if (isNaN(page)) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/page/${page}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/samehadaku_anime', async (req, res, next) => {
             var q = req.query.q;
             var apikey = req.query.apikey
   
	if (!q) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/anime/${q}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/samehadaku_season', async (req, res, next) => {
	var apikey = req.query.apikey

		if (!apikey) return res.sendFile(__path + '/docs/406.html')
		if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/season`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/pinterest_stalk', async (req, res, next) => {
             var username = req.query.username;
             var apikey = req.query.apikey
   
	if (!username) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')
       fetch(encodeURI(`https://api.pinterest.com/v3/pidgets/users/${username}/pins/`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
 				result: {
 					location: `${result.data.user.location}`,
 					about: `${result.data.user.about}`,
 					username: `${result.data.user.full_name}`,
 					image_url: `${result.data.user.image_small_url}`,
 					pin_count: `${result.data.user.pin_count}`,
 					follower_count: `${result.data.user.follower_count}`,
 					profile_url: `${result.data.user.profile_url}`
 				},
 				message: `${result.status}`,
 				endpoint: `${result.endpoint_name}`,
 				status: `${result.status}`,
 				maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/pxy_naruto', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_2=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_grafity_text', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/banner-cover/graffiti-text-cover-222.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})

router.get('/pxy_petterns', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.sendFile(__path + '/docs/406.html')
	if (!apikey) return res.sendFile(__path + '/docs/403.html')
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/403.html')

            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(__path + '/docs/503.html')
                }
})


module.exports = router
