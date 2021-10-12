const express = require('express');
const favicon = require('serve-favicon');
const cors = require('cors');
const secure = require('ssl-express-www');
const cinfo = require('console-info')
__path = process.cwd();

const PORT = process.env.PORT || 8080

var app = express();
var mainrouter = require('./router/main')
var apirouter = require('./router/api')

app.enable('trust proxy');
app.set("json spaces", 2)
app.use(cors())
app.use(secure)
app.use(favicon(__path + '/views/favicon.ico'))
app.use(express.static("assets"))

app.use('/', mainrouter)
app.use('/docs', apirouter)

app.listen(PORT, () => {
  cinfo('Server berjalan di http://localhost:' + PORT)
})

module.exports = app