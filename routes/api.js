__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var lolkill = db.get("lolkill");
} catch (e) {
	console.log('')
}

var creatorList = ['Ari','Ari susanto','Lolkill','LoliKillers','ARNZ TEAM'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

keyapi = 'LoliKillers'

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
    notsearch: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter pencarian'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notbahasa: {
    	status: false,
    creator: `${creator}`,
    code: 406,
    message: 'masukan kode bahasa'
},
    notpage: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter page/halaman/angka'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter pertanyaan'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6283898698875 , key nya gratis kok gan, jadi santuyy ajaa'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
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

        var randomTextNumber = random+randomlagi+'---------ARNZ'+'LOLI--KILLERS';
        
 
 async function cekApiKey(api) {
 	ap = await lolkill.findOne({apikey:api})
 return ap;
 }
 
 router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email;

    if (!apikey) return res.json(loghandler.notparam)
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
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
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

router.get('/find', async (req, res, next) => {
	    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != `${keyapi}`) return res.sendFile(__path + '/api/404.html')
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
        res.json(loghandler.error)
    }
})

router.get('/anime/random', async (req, res, next) => {
var apikey = req.query.apikey

    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/anime/random`))
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
         	res.json(loghandler.error)
})
})

router.get('/simsimi', async (req, res, next) => {
             var query = req.query.query;
			 var apikey = req.query.apikey

    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
	if (!query) return res.json(loghandler.notquery)
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
         	res.json(loghandler.error)
})
})

router.get('/anime/search', async (req, res, next) => {
             var search = req.query.search;
             var apikey = req.query.apikey
   
	if (!search) return res.json(loghandler.notsearch)
	if (!apikey) return res.json(longhandler.notparam)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
	
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/anime/search?q=${search}`))
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
         	res.json(loghandler.error)
})
})

router.get('/github/stalk', async (req, res, next) => {
             var username = req.query.username;
             var apikey = req.query.apikey
   
	if (!username) return res.json(loghandler.notusername)
	if (!apikey) return res.json(loghandler.notparam)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
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
         	res.json(loghandler.error)
})
})

router.get('/downloader/jooxsearch', async (req, res, next) => {
             var search = req.query.search;
             var apikey = req.query.apikey
   
	if (!search) return res.json(loghandler.notsearch)
	if (!search) return res.json(loghandler.notparam)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/joox/search?q=${search}`))
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
         	res.json(loghandler.error)
})
})

router.get('/other/dnslookup', async (req, res, next) => {
             var url = req.query.url;
             var apikey = req.query.apikey
   
	if (!url) return res.json(loghandler.noturl)
	if (!apikey) return res.json(loghandler.notparam)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
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
         	res.json(loghandler.error)
})
})

router.get('/game/caklontong', async (req, res, next) => {
	var apikey = req.query.apikey
	
	if (!apikey) return res.json(loghandler.notparam)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
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
         	res.json(loghandler.error)
})
})

router.get('/samehadaku/genre', async (req, res, next) => {
             var search = req.query.search;
             var apikey = req.query.apikey
   
	if (!search) return res.json(loghandler.notsearch)
	if (!search) return res.json(loghandler.notparam)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/genre/${search}`))
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
         	res.json(loghandler.error)
})
})

router.get('/samehadaku/page', async (req, res, next) => {
             var page = req.query.page;
             var apikey = req.query.apikey
   
	if (!page) return res.json(loghandler.notpage)
	if (isNaN(page)) return res.json(loghandler.notpage)
	if (!apikey) return res.json(loghandler.notparam)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
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
         	res.json(loghandler.error)
})
})

router.get('/samehadaku/anime', async (req, res, next) => {
             var search = req.query.search;
             var apikey = req.query.apikey
   
	if (!search) return res.json(loghandler.notsearch)
	if (!apikey) return res.json(loghandler.notparam)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/anime/${search}`))
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
         	res.json(loghandler.error)
})
})

router.get('/samehadaku/season', async (req, res, next) => {
	var apikey = req.query.apikey

		if (!apikey) return res.json(loghendler.notparam)
		if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
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
         	res.json(loghandler.error)
})
})

router.get('/pinterest/stalk', async (req, res, next) => {
             var username = req.query.username;
             var apikey = req.query.apikey
   
	if (!username) return res.json(loghandler.notusername)
	if (!apikey) return res.jsom(loghandler.notparam)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')
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
         	res.json(loghandler.error)
})
})

router.get('/photooxy/petterns', async (req, res, next) => {
             var text = req.query.text;
             var apikey = req.query.apikey
   
	if (!text) return res.json(loghandler.nottext)
	if (!apikey) return res.json(loghandler.notparam)
	if (apikey != `${keyapi}`) return res.sendFile(__path + '/docs/404.html')

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
                res.json(loghandler.error)
                }
})


module.exports = router
