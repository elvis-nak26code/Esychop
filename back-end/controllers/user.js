// importation de notre model et de bcrypt
const User=require('../model/user')
const bcrypt=require('bcrypt')

const jwt=require('jsonwebtoken')

// logique pour l'inscription des utilusateurs
exports.signup=(req,res,next)=>{
    // cryptage du mot de pass
    bcrypt.hash(req.body.password, 10)
    .then(hash=>{
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const regextel=/^\+\d{1,3}(\s*\d{1,4}){2,3}$/
            if(!regexEmail.test(req.body.email)){
                throw new Error('email non valide')
            }
            if(!regexPassword.test(req.body.password)){
                throw new Error('mot de pass non valide')
            }
            if(req.body.password !== req.body.password1){
                throw new Error('mot de pass non confimer')
            }
            if (!regextel.test(req.body.tel)) {
                throw new Error('numero invalide')
            } 
        const user = new User({
            pays: req.body.pays,
            email: req.body.email,
            password: hash,
            nom:req.body.nom,
            prenom:req.body.prenom,
            tel:req.body.tel,
            accord:req.body.accord
        })
        user.save()
        .then(()=>{res.status(201).json({message:'utilusateur cree!'})})
        .catch(err=>{res.status(500).json({err})})
    })
    .catch(err=>{res.status(500).json({err})})
}


// logique pour la connection des utilusateurs
exports.login=(req, res, next)=>{
    User.findOne({email:req.body.email})
    .then(user=>{
        if(user===null){
            res.status(401).json({message:'email non trouver dans la base'})
        }else{
            bcrypt.compare(req.body.password, user.password)
            .then(valid=>{
                if(!valid){
                    res.status(401).json({message:'mot de passe incorrecte'})
                }else{
                    res.status(200).json({
                        userid: user._id,
                        token:jwt.sign(
                            {userid: user._id},
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn:'24h'}
                        )
                    })
                }
            })
            .catch(err=>{res.status(401).json({err})})
        }
    })
    .catch(err=>{res.status(500).json({err})})
}

// obtention du profile
exports.profil=(req, res, next)=>{
    User.findById(req.auth.userId)
    .then(user=>{
        if(!user){
            res.status(404).json({message: 'utilusateur non trouver'})
        }else{
            res.status(200).json({
                nom:user.nom,
                prenom:user.prenom,
                tel:user.tel,
                email:user.email
            })
        }
    })
    .catch(err=>res.status(500).json({error:err}))
}