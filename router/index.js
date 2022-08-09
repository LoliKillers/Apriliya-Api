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
const coder = process.env.CODER_NAME;
const keys = process.env.KEY;
const { fetchJson } = require('lib/functions');
const { isAuthenticated, notAuthenticated } = require('lib/auth');
const { User } = require('mongo/schemadb');
const {
  totalReq,
  totalVisit,
  addVisitor,
  addPremium,
  checkPremium,
  checkUsername,
  customApikey
} = require('mongo/functions');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: false
}));
app.set('view engine', 'ejs');
app.use(expressLayout);

router.get("/", isAuthenticated, async (req, res) => {
  res.locals.message_error = req.flash('message_error');
  res.locals.message_success = req.flash('message_success');
  let { userName } = req.user;
  await addVisitor();
  let x = await User.findOne({ userName: userName });
  let totalRequest = await totalReq();
  let totalVisitor = await totalVisit();
  let ip = await fetchJson('https://api.ipify.org?format=json');
  res.render('home', {
    x,
    totalRequest,
    totalVisitor,
    ip,
    layout: 'layouts/main'
  });
});
router.get("/logout", isAuthenticated, async(req, res) => {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
})

router.get('/addpremium', async (req, res, next) => {
  let username = req.query.username;
  let expired = req.query.expired;
  let key = req.query.key;
  if (!username) return res.send({
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter username!'
    }
  });
  if (!expired) return res.send({
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter expired!, d untuk format hari, m untuk format menit, h untuk format hari, contoh 30d untuk 30 hari'
    }
  });
  if (!key) return res.send({
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter key'
    }
  });
  if (key != keys) return res.send({
      statusCode: 403,
      coder: coder,
      error: {
        messase: 'Akses di tolak!!, kata kunci yang anda masukan salah!!'
      }
    });
  let checking = await checkUsername(username);
  if (!checking) return res.json({
      statusCode: 404,
      coder: coder,
      error: {
        message: 'Username tidak terdaftar di dalam database!!'
      }
    });
  let checkPrem = await checkPremium(username);
  if (!checkPrem) {
    res.send({
      statusCode: 403,
      coder: coder,
      error: {
        message: 'Username sudah terdaftar sebagai pengguna premium!'
      }
    });
  } else {
    await addPremium(username, expired);
    res.send({
      statusCode: 200,
      coder: coder,
      success: {
        message: `Berhasil mendaftarkan ${username} sebagai pengguna premium!!`
      }
    });
  }
});
router.get("/customkey", async (req, res) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  if (!apikey) return res.send({
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter apikey, isi dengan apikey yang baru!'
    }
  });
  if (!username) return res.send({
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Masukkan parameter username, dan isi dengan username kamu!'
    }
  });
  var checkPrem = await checkPremium(username);
  if (checkPrem) {
    await customApikey(username, apikey);
    res.send({
      statusCode: 200,
      coder: coder,
      success: {
        message: `Apikey berhasil di custom menjadi ${apikey}`
      }
    });
  } else {
    res.send({
      statusCode: 403,
      coder: coder,
      error: {
        message: 'Maaf, kamu pengguna gratis!, tidak bisa custome apikey!'
      }
    });
  }
});

module.exports = router;