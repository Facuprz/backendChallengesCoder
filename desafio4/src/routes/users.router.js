import { Router } from "express";


const router = Router();

router.get('/',(req,res)=>{ 
    res.send('Users')
})
router.post('/',(req,res)=>{

})

router.put('/:uid',(req,res)=>{

})

router.delete('/:uid',(req,res)=>{

})


export default router