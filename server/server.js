//server
const express = require('express');
const bodyParser = require('body-parser');

//mongodb
const {ObjectID}  = require('mongodb');
const {mongoose,Schema} = require('./db/moongose');
const {Todos} = require('./models/todo');
const {Users} = require('./models/user');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  const todo = new Todos({
    text:req.body.text,
    completed:req.body.completed
  })
  todo.save()
  .then(doc => res.send(doc))
  .catch(err => res.status(400).send({error:err.message}))
})


app.get('/todos',(req,res)=> {
  Todos
  .find()
  .then(todos => res.send({todos}))
  .catch(err => res.status(400).send({error:err.message}))
})


app.get('/todos/:id', (req,res) => {
    const {id} = req.params;
    if(!ObjectID.isValid(id)){
      return res.status(404).send({error:'ID is not valid'})
    }
    Todos.findById(id)
    .then(todo => {
      if(!todo){
        return res.status(404).send({error:'todo not found'})
      }
      res.send({todo})
    })
    .catch(err => res.status(400).send({error:err.message}))
})


app.delete('/todos/:id', (req,res) => {
  const {id} = req.params;
  if(!ObjectID.isValid(id)){
    return res.status(404).send({error:'ID is not valid'})
  }
  Todos.findByIdAndRemove(id)
  .then(todo => {
    if(!todo){
      return res.status(404).send({error:'todo not found'})
    }
    res.send({todo})
  })
  .catch(err => res.status(400).send({error:err.message}))

})


app.listen(port, () => {
  console.log(`starting up at port ${port}`)
})
