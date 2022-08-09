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

module.exports = {
  isAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    let alertMessage =`<script>
    swal('Danied!!','Please login first!','info')
    </script>`
    req.flash('message_error', alertMessage)
    res.redirect('/user/login');
  },
  notAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    let alertMessage =`<script>
    swal('Danied!!','You are already signed!','info')
    </script>`
    req.flash('message_error', alertMessage)
    res.redirect('/');      
  }
} 