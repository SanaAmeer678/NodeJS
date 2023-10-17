console.log('Assinment_1');

var express = require('express');
const { data } = require('./data');
var app = express();


app.get('/', (req, res) => {
  console.log('Hello World')
  res.send('Hello World')
  // return 'Hello World 1'
})

app.get('/students', (req, res) => {
  console.log(data)
  res.send(data)
})

app.get('/students/search', (req, res) => {
  const { name } = req.query;

  if (name) {
    const result = data.filter(
      x => 
        x.name.toLowerCase().includes(name.toLowerCase()))
    res.send(result)
  } else {
    res.send({
      message: 'Invalid Id'
    })
  }
})
app.get('/students/:id', (req, res) => {
  const param = Number(req.params.id)
  console.log(param)

  if (param) {
    const result = data.find(x => x.id === param)
    res.send(result)
  } else {
    res.send({
      message: 'Invalid Id'
    })
  }
})

app.post('/', (req, res) => {
  console.log('Post Method is called')
  res.send('Post Method is called')
  // return 'Hello World 1'
});
app.listen(3000);