import {combineReducers} from 'redux';
import loginReducers from './loginReducer';
import registerReducers from './registerReducer';
import todosSlice from '../features/Todos/todosSlice';

const rootReducers = combineReducers({
    todos: todosSlice,
    login: loginReducers,
    register: registerReducers,
})
export default  rootReducers;