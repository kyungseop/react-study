import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {Icon, Input, Form} from 'antd';

const FormItem = Form.Item;

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
    }

    onChangeTodo = (e) => {
        this.setState({todo: e.target.value});
    };

    emitEmpty = () => {
        this.setState({todo: ''});
    };

    render() {
        const {todo} = this.state;
        const suffix = todo ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;

        return (
            <div>
                <Form onSubmit={e => {
                    e.preventDefault();
                    if (!this.state.todo.trim()) {
                        return
                    }
                    this.props.dispatch(addTodo(this.state.todo))
                    this.emitEmpty();
                }}>
                    <FormItem>
                        <Input
                            style={{width: '40%'}}
                            suffix={suffix}
                            value={todo}
                            placeholder="할일을 적어 주세요."
                            onChange={this.onChangeTodo}>
                        </Input>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default connect()(AddTodo)
