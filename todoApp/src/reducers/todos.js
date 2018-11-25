import undoable, {includeAction} from 'redux-undo'
import _ from 'lodash'

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                selectedDate: action.selectedDate,
                completed: false
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            );
        case REMOVE_TODO:
           let _state =  _.clone(state);
            _.remove(_state, (todo) => (todo.id === action.id));
            return _state;
        default:
            return state
    }
};


const undoableTodos = undoable(todos, {filter: includeAction([ADD_TODO, TOGGLE_TODO, REMOVE_TODO])});

export default undoableTodos
