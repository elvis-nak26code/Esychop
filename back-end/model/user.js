// importation de mongoose pour cree le model, unique-validator
const mongoose= require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

// notre shemat de donnee
const userSchema= mongoose.Schema({
    pays:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    nom:{type:String, required:true},
    prenom:{type:String, required:true},
    tel:{type:String, required:true, unique:true},
    accord:{type:Boolean, required:true}
    // ,
    // connected:{type:Boolean}

})
// application de unique-validator
userSchema.plugin(uniqueValidator)
// exportation du model
module.exports=mongoose.model('User',userSchema)