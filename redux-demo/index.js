const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
//action creater
function buycake(){
  return {
    type : BUY_CAKE,
    info : 'First redux app'
  }
}

function buyicecream(){
  return {
    type : BUY_ICECREAM,
    info : 'First redux app'
  }
}

// state

// const initialstate = {
//   numOfcakes : 10,
//   numOficecream : 20
// }

const initialcakestate = {
  numOfcakes : 10
}

const initiailcecreamstate = {
  numOfcakes : 20
}

// // reducers
//
// const reducer = (state=initialstate,action) => {
//   switch(action.type){
//     case BUY_CAKE : return {
//       ...state,
//       numOfcakes : state.numOfcakes - 1,
//     }
//
//     case BUY_ICECREAM : return {
//       ...state,
//       numOficecream : state.numOficecream - 1,
//     }
//     default : state
//   }
// }
//

const cakereducer = (state=initialcakestate,action) => {
  switch(action.type){
    case BUY_CAKE : return {
      ...state,
      numOfcakes : state.numOfcakes - 1,
    }
    default : return state
  }
}

const icecreamreducer = (state=initiailcecreamstate,action) => {
  switch(action.type){
    case BUY_ICECREAM : return {
      ...state,
      numOficecream : state.numOficecream - 1,
    }
    default : return state
  }
}

const rootReducers = combineReducers({
  cake : cakereducer,
  icecream : icecreamreducer
})

const store = createStore(rootReducers)
console.log('Initial state',store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()
