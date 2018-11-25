import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions/actions'
import MoveLink from '../components/MoveLink'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(MoveLink);

export default FilterLink
