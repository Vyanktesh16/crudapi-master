import express, { Response,Request, Router } from "express";
import { homeDetail } from "../controller/Users";
//import { update } from "../controller/update";
import { insert } from "../controller/Insert";
import { Remove } from "../controller/Delete";
import { update } from "../controller/Update";
const router =express.Router();

router.get('/test' ,(req:Request,resp:Response):void =>{
  resp.json({data:"test page for crud api"});
})

router.get('/home' , (req:Request ,resp:Response):void =>{
  resp.json({
    data:"Home page"
  })
})

router.get('/about' , (req:Request ,resp:Response):void =>{
  resp.json({
    data:"About page"
  })
})


router.get('/movies' , homeDetail);
router.post('/movies' , insert);
router.put('/movie/:id' , update);
router.delete('/movie/:id' ,Remove);
export {router};