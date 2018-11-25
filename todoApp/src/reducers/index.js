import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import todosCalendar from "./todosCalendar";

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    todosCalendar
});

export default todoApp;