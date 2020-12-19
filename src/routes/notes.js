const {Router}=require('express')
const router = Router();
const Note =require('../models/Note')

router.get('/', async(req,res)=>{
    const notes = await Note.find();
    res.json(notes)
})

router.get('/:id',async(req,res)=>{
    const not= await Note.findById(req.params.id)
    res.json(not)
})

router.post('/',async(req,res)=>{
    const {title, content,date,author}=req.body;
    const newNote=new Note({
        title:title,
        content:content,
        date:date,
        author:author
    })
    await newNote.save();
    res.json({message:'nota guardada'})
})

router.put('/:id',async(req,res)=>{
    const {title,content,author,date }=req.body;
    await Note.findOneAndUpdate({_id:req.params.id},{
        title,
        author,
        content
    }) 
    res.json({message:'nota actualizada'})
})

router.delete('/:id',async(req,res)=>{
    const not= await Note.findByIdAndDelete(req.params.id)
    res.json({message:'nota eliminada'})
})

module.exports=router;