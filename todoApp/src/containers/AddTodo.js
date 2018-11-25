import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/actions'
import {Alert, Form, Icon, Input} from 'antd';
import moment from 'moment'

const FormItem = Form.Item;

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: {
                text: '',
                selectedDate: '',
                createdDateTime: ''
            }
        };
    }

    onChangeTodo = (e) => {

        this.setState(
            {
                todo: {
                    text: e.target.value,
                    selectedDate: this.props.selectedDate,
                    createdDateTime: moment().format()
                }
            });
    };

    getInitTodo = () => {
        return {todo: {text: '', selectedDate: '', createdDateTime: ''}};
    };

    emitEmpty = () => {
        this.setState(this.getInitTodo);
    };

    render() {
        const {todo} = this.state;
        const suffix = todo ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;

        return (
            <div>
                <Alert message={`선택일: ${this.props.selectedDate}`}/>
                <Form onSubmit={e => {
                    e.preventDefault();
                    if (!todo.text.trim()) {
                        return
                    }
                    console.log('[AddTodo.js] before addTodo : ', todo);
                    this.props.dispatch(addTodo(todo));
                    this.emitEmpty();
                }}>
                    <FormItem>
                        <Input
                            suffix={suffix}
                            value={todo.text}
                            placeholder="할일을 적어 주세요."
                            onChange={this.onChangeTodo}>
                        </Input>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedDate: state.todosCalendar
});

export default connect(mapStateToProps)(AddTodo)
