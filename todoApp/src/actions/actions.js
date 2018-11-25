let nextTodoId = 0;

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: todo.text,
    selectedDate: todo.selectedDate,
    createdDateTime: todo.createdDateTime
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});


export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
});

export const selectDate = (date) => ({
    type: 'SELECT_DATE',
    date
});

