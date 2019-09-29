const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
//action creater
function buycake(){
  return {
    type : BUY_CAKE,
    info : 'First redux app'
  }
}

// state

const initialstate = {
  numOfcakes : 10,
}

// reducers

const reducer = (state=initialstate,action) => {
  switch(action.type){
    case BUY_CAKE : return {
      ...state,
      numOfcakes : state.numOfcakes - 1,
    }
    default : state
  }
}

const store = createStore(reducer)
console.log('Initial state',store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()
