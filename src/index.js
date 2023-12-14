import 'dotenv/config'; //if you wanna use variables from .env
import express from 'express';
import './database.js'; // importing database config
import  routerGifts from './routers/gifts.js' //importing router

const app = express();
const PORT = process.env.PORT;

app.use('/gifts/', routerGifts);


app.get('/', (req, res)=>{
  res.json({
    name: "Brian",
    age: 29,
    nationality: "Colombian"
  })
})


app.listen(PORT, ()=>{
  console.log(`Listening from port: ${PORT}`)
});

