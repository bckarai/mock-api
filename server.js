const express = require('express')
var request = require('request');
const app = express()
const port = 3000

var i = 0;

app.put('/deals/v1/deal/:deal', (req, res) => {
  if (i == 0) {
    i = 1;
    res.status(500);
    res.json({ "message": 'internal error something else' })
  } else {
    i = 0;
    req.pipe(request({ qs: req.query, uri: ("https://api.hubapi.com" + req.url) })).pipe(res)
  }
})

app.all('*', (req,res) => {
    req.pipe(request({ qs: req.query, uri: ("https://api.hubapi.com" + req.url) })).pipe(res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
