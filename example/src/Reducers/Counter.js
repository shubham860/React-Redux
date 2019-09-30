const initialstate = {
   count : 0,
}

const Counter = (state= initialstate,action) => {
    switch(action.type){
      case 'INCREMENT' : return{
        ...state,
        count : state.count+ action.payload
      }
      case 'DECREMENT' : return {
        ...state,
        count : state.count - 1
      }

      default : return state
    }
}

export default Counter;
