import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });

const knex = require("knex")({
       client: "pg",
       connection: {
         host: process.env.HOST,
         port: process.env.PORT,
         user: process.env.USERNAME,
         password: process.env.PASSWORD,
         database: process.env.DATABASE,
       },
   })
   
export default knex;