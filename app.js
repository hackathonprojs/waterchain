let lotion = require('lotion')

let initialState = {
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
console.log(tx);
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
app.listen(3000).then(appInfo => {
  console.log(appInfo.GCI)
  // 'f6d671670ce307f71164c7e9b7c1d89c0cf5a6456ddf0a538d59bdbd33216ec5'
})
