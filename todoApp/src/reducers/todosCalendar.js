export const SELECT_DATE = 'SELECT_DATE';

const todosCalendar = (state = 'SELECT_DATE', action) => {
    console.log('[todosCalendar.js] todosCalendar', action);
    switch (action.type) {
        case SELECT_DATE:
            return action.date;
        default:
            return state
    }
};

export default todosCalendar
