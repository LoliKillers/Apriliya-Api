/*
Mungkin buat lu gak berharga,
Tapi Ini Buat Kami Sangat Berharga!!
Hargai Buatan Orang

Rasulullah shallallahu 'alaihi wasallam bersabda:
"Barangsiapa mengaku-ngaku sesuatu yang bukan miliknya,
Maka ia bukan dari golongan kami,
Dan hendaklah ia menyiapkan tempat duduknya dalam neraka"

Thanks To :
• Nodejs
• Npm
• Github
• Heroku
• Loli Killers
• RimuruBotz
• Dark Coder Team
*/

require("rootpath")();
require('dotenv').config();
const express = require('express');
const router = express.Router();
const app = express();
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const lol = require('lolkil-scraper');
const fs = require('fs-extra');
const { cekKey, addRequest, isLimit, limitAdd } = require('mongo/functions');
const { isUrl } = require('lib/functions');

const coder = process.env.CODER_NAME;

msg = {
  noApikey: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter apikey!!'
    }
  },
  invalidApikey: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Invalid apikey!!, apikey tidak ada di database!! masukkan apikey yang valid!!'
    }
  },
  limit: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Limit harian kamu sudah habis!! limit akan di riset setiap 24 jam sekali!!'
    }
  },
  error: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Opss!!, sepertinya terjadi suatu kesalahan!! silahkan cek paramater yang dibutuhkan, dan ulangi beberapa saat lagi jika masih error, segera hubungi developer!'
    }
  },
  noNumber: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter number!'
    }
  },
  invalidNumber: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Parameter ini harus berupa angka!!'
    }
  },
  noSearch: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter search!'
    }
  },
  noFile: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter File!'
    }
  },
  noLang: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter lang!'
    }
  },
  noText: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter text!'
    }
  },
  noManga: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter manga!'
    }
  },
  NoEmoticon: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter emoticon!'
    }
  },
  
  noAnime: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter anime!'
    }
  },
   noTitle: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter Title!'
    }
  },
  noCity: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter City!'
    }
  },
  noUrl: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter url!'
    }
  },
  invalidUrl: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Invalid url!, Pastikan url yang anda masukkan sudah benar!'
    }
  },
  noExtension: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter extension'
    }
  },
  invalidExtension: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Invalid extension, masukkan parameter extension dengan benar extension tersedia [ audio & video ]'
    }
  }
};

//[===] START ISLAMI FITUR [===]//
/*router.get('/islami/list-surah', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.islami.listsurah(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});*/
/*router.get('/islami/surah', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const number = req.query.number;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!number) return res.json(msg.noNumber);
    if (isNaN(number)) return res.json(msg.invalidNumber);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.islami.surah(dcApikey, number)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});*/
//[===] END ISLAMI FITUR [===]//

//[===] START IMAGE FITUR [===]//
router.get('/image/pinterest', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.image.pinterest(search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
/*router.get('/image/alphacoders', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.image.alphacoders(dcApikey, search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
*/

router.get('/image/wallpaperflare', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.image.wallpaperflare(search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});


// [===] END IMAGE FITUR [===]//

//[===] START DOWNLOADER FITUR [===]//
router.get('/downloader/tiktok', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    const extension = req.query.extension;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.download.tiktok(url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/youtube_dl_mp3', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.download.youtube_dl_mp3(url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/youtube_dl_mp4', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.download.youtube_dl_mp4(url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/youtube_play_mp3', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.download.youtube_play_mp3(search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/downloader/youtube_play_mp4', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.download.youtube_play_mp4(search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
/*
router.get('/downloader/cocofun', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.downloader.cocofun(dcApikey, url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.results
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/like', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.downloader.like(dcApikey, url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.results
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/linesticker', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.downloader.linesticker(dcApikey, url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/twitter', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.downloader.twitter(dcApikey, url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.results
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/facebook', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.downloader.facebook(dcApikey, url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/soundcloud', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.downloader.soundcloud(dcApikey, url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/instagram', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.downloader.instagram(dcApikey, url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/imdb', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.downloader.imdb(dcApikey, url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/downloader/imgur', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.downloader.imgur(dcApikey, url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});*/
//[===] END DOWNLOADER [===]//

//[=== START INFO ===]//
router.get('/info/gempa_terkini', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.info.gempa_terkini()
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
/*
router.get('/info/kodepos', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const city = req.query.city
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    if (!city) return res.json(msg.noCity);
    addRequest();
    xyz.info.kodepos(dcApikey, city)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/info/covidGlobal', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.info.covidGlobal(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/info/tiktokTrend', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.info.tiktokTrend(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/info/inews', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.info.inews(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/info/jadwalBola', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.info.jadwalBola(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/info/servermc', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.info.servermc(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/info/hoax', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.info.hoax(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/info/kompasNews', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.info.kompasNews(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
*/
//[=== END INFO ===]

//[=== START SEARCH ===]
router.get('/search/github_repo', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.search.github_repo(search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
/*
router.get('/search/songsliric', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const title = req.query.title;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!title) return res.json(msg.noTitle);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.search.songsliric(dcApikey, title)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/search/happymod', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.search.happymod(dcApikey, search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/search/moddroid', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.search.moddroid(dcApikey, search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/search/youtube', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.search.youtube(dcApikey, search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/search/sticker', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.search.sticker(dcApikey, search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
*/
//[=== END SEARCH ===]

//[=== START EDUCATION ===]
/*
router.get('/education/search', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.education.search(dcApikey, search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
*/
//[=== END EDUCATION ===]

//[=== START ANIME ===]
router.get('/anime/otakudesu', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const anime = req.query.anime;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!anime) return res.json(msg.noAnime);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.anime.otakudesu_search(anime)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/anime/anoboy', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const anime = req.query.anime;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!anime) return res.json(msg.noAnime);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.anime.anoboy(anime)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/anime/mal_top_airing', async (req, res, next) => {
  try {
    const apikey = req.query.apikey; 
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.anime.mal_top_airing()
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/anime/mal_top_airing', async (req, res, next) => {
  try {
    const apikey = req.query.apikey; 
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.anime.mal_top_airing()
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
/*router.get('/anime/kiryuu', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const anime = req.query.anime;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!anime) return res.json(msg.noAnime);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.anime.kiryuu(dcApikey, anime)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});*/
/*router.get('/anime/apAnime', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const anime = req.query.anime;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!anime) return res.json(msg.noAnime);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.anime.apAnime(dcApikey, anime)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});*/
router.get('/anime/mal_search_anime', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const anime = req.query.anime;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!anime) return res.json(msg.noAnime);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.anime.mal_search_anime(anime)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
/*router.get('/anime/apManga', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const manga = req.query.manga;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!manga) return res.json(msg.noManga);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.anime.apManga(dcApikey, manga)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});*/
router.get('/anime/mal_search_manga', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const manga = req.query.manga;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!manga) return res.json(msg.noManga);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.anime.mal_search_manga(manga)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
/*
router.get('/anime/quotesnime', async (req, res, next) => {
  try {
    const apikey = req.query.apikey; 
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.anime.quotesnime(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/anime/otakuOngoing', async (req, res, next) => {
  try {
    const apikey = req.query.apikey; 
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.anime.otakuOngoing(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/anime/mangatoon', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const search = req.query.search;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!search) return res.json(msg.noSearch);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.anime.mangatoon(dcApikey, search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
*/
//[=== END ANIME ===]

//[=== START RANDOM ===]
/*
router.get('/random/blush', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.random.blush(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});

router.get('/random/bite', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.random.bite(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/random/baka', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.random.baka(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/random/waifu', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.random.waifu(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/random/kitsune', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.random.kitsune(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/random/neko', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.random.neko(dcApikey)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
//[=== END RANDOM ===]
*/
//[=== START CONVERT ===]
router.get('/convert/emoji_to_png', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const emoticon = req.query.emoticon;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!emoticon) return res.json(msg.noEmoticon);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.convert.emoji_to_png(emoticon)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/convert/gtts', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const text = req.query.text;    
    const lang = req.query.lang;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!lang) return res.json(msg.noLang);
    if (!text) return res.json(msg.noText);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.convert.gtts(text, lang)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
//[=== END CONVERT ===]

//[=== START UPLOADER ===]
/*
router.get('/uploader/fileungu', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const file = req.query.file;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!file) return res.json(msg.noFile);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.uploader.fileungu(dcApikey, file)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
//[=== END UPLOADER ===]
*/
//[=== START CRYPTO ===]
/*
router.get('/crypto/encode64', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const text = req.query.text; 
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!text) return res.json(msg.noText);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.crypto.encode64(dcApikey, text)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/crypto/encode32', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const text = req.query.text; 
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!text) return res.json(msg.noText);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.crypto.encode32(dcApikey, text)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/crypto/decode64', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const text = req.query.text; 
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!text) return res.json(msg.noText);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.crypto.decode64(dcApikey, text)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
router.get('/crypto/decode32', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const text = req.query.text; 
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!text) return res.json(msg.noText);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.crypto.decode32(dcApikey, text)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      console.log(err)
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});*/

module.exports = router;