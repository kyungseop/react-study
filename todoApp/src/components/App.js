import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
import {Calendar, Card, Row, Col, Divider} from 'antd';
import '../css/App.css';
import moment from "moment";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: moment().clone(),
            selectedValue: moment().clone(),
        };
    }

    onSelect = (value) => {
        this.setState({
            value,
            selectedValue: value,
        });
    };

    onPanelChange = (value) => {
        this.setState({value});
    };

    render() {

        let title = 'TodoList';
        let cover = (<Calendar fullscreen={false} value={this.state.value} onSelect={this.onSelect}
                               onPanelChange={this.onPanelChange}/>);

        return (
            <div>
                <div>
                    <Card cover={cover} title={title} style={{width: 600, marginLeft: 'auto', marginRight: 'auto'}}>
                        <UndoRedo/>
                        <Divider/>
                        <AddTodo/>
                        <Row>
                            <VisibleTodoList/>
                        </Row>
                        <Row>
                            <Footer/>
                        </Row>
                    </Card>
                </div>
            </div>
        );
    }

}

export default App
