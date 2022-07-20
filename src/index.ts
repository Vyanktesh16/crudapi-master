import express from 'express';
import { router } from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors'
import swaggerUi from "swagger-ui-express"
import * as swaggerDocument from "./swagger.json"
import {v4 as uuid} from "uuid"
const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.text());
app.use('/',router);

var corsOptions = {
  origin: true,
  SupportsCredentials: true,
};
app.use(cors(corsOptions));

app.listen("8000", ():void => {
  app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
  console.log("server is running on port 8000");
});