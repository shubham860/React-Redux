import { createStore } from  'redux'
import reducer from './cakes/CakeReducer'

const store = createStore(reducer)

export default store
