
//reducers/index.js
import {combineReducers} from 'redux'
import loginReducers from './loginReducer'
import noteReducers from './noteReducer'

export default combineReducers({
    note: noteReducers,
    login: loginReducers,
})