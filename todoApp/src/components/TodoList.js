import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {Button, List, Avatar} from 'antd'


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
            <List
                itemLayout='horizontal'
                footer={'총 목록 수 : ' + this.props.todos.length}
                dataSource={this.props.todos}
                renderItem={(item, index) => (
                    <List.Item actions={[<Todo {...item} onClick={() => this.props.onTodoClick(item.id)}/>,
                        <Button shape="circle" icon="close"
                                onClick={() => this.props.onRemoveClick(item.id)}/>]}>
                        <List.Item.Meta
                            avatar={<Avatar style={{backgroundColor: item.completed ? '#87d068' : ''}}
                                            icon="schedule"/>}
                            // title={index+1}
                        />
                    </List.Item>
                )}/>
        );
    }

}

export default TodoList
