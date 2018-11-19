import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {Button, Row, Col} from 'antd'


class TodoList extends React.Component {

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired).isRequired,
        onTodoClick: PropTypes.func.isRequired,
        onRemoveClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <div style={{height: 50}}>
                {this.props.todos.map(todo =>
                    <div key={todo.id}>
                        <Row>
                            <Col span={8}>
                                <Todo style={{}}
                                      {...todo}
                                      onClick={() => this.props.onTodoClick(todo.id)}
                                />
                            </Col>
                            <Col span={8}>
                                <Button shape="circle" icon="close"
                                        onClick={() => this.props.onRemoveClick(todo.id)}/>
                            </Col>
                        </Row>
                    </div>
                )}
            </div>
        );
    }

}

export default TodoList
