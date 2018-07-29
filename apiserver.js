/**
 * a node server that acts as intermediate to the lotion server.
 * it provides better, more developer-friendly api
 */

const express = require('express');

const requestLib = require('request');

const app = express()
const port = 8000

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/helloexpress', (request, response) => {
  response.send('Hello from Express!')
});

app.all('/addData', (request, response) => {
  let type = request.param('type');
  let confidence = request.param('confidence');
  console.log("type: ", type);
  console.log("confidence: ", confidence);

  var options = {
    uri: 'http://localhost:3000/txs',
    method: 'POST',
    json: {
      "type": type,
      "confidence": confidence,
    }
  };

  requestLib(options, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
    console.log("body: ", body);

    response.send(body);
  })
})

app.get('/latest', (request, response) => {
  // call lotion node
  requestLib('http://localhost:3000/state', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
    console.log(typeof body);
    console.log("body: ", body);
    
    response.send(body.latest);
  });
  
});

app.get('/history', (request, response) => {
  // call lotion node
  requestLib('http://localhost:3000/state', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
    console.log(typeof body);
    console.log("body: ", body);
    
    response.send(body.history);
  });
  
});

app.get('/state', (request, response) => {
  // call lotion node
  requestLib('http://localhost:3000/state', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
    console.log(typeof body);
    console.log("body: ", body);
    
    response.send(body);
  });
  
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});