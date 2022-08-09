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

const mongoose = require('mongoose');

const Users = mongoose.Schema({
  userName: { type: String },
  password: { type: String },
  email: { type: String },
  apikey: { type: String },
  limit: { type: Number },
  apikeyDefault: { type: String },
  premium: { type: String }
}, {
  versionKey: false
});
module.exports.User = mongoose.model('users', Users);
const Apidb = mongoose.Schema({
  totalRequest: { type: Number },
  totalVisitor: { type: Number },
  apriliya: { type: String }
}, {
  versionKey: false
});
module.exports.Apidb = mongoose.model('apidb', Apidb);