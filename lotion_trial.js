let lotion = require('lotion')

let initialState = {
  highestNumberEverSeen: 0,
};

let opts = {
  initialState: initialState,
  devMode: true
}

let app = lotion(opts)

function txHandler(state, tx){
  if(tx.someNumber > state.highestNumberEverSeen) {
    state.highestNumberEverSeen = tx.someNumber
  }
}

app.use(txHandler)
app.listen(3000)