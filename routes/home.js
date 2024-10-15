import express from 'express';
const router = express.Router();


//home page
router.get('/',(req,res)=>{
    res.render('home',{title:'ShowTime-home',cssFile: 'home.css'});
});



export default router;