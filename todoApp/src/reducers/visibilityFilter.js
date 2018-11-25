export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    console.log('[visibilityFilter.js] visibilityFilter', action);
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
};

export default visibilityFilter
