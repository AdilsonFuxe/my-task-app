import "reflect-metadata";
import './config/env.config';
import app from "./app";


app.listen(3333, ()=>{
    console.info('server listening on port: 3333');
});