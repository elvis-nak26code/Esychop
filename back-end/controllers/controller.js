const User= require('../model/user')

exports.gett= (req, res, next) => {
    // res.status(200).json({message:"c'est une requette get"});
    User.find()
    .then(User => res.status(200).json(User))
    .catch(error => res.status(400).json({ error }));
    }
exports.postt = (req, res, next) => {
    res.status(200).json({message:"belle reauet"});
    }
exports.putt=(req, res, next) => {
    res.status(200).json({message:"c'est une requette put"});
    }
exports.deletee=(req, res, next) => {
    res.status(200).json({message:"c'est une requette delete"});
    }         

