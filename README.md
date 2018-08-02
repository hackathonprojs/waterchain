# waterchain
water quality detection and records on blockchain

## to run the lotion node

> node app.js

sample call:

> curl -X POST http://localhost:3000/txs -d '{"type": "type1", "confidence": 0.11}'


## to run the api server

add a data point:
http://localhost:8000/addData?type=type4&confidence=23.423156

to get latest: 
http://localhost:8000/latest

to get history: 
http://localhost:8000/history

to get entire state:
http://localhost:8000/state

presentation at goo.gl/Xw32za






