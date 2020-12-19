const {Router}=require('express')
const router = Router();
const User =require('../models/User')

router.get('/',async(req,res)=>{
    const users =await User.find(); 
    res.json(users)
})

router.post('/',async(req,res)=>{
    const{username}=req.body
    const newUser=new User ({username})
    await newUser.save() 
    res.send('usuario creado')
})

router.delete('/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json('usuario eliminado')
})


module.exports=router;