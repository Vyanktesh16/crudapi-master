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

const insert = async(req:Request , resp:Response) =>{
   try {
      const movie = req.body as movie;
      console.log(movie.mov_genres);
      
      knex('crud_api.movie').insert({
        mov_title: `${movie.mov_title}` ,
        mov_year: `${movie.mov_year}` ,
        mov_time: `${movie.mov_time}` ,
        mov_genres: `${movie.mov_genres}` ,
        mov_lang: `${movie.mov_lang}` ,
        mov_rel_country: `${movie.mov_rel_country}` ,
        dir_name: `${movie.dir_name}` ,
        rating: `${movie.rating}`
      }).returning("mov_id")
      .then((id:number) =>{
        console.log(id);
        resp.json({data:"Movie Detail Added Successfully"});
      }).catch((err : string) =>{
        console.log(err);
        resp.json({data:`${err}`});
      })
        
  } catch (error) {
    console.log(error);
    resp.json(error);    
  }
}

export {insert};