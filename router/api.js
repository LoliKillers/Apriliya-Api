const express = require('express');
const path = require('path');

var lolkil = express.Router();

const key = ["LoliKillers"];
const kreator = ["Loli","LoliKillers","LolKill","Ari Susanto","Apriliya","Apriliya Putri Fatmawati","April"];
const creator = kreator[Math.floor(Math.random() * kreator.length)];

msg = {
  noApikey: {
    code: 400,
    message: 'Silahkan registrasi terlebih dahulu untuk mendapatkan apikey!',
    codedBy: `${creator}`,
    date: Date(),
  }
}

lolkil.get('/cekapikey', async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(msg.noApikey)
  if (key.includes(apikey)) {
    res.json({
      code: 200,
      apikey: `${apikey}`,
      status: 'active',
      codedBy: `${creator}`,
      date: Date(),
    });
  } else {
    res.json({
      code: 400,
      message: 'Apikey tidak ditemukan, silahakan register untuk medapatkan apikey!',
      codedBy: `${creator}`,
      date: Date(),
    })
  }
});

lolkil.post('/addapikey', async (req, res, next) => {
  if (req.body.castkey != 'LoliKillers') return res.json(msg.noApikey)
  if (key.includes(req.body.key)) {
    res.json({
      code: 400,
      message: 'Apikey tidak dapat ditambahkan, silahkan register untuk mendapatkan apikey!',
      codedBy: `${creator}`,
      date: Date(),
    })
  } else {
    key.push(req.body.key);
      res.json({
        code: 200,
        apikey: `${req.body.key}`,
        message: 'Success menambahkan apikey!',
        codedBy: `${creator}`,
        date: Date(),
      });
  }
});

lolkil.use(function(req, res) {
  res.status(404)
  .set("Content-Type", "text/html")
  .sendFile(path.join(__dirname + './../pages/404.html'))
});

module.exports = lolkil