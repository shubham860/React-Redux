const initialstate = {
  numofcakes : 10
}

const reducer = (state = initialstate,action) => {
  switch(action.type) {
    case 'BUY_CAKE' : return {
      ...state,
      numofcakes : state.numofcakes - 1
    }
    default : return state
  }

}

export default reducer;
