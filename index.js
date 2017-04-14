'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const time = require('./time')
const app = express()

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`Hi, ${time.greet}`)
})

app.listen(app.get('port'), () => {
  console.log(`running on ${app.get('port')}`);
})
