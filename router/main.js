const express = require('express');
const path = require('path');
const cerror = require('console-error');
const cinfo = require('console-info');
const users = require('./data').userDB;
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
var app = express();
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  },
  secure: true
});

const docsLimiter = rateLimit({
  windowsMs: 1440 * 60 * 1000,
  max: 100,
  message: "Too Many Request from this IP, please try again in an tomorrow",
})
router.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname + './../views/home.html'))
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + './../pages/register.html'))
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + './../pages/login.html'))
});


router.post('/login', async (req, res) => {
  try {
    let foundUser = users.find((data) => req.body.username === data.username);
    if (foundUser) {
      let submittedPass = req.body.password;
      let storedPass = foundUser.password;
      const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
      if (passwordMatch) {
        let usrname = foundUser.username;
        res.sendFile(path.join(__dirname + './../views/docs.html'))
      } else {
        res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='/login'>login again</a></div>");
      }
    } else {
      let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
      await bcrypt.compare(req.body.password, fakePass)
      res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><form method='post' action='/getkey'><a href='/login'>login again<a></form><div>");
    }
  } catch (e) {
    cerror(e)
    res.send('Internal Server Error')
  }
})
router.post('/register', async (req, res) => {
  try {
    let foundUser = users.find((data) => req.body.email === data.email)
    if (!foundUser) {
      let hashPassword = await bcrypt.hash(req.body.password, 10);
      let { email, username, subject } = req.body;
      const mailData = {
        from: 'badai.api7@gmail.com',
        to: email,
        subject: 'Badai Api',
        text: username,
        html: `<b>Hallo ${username}</b><br></br><br>Makasih ya kak udah make badai api, maaf jelek, rest api ini masih proses pembuatan<br/><br>Ingin requests fitur? hubungi saya di <a href="httsp://wa.me/6285785445412> Whatsapp</a></br><br>Apikey : LoliKillers</br><br></br><br></br><br>I Am Loli Killers</br>`,
      };
      let newUser = {
        id: Date.now,
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
      };
      users.push(newUser);
      cinfo('User List', users);
        transporter.sendMail(mailData, (error, info) => {
          if (error) {
            return cerror(error)
          }
          cinfo(info)
        });
        res.sendFile(path.join(__dirname + './../pages/login.html'))
    } else {
      res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='/register'>Register again</a></div>");
    }
  } catch (e) {
    cerror(e)
    res.send('Internal server error')
  }
});

router.get('/docs', docsLimiter, (req, res) => {
  res.sendFile(path.join(__dirname + './../views/docs.html'))
});

module.exports = router
