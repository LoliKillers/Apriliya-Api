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
const crypto = require('crypto');
const list = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'.split('');
const fetch = require('node-fetch')

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
};

function randomText(text) {
  const result = [];
  for (let i = 0; i < text; i++) result.push(list[Math.floor(Math.random() * list.length)]);
  return result.join('');
}

async function fetchJson(url, options) {
  return  new Promise(async (resolve, reject) => {
    fetch(url, options)
    .then(response => response.json())
    .then(json => {
      resolve(json);
    })
    .catch((err) => {
      reject(err);
    });
  });
}
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
};

module.exports = { randomText, getHashedPassword, fetchJson, isUrl };