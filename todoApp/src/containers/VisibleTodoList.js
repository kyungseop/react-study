import {connect} from 'react-redux'
import {toggleTodo, removeTodo} from '../actions/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter, selectedDate) => {
    console.log('[VisibleTodoList.js]  getVisibleTodos ', todos, filter, selectedDate);

    switch (filter) {
        case 'SHOW_ALL':
            return todos.filter(t => t.selectedDate === selectedDate);
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.selectedDate === selectedDate && t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => t.selectedDate === selectedDate && !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter, state.todosCalendar)
});

const mapDispatchToProps = ({
    onTodoClick: toggleTodo,
    onRemoveClick: removeTodo
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList
