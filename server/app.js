const _ = require('lodash');
const moment = require('moment');
//server
const express = require('express');
const bodyParser = require('body-parser');

//mongodb
const {ObjectID}  = require('mongodb');
const {mongoose,Schema} = require('./db/moongose');
const {Products} = require("./models/Product");


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/products', (req,res) => {
  if(!req.body){
    return res.status(404).send({error:'product is not found'})
  }
  const Product = new Products({
    title:req.body.title,
    origin:req.body.origin,
    assignUID:req.body.assignUID
  })
  Product.save()
  .then(product => {
    if(!product){
      return res.status(404).send({error:'product is not found'})
    }
    res.send({product})
  })
  .catch(err => res.status(400).send({err:err.message}))
})



app.get('/products', (req,res) => {
  Products
  .find()
  .then(products => {
    if(!products){
      return res.status(204).send({message:'no content'})
    }
    res.send({products})
  })
  .catch(err => res.status(400).send({error:err.message}))
})


app.get('/products/:id', (req,res) => {
  const {id} = req.params;
  if(!ObjectID.isValid(id)){
    return res.status(404).send({message:'ID not found'})
  }
  Products.findById(id)
  .then(product => {
    if(!product){
      return res.status(404).send({message:"product not found"})
    }
    res.send({product})
  })
  .catch(err => res.status(400).send({error:err.message}))
})



app.delete('/products/:id',(req,res) => {
  const {id} = req.params;
  if(!ObjectID.isValid(id)){
    return res.status(404).send({message:'ID not found'})
  }
  Products.findByIdAndRemove(id)
  .then(product => {
    if(!product){
      return res.status(404).send({message:'product not found'})
    }
    res.send({product})
  })
  .catch(err => res.status(400).send({error:err.message}))
})


app.patch('/products/:id', (req,res) => {
  const {id} = req.params;
  const body = _.pick(req.body,['origin','assignUID']);
  if(!ObjectID.isValid(id)){
    return res.status(404).send({message:'ID not found'})
  }
  Products.findByIdAndUpdate(id,{$set:body},{new:true})
  .then(product => {
    if(!product){
      return res.status(404).send({message:'prdouct not found'})
    }
    res.send({product})
  })
  .catch(err => res.status(400).send({error:err.message}))
})



app.listen(port,() => {
  console.log(`listening to port ${port}`)
})
