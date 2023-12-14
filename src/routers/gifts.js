import { Router } from "express";

const routerGifts = Router();

routerGifts.get('/', (req, res)=>{
  res.json({mensaje: 'Hola desde GET'});
});

routerGifts.post('/', (req, res)=>{
  res.json({mensaje: 'Hola desde POST'});
});

routerGifts.put('/', (req, res)=>{
  res.json({mensaje: 'Hola desde PUT'});
});

routerGifts.delete('/', (req, res)=>{
  res.json({mensaje: 'Hola desde DELETE'});
});

export default routerGifts;