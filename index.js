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


require('rootpath')();
const express = require('express');
const PORT = process.env.PORT || 8080 || 5000 || 3000;
const app = express();
const cors = require("cors");
const secure = require("ssl-express-www");
const uuid = require('node-uuid');
const morgan = require("morgan");
const router = express.Router();
const expressLayout = require('express-ejs-layouts');
const flash = require("connect-flash");
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const passport = require("passport");
const schedule = require('node-schedule');
const indexroutes = require("router/index");
const routesuser = require("router/user");
const apiroutes = require("router/api");
const { connectMongoDb } = require('mongo/connect');
const { expiredPremium } = require('mongo/functions');

_path = process.cwd();

connectMongoDb();

app.use(cors());
app.use(secure);
app.use(assignId);
app.set('trust proxy', 'loopback, 189.84.122.67');
app.enable('trust proxy');
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set("json spaces",2);
app.use(flash());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 86400000
  },
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
}));

app.use(passport.session());
require('lib/config')(passport);

app.use('/', indexroutes);
app.use('/user', routesuser);
app.use('/api', apiroutes);

app.enable('verbose errors');
app.use(function(req, res, next){
  res.status(404);
  res.send({
    statusCode: 404,
    coder: 'Loli Killers',
    error: {
      message: 'Opss!!, url/link/halaman yang anda minta tidak ada di server!!'
    }
  });
});
app.use(function(req, res, next){
  res.status(403);
  res.send({
    statusCode: 403,
    coder: 'Loli Killers',
    error: {
      message: 'Kamu tidak memiliki izin untuk mengakses url/link/halaman ini!!'
    }
  });
});
app.use(function(req, res, next){
  res.status(500);
  res.send({
    statusCode: 500,
    coder: 'Loli Killers',
    error: {
      message: 'Internal server error!'
    }
  });
});

function assignId (req, res, next) {
  req.id = uuid.v4();
  next();
}

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Website berjalan di localhost:${PORT}`);
    schedule.scheduleJob('* * * * *', () => { 
      expiredPremium();
    });
  });
}
