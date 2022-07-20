import { Response,Request } from "express";
import knex from "../db/conn";

interface id {
  id: number;

}
const Remove = async (req:Request ,resp:Response) =>{
  try {
    const id = req.params.id ;
    console.log(id);
    knex('crud_api.movie').where('mov_id' ,`${id}`).del().then((res:string) =>{
      console.log(res);
      if(parseInt(res) === 0)
      resp.status(400).json({data:"Movie Not found"});
      else
      resp.json({data:"Movie Was Removed"});
    })
  } catch (error) {
    resp.status(404).json({data:"Error while deleting the movie"});
  }
}

export {Remove};