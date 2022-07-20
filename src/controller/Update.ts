import express , { Response,Request } from "express";
import knex from "../db/conn";

interface movie{
  mov_title: string ,
  mov_year: number,
  mov_time: string ,
  mov_genres: string ,
  mov_lang: string ,
  mov_rel_country: string ,
  dir_name: string ,
  rating: number
} 


const update = async(req:Request , resp:Response) =>{
   try {
      const id = req.params.id ;
      const movie = req.body as movie;
      console.log(id);
      console.log(req.body)
      const ans =await knex('crud_api.movie').select().where({mov_id : `${id}`});
        try {
          if(ans[0].mov_id != undefined)
          {
            knex('crud_api.movie').where({mov_id : `${id}`}).update({
              mov_title: `${movie.mov_title}` ,
              mov_year: `${movie.mov_year}` ,
              mov_time: `${movie.mov_time}` ,
              mov_genres: `${movie.mov_genres}` ,
              mov_lang: `${movie.mov_lang}` ,
              mov_rel_country: `${movie.mov_rel_country}` ,
              dir_name: `${movie.dir_name}` ,
              rating: `${movie.rating}`
            })
            .then((ans: string) =>{
              console.log(ans);
              resp.json({data:"Movie Data updated Successfully"});
            }).catch((err : string) =>{
              console.log(err);
              resp.json({data:`${err}`});
            });
          }
        } catch (error) {
          console.log(error);
          resp.status(400).json({data:"Data not found for such ID"});
          
        }
    } catch (error) {
    console.log(error);
    resp.status(404).json(error);    
  }
}

export {update};