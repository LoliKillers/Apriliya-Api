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
const LocalStrategy = require('passport-local').Strategy;
const { getHashedPassword } = require('lib/functions');
const { User } = require('mongo/schemadb');

module.exports = function(passport) {
  passport.use(new LocalStrategy((username, password, done) => {
    let hashed = getHashedPassword(password)
    User.findOne({ userName: username })
    .then(users => {
      if (!users) return done(null, false, {
        message: `<div class="alert alert-danger d-flex" role="alert">
        <span class="badge badge-center rounded-pill bg-danger border-label-danger p-3 me-2"><i class="bx bx-error fs-6"></i></span>
        <div class="d-flex flex-column ps-1">
        <h6 class="alert-heading d-flex align-items-center fw-bold mb-1">Opss!!</h6>
        <span>The username is not registered in the database!</span>
        </div>
        </div>`,
      })
      if (username === users.userName & hashed === users.password) {
        return done(null, users);
      } else {
        return done(null, false, {
          message: `<div class="alert alert-danger d-flex" role="alert">
          <span class="badge badge-center rounded-pill bg-danger border-label-danger p-3 me-2"><i class="bx bx-error fs-6"></i></span>
          <div class="d-flex flex-column ps-1">
          <h6 class="alert-heading d-flex align-items-center fw-bold mb-1">Opss!!</h6>
          <span>Wrong password, enter correct password!</span>
          </div>
          </div>`
        });
      }
    });
  }));
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}