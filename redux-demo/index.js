const BUY_CAKE = 'BUY_CAKE'
//action creater
function buycake(){
  return {
    type : BUT_CAKE,
    info : 'First redux app'
  }
}

// state

const initialstate = {
  numofcakes : 10
}

// reducers

const reducer = (state=initialstate,action) => {
  switch(action.type){
    case BUY_CAKE : return {
      ...state,
      numofcakes = state.numofcakes - 1
    }
    default : state
  }
}
