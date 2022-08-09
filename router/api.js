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
• Dark Coder Team
*/

require("rootpath")();
require('dotenv').config();
const express = require('express');
const router = express.Router();
const app = express();
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const xyz = require('xyzapi');
const fs = require('fs-extra');
const { cekKey, addRequest, isLimit, limitAdd } = require('mongo/functions');
const { isUrl } = require('lib/functions');

const coder = process.env.CODER_NAME;
const dcApikey = process.env.DC_APIKEY;

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
router.get('/islami/list-surah', async (req, res, next) => {
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
});
router.get('/islami/surah', async (req, res, next) => {
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
});
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
    xyz.image.pinterest(dcApikey, search)
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
router.get('/downloader/youtube', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    const extension = req.query.extension;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl);
    const listExtension = ['audio', 'video'];
    if (!extension) return res.json(msg.noExtension);
    if (!listExtension.includes(extension)) return res.json(msg.invalidExtension);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.downloader.ytdl(dcApikey, url, extension)
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
//[===] END DOWNLOADER [===]//

//[=== START INFO ===]//
router.get('/info/gempa', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    xyz.info.gempa(dcApikey)
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
//[=== END INFO ===]

//[=== START SEARCH ===]
router.get('/search/repo', async (req, res, next) => {
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
    xyz.search.repo(dcApikey, search)
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
module.exports = router;