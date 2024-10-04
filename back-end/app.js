const express= require('express')
const app=express()

// extraction du corp des requette post en json (body)
app.use(express.json());

// importation de mongoose
const mongoose = require('mongoose')

// connection a la base de donner
mongoose.connect('mongodb+srv://nacanaboelvisEsychop:Esychop2024@esychop.a2bit.mongodb.net/?retryWrites=true&w=majority&appName=Esychop',
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


// gerer les erreur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
    });

const routes=require('./routes/routr')
const userRoute=require('./routes/user')

app.use('/api/stuff', routes);
app.use('/api/auth',userRoute)


module.exports=app;