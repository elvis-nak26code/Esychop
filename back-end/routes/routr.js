const express=require('express')
const router=express.Router()
const auth=require('../middlewar/auth')

const ctrl=require('../controllers/controller')

router.post('/',auth, ctrl.postt);

router.get('/', ctrl.gett);    

router.put('/',auth, ctrl.putt); 

router.delete('/',auth, ctrl.deletee);   


module.exports=router