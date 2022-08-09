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

require ('rootpath')();
const express = require('express');
const bodyParser = require('body-parser');
const flash = require("connect-flash");
const passport = require('passport');
const session = require('express-session');
const expressLayout = require('express-ejs-layouts');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs-extra');
Path = process.cwd();
const router = express.Router();
const app = express();
const path = require('path');

const { User } = require('mongo/schemadb');
const { isAuthenticated, notAuthenticated } = require('lib/auth');
const { checkEmail, checkUsername, addUser } = require('mongo/functions');
const { getHashedPassword, randomText } = require('lib/functions');

app.use(session({cookie: { maxAge: 60000 }}));

app.set('view engine', 'ejs');
app.use(expressLayout);

router.get("/login", notAuthenticated, async (req, res) => {
  res.locals.message_success = req.flash('message_success');
  res.locals.message_error = req.flash('message_error');
  res.locals.error = req.flash('error');
  res.render('login', {
    layout: 'layouts/user'
  });
});

router.get("/register", notAuthenticated, async (req, res) => {
  res.locals.message_error = req.flash('message_error');
  res.render('register', {
    layout: 'layouts/user'
  });
});

router.post('/login:user', (req, res, next) => {
  passport.authenticate('local',
  {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: `<div class="alert alert-danger" role="alert">
    Username/Password tidak terdaftar di database!!
    </div>`,
  })(req, res, next);
});

router.post('/register:user', async (req, res, next) => {
  try {
    let { username, email, password, confirmPassword } = req.body;
    if (password.length < 6 || confirmPassword < 6) {
      req.flash('message_error', 'Wrong password, please re-enter');
      res.redirect('/user/register');
    }
    if (password === confirmPassword) {
      let checkMail = await checkEmail(email);
      let checkName = await checkUsername(username);
      console.log(checkMail);
      if (checkName) {
        let alert_error = `<div class="alert alert-danger" role="alert">
        Username sudah terdaftar di database!!
        </div>`;
        req.flash('message_error', alert_error);
        res.redirect('/user/register');
      } else if (checkMail) {
        let alert_error = `<div class="alert alert-danger" role="alert">
        Email sudah terdaftar di database!!
        </div>`;
        req.flash('message_error', alert_error);
        res.redirect('/user/register');
      } else {
        let hashedPassword = getHashedPassword(password);
        let apikey = randomText(20);
        await addUser(username, hashedPassword, email, apikey);
        let alert_success = `<div class="alert alert-success" role="alert">
        Registrasi berhasil, silahkan login untuk melanjutkan!!
        </div>`;
        req.flash('message_error', alert_success);
        res.redirect('/user/login');
      }
    } else {
      req.flash('signup_error', 'Gagal');
    }
  } catch(err) {
    console.log(err);
  }
});

module.exports = router;