import {combineReducers} from 'redux';
import loginReducers from './loginReducer';
import noteReducers from './noteReducer';
import registerReducers from './registerReducer'

const rootReducers = combineReducers({
    note: noteReducers,
    login: loginReducers,
    register: registerReducers,
})
export default  rootReducers;