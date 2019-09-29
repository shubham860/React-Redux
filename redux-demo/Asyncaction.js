const redux = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore

const intialState = {
  loading : false,
  users : [],
  error : ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

const userrequest = () => {
  return {
    type : FETCH_USERS_REQUEST
  }
}


const userdata = users => {
  return {
    type : FETCH_USERS_SUCCESS,
    payload : users
  }
}


const usererror = error => {
  return {
    type : FETCH_USERS_ERROR,
    payload : error
  }
}

const fetchuser = () => {
    return function(dispatch){
      dispatch(userrequest())
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        const users = response.data.map(user=>user.name)
        dispatch(userdata(users))
      })
      .catch(error=>{
        dispatch(usererror(error.message))
      })
    }
 }


const reducers = (state = intialState, actions) => {
  switch(actions.type){
    case FETCH_USERS_REQUEST : return {
      ...state,
      loading : true
    }
    case FETCH_USERS_SUCCESS : return {
      ...state,
      loading : false,
      users : actions.payload,
      error : ''
    }
    case FETCH_USERS_ERROR : return {
      ...state,
      loading : false,
      users : [],
      error : actions.payload
    }
    }
  }

const store = createStore(reducers,applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchuser())
