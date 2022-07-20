import { Response,Request } from "express";
import knex from "../db/conn";

const homeDetail = async(req:Request , resp:Response) =>{
  console.log("See all users");
    try{
        knex.select().table('crud_api.movie').orderBy('mov_id').then((answer:any) =>{
            console.log(answer)
            resp.json({data:answer});
        } ).catch((err:any)=>{
            console.log(err);
            resp.json({message:"Error during fetching data"});
        });
    }catch (error) {
        console.log(error);
        resp.json({message:"Error during fetching data"});
   }
}

export {homeDetail};