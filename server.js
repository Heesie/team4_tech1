const dotenv = require('dotenv')
dotenv.config();

const express = require('express');
const app = express()


const apiKey = process.env.API_KEY;



app
    .use (express.json())
    .use (express.urlencoded({extended: true}))
    .use ('/', express.static('static'))

    .set ('view engine', 'ejs')
    .set ('views', 'views')

    .get ('/', home)
    .get ('/login', login)
    .get ('/createAccount', createAccount)

mainschermn
    .get ('/mainscherm', mainscherm)
    .get ('/koelkast', koelkast)
    .get ('/pop-up', popup )
main
   
    .listen(2000)

console.log("de server draait op host 2000")
    function login (req, res) {
        res.render('login.ejs');
    }

    function createAccount (req, res) {
        res.render('createAccount.ejs');
    }

    function home (req, res) {
        res.render('recept-finder.ejs');
    }

 mainschermn
    function mainscherm (req, res) {
        res.render('mainscherm.ejs');
    }

    function koelkast (req, res) {
        res.render('koelkast.ejs');
    }

    function popup (req, res) {
        res.render('pop-up.ejs');
    }


/* gedeelte pop up */


 main

    
