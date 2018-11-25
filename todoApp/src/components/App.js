import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TodosCalendar from '../containers/TodosCalendar'
import '../css/App.css';
import {Card} from "antd";


class App extends React.Component {

    render() {
        let title = 'TodoList';
        return (
            <div>
                <Card title={title}>
                    <div>
                        <div style={{float: 'left', width: '70%'}}>
                            <TodosCalendar/>
                        </div>
                        <div style={{float: 'right', width: '30%'}}>
                            <Card>
                                <AddTodo/>
                                <VisibleTodoList/>
                                <Footer/>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default App
