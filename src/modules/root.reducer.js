import { combineReducers } from 'redux';
import todos from './home/home.reducer';
export default combineReducers({
    todos: todos,
});