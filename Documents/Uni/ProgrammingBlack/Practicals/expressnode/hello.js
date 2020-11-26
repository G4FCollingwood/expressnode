var express = require('express')
var app = express()

app.get('/', function(req, resp){
   resp.send('Hello world')
})

app.get('/waves/:word',function(req,resp){
    word = (req.params.word)
    console.log('Waving at ' + word)
    resp.send('' + word)
})
app.get('/secret',function(req,resp){
    resp.send('SHHHHHH')
})

app.get('/random/:max', function(req, resp){
    max = parseInt(req.params.max)
    rand = Math.floor(Math.random()*max) +1
    console.log('Max via url is ' + max + ' rand is ' + rand)
    resp.send('' + rand)
  })

app.listen(8090)