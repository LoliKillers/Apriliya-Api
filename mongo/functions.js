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
require('dotenv').config();
const { User, Apidb } = require('mongo/schemadb');
const toMs = require('ms');

const limitCount = process.env.LIMIT_USER;
const limitPremium = process.env.LIMIT_PREMIUM;

module.exports.addUser = (username, hashedPassword, email, apikey) => {
  let obj = {
    userName: username,
    email: email,
    password: hashedPassword,
    apikey: apikey,
    limit: limitCount,
    premium: null,
    apikeyDefault: apikey
  };
  User.create(obj);
};

module.exports.checkUsername = async (username) => {
  let x = await User.findOne({ userName: username });
  if (x !== null) {
    return x.userName;
  } else {
    return false;
  }
};
module.exports.checkEmail = async (email) => {
  let x = await User.findOne({ email: email });
  if (x !== null) {
    return x.email;
  } else {
    return false;
  }
};
module.exports.limitAdd = async (apikey) => {
  let x = await User.findOne({ apikey: apikey });
  let minus = x.limit - 1;
  User.updateOne({
    apikey: apikey
  }, {
    limit: minus
  }, function (err, res) {
    if (err) throw err;
  });
};
module.exports.isLimit = async (apikey) => {
  let x = await User.findOne({ apikey: apikey });
  if (x.limit <= 0) {
    return true;
  } else {
    return false;
  }
};
module.exports.resetLimit = async () => {
  let x = await User.find({});
  await x.forEach(async(data) => {
    let { premium, userName } = data;
    if (premium !== null) {
      await User.updateOne({
        userName: userName
      }, {
        limit: limitPremium
      });
    } else {
      await User.updateOne({
        userName: userName
      }, {
        limit: limitCount
      });
    }
  });
};
async function addApiDb() {
  let obj = {
    totalRequest: 0,
    totalVisitor: 0,
    apriliya: 'april'
  };
  await Apidb.create(obj);
};
module.exports.totalReq = async () => {
  let x = await Apidb.find({});
  if (x.length == 0) { 
    await addApiDb();
    return x[0].totalRequest;
  } else {
    return x[0].totalRequest;
  }
};
module.exports.totalVisit = async () => {
  let x = await Apidb.find({});
  if (x.length == 0) { 
    await addApiDb();
    return x[0].totalVisitor;
  } else {
    return x[0].totalVisitor;
  }
};
module.exports.addRequest = async () => {
  let x = await Apidb.findOne({ apriliya: 'april' });
  if (x === undefined) {
    await addApiDb()
  } else {
    let addTotalReq = x.totalRequest += 1;
    await Apidb.updateOne({ apriliya: 'april' }, { totalRequest: addTotalReq });
  }
};
module.exports.addVisitor = async () => {
  let x = await Apidb.findOne({ apriliya: 'april' });
  if (x == undefined) {
    await addApiDb()
  } else {
    let addTotalVisit = x.totalVisitor += 1;
    await Apidb.updateOne({ apriliya: 'april' }, { totalVisitor: addTotalVisit })
  }
};
module.exports.cekKey = async (apikey) => {
  let x = await User.findOne({ apikey: apikey });
  if (x === null) {
    return false;
  } else {
    return x.apikey;
  }
};
module.exports.addPremium = async (username, expired) => {
  await User.updateOne({ userName: username }, { premium: Date.now() + toMs(expired), limit: limitPremium });
};
module.exports.expiredPremium = async () => {
  let x = await User.find({});
  x.forEach(async(data) => {
    let { premium, apikeyDefault, userName } = data;
    if (!premium || premium === null) return;
    if (Date.now() >= premium) {
      await User.updateOne({ userName: userName }, { apikey: apikeyDefault, premium: null, limit: limitCount });
      console.log(`${userName} bukan lagi pengguna premium!!`);
    }
  });
};
module.exports.customApikey = async (userName, apikey) => {
  let x = await User.findOne({ userName: userName });
  if (x !== null) {
    await User.updateOne({ userName: userName }, { apikey: apikey });
  }
}
module.exports.checkPremium = async (username) => {
  let x = await User.findOne({ userName: username });
  if (x === null) {
    return false;
  } if (x.premium === null) {
    return false;
  } else {
    return true;
  };
};