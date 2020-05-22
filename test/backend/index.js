const express = require('express')

const app = express()

app.get('/event_handler', (req, res) => {
  console.log({
    body: req.body,
    params: req.params,
    query: req.query
  });

  res.send('hello world')
})

app.get('/event_handler/auth', (req, res) => {
  console.log({
    body: req.body,
    params: req.params,
    query: req.query
  });

  res.send('auth')
})

app.listen(3333, () => {
  console.log('listen 3333');
})

// code=8c1747b0fdc81b832e01&installation_id=7583905&setup_action=install