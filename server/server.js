//server
const express = require('express');
const bodyParser = require('body-parser');

//mongodb
const {mongoose,Schema} = require('./db/moongose');
const {Todos} = require('./models/todo');
const {Users} = require('./models/user');


const app = express();
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


app.listen(3000, () => {
  console.log('listening to port 3000')
})
