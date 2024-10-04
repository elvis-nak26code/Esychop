// importation d'express pour la creation de router
const express=require('express')
// creation de router
const router=express.Router()
// importation de nos controlers
const controleur=require('../controllers/user')
const auth=require('../middlewar/auth')

// nos routes
router.post('/signup',controleur.signup)
router.post('/login',controleur.login)
// route pour obtenir les information user
router.get('/user/profil',auth,controleur.profil)

// exportation des route , pour les rendre accesible par app.js
module.exports=router;

