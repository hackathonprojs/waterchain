let lotion = require('lotion')

let initialState = {
  last: null,
  latest: {
    type: undefined, // string
    confidence: -1, // number
    timestamp: 0, // epoch time (not necessarily reliable, have to check against block height)
    blockHeight: 0, // use this as the time
  },
  history: [
    
  ],
   
};

let opts = {
  initialState: initialState,
  devMode: true
}

let app = lotion(opts)

function txHandler(state, tx, chainInfo){
  if (tx.type && tx.confidence) {
    let blockHeight = chainInfo.height;
    let tuple = {
      type: tx.type,
      confidence: tx.confidence,
      timestamp: new Date().getTime(),
      blockHeight: blockHeight,
    }

    state.latest = tuple;

    state.history.push(tuple);
  }
  
}

app.use(txHandler);
app.listen(3000);