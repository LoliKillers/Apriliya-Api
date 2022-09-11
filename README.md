
![APRILIYA-API](https://telegra.ph/file/c793578cfabf67d292dd0.png)
# APRILIYA - API's
<p align="center">
<a href="https://github.com/LoliKillers/Apriliya-Api/network/members" alt="GitHub stars"> <img src="https://img.shields.io/github/stars/LoliKillers/Apriliya-Api?style=flat&logo=github&color=yellow" /> </a>
<a href="https://github.com/LoliKillers/Apriliya-Api/network/members" alt="GitHub forks"> <img src="https://img.shields.io/github/forks/LoliKillers/Apriliya-Api" /> </a>
</p>
<p align="center">
<a href="https://github.com/LoliKillers/Apriliya-Api" alt="GitHub commit activity"> <img src="https://img.shields.io/github/commit-activity/m/LoliKillers/Apriliya-Api" /> </a>
<a href="https://github.com/LoliKillers/Apriliya-Api/graphs/contributors" alt="GitHub contributors"> <img src="https://img.shields.io/github/contributors/LoliKillers/Apriliya-Api?style=flat&logo=github" /> </a>
<a href="https://github.com/LoliKillers/Apriliya-Api" alt="GitHub closed pull requests"> <img src="https://img.shields.io/github/issues-pr-closed-raw/LoliKillers/Apriliya-Api?color=success" /> </a>
<a href="https://github.com/LoliKillers/Apriliya-Api" alt="GitHub issues"> <img src="https://img.shields.io/github/issues-raw/LoliKillers/Apriliya-Api?style=flat&logo=github&color=red" /> </a>
<a href="https://github.com/LoliKillers/Apriliya-Api" alt="GitHub closed issues"> <img src="https://img.shields.io/github/issues-closed-raw/LoliKillers/Apriliya-Api?style=flat&logo=github&color=success" /> </a>
</p>
<p align="center">
<a href="https://github.com/LoliKillers/Apriliya-Api" alt="GitHub repo size"> <img src="https://img.shields.io/github/repo-size/LoliKillers/Apriliya-Api" /> </a>
<a href="https://github.com/LoliKillers/Apriliya-Api/blob/master/LICENSE" alt="GPLv3 license"> <img src="https://img.shields.io/github/license/LoliKillers/Apriliya-Api?style=flat&logo=github&color=success" /> </a>
</p>
<p align="center">
<a href="" alt="LoliKillers"> <img src="https://img.shields.io/badge/built%20by-LoliKillers-blue" /> </a>
<a href="https://github.com/LoliKillers/Apriliya-Api/graphs/commit-activity" alt="Maintenance"> <img src="https://img.shields.io/badge/maintained%3F-yes-blue.svg" /> </a>
<a href="https://makeapullrequest.com" alt="PRs Welcome"> <img src="https://img.shields.io/badge/PRs-welcome-blue.svg" /> </a>
</p>

![Alt](https://repobeats.axiom.co/api/embed/994be5af506efd008b9ac5aa95c76a4472798a25.svg "Repobeats analytics image")

### Required

Sebelum melakukan apapun silahkan dapatkan
* [Mongo DB URI](https://www.mongodb.com)

Tanpa mongodb web API tidak akan berjalan

buat file .env terlebih dahulu
```shell
mv example.env .env
```
letakkan semua itu di file .env

```javascript
DB_URI = '' //URI Database mongodb bisa kalian dapatkan di https://www.mogodb.com
LIMIT_PREMIUM =  ''//Limit pengguna gratisan
LIMIT_USER = '' //Limit pengguna premium
CODER_NAME = '' //Entahlah mau di ganti apa tidak
KEY = '' //Kata kunci untuk menambahkan pengguna premium
```

## Linux

```shell
apt update -y
apt upgrade -y
apt install nodejs -y
apt install npm -y
apt install git -y
```

### Runing in localhost

```shell
npm install --global nodemon
git clone https://github.com/LoliKillers/Apriliya-Api
cd Apriliya-Api
npm install
npm start
```
Open : [http://localhost:8080](http://localhost:8080)
### Deploy in heroku

```shell
npm install --global heroku
heroku login
git clone https://github.com/LoliKillers/Apriliya-Api
cd Apriliya-Api
hroku git:remote -a YOUR_APP_NAME_IN_HEROKU
git add .
git commit -m "Make It Butter"
git push heroku master
```

#### Or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/LoliKillers/Apriliya-Api)

Open : [https://APP_NAME.herokuapp.com](https://APP_NAME.herokuapp.com)
Demo : [https://april-api.herokuapp.com](https://april-api.herokuapp.com)
## What is next?

* Jika masih bingung silahkan tanyakan kepada saya di [WhatsApp](https://chat.whatsapp.com/EH9g1SKf588HXEFY51zQMu)
* Menemukan error? silahkan tarik permintaan, atau bisa beritahu saya di [WhatsApp](https://chat.whatsapp.com/EH9g1SKf588HXEFY51zQMu)
* Request? silahkan hubungi saya di [WhatsApp](https://chat.whatsapp.com/EH9g1SKf588HXEFY51zQMu)
* [lolkil-scraper](https://npmjs.com/package/lolkil-scraper)
