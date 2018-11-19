import React from 'react'
import PropTypes from 'prop-types'


class Todo extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <label style={{
                    fontSize: '16pt',
                    float: 'left',
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
                       onClick={this.props.onClick}>{this.props.text}</label>
            </div>
        );
    }

    s
}

export default Todo
