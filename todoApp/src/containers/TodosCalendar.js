import React from 'react'
import moment from "moment";
import {Calendar} from "antd";
import {selectDate} from "../actions/actions";
import connect from "react-redux/es/connect/connect";

class TodosCalendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: moment().clone(),
            selectedDate: moment().clone().format('YYYYMMDD')
        };
        this.dateCellRender = this.dateCellRender.bind(this);
    }


    componentDidMount() {
        console.log('[TodosCalendar.js] componentDidMount ', this.state.selectedDate);
        this.props.selectDate(this.state.selectedDate);
    }

    onSelect = (value) => {
        let selectedDate = moment(value).format('YYYYMMDD');
        this.setState({
            selectedValue: value,
            selectedDate: selectedDate
        });

        console.log('[TodosCalendar.js] onSelect', selectedDate);
        this.props.selectDate(selectedDate);
    };

    onPanelChange = (value) => {
        console.log('[app.js] onPanelChange : ', value);
        this.setState({value});
    };

    dateCellRender(value) {
        const listData = this.getListData(value);
        return (
            <ul className="events">
                {
                    listData.map(item => (
                        <li key={item.id}>
                            <label style={{
                                textDecoration: item.completed ? 'line-through' : 'none'
                            }}>{item.text}</label>
                        </li>
                    ))
                }
            </ul>
        );
    }

    getListData = (value) => {
        let cellDate = moment(value).format('YYYYMMDD');
        return this.props.todos.filter(todo => todo.selectedDate === cellDate) || [];
    };

    render() {
        return (
            <div>
                <Calendar value={this.state.selectedValue}
                          dateCellRender={this.dateCellRender}
                          onSelect={this.onSelect}
                          onPanelChange={this.onPanelChange}/>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    selectedDate: selectDate(state.selectedValue),
    todos: state.todos.present
});

const mapDispatchToProps = ({
    selectDate: selectDate
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosCalendar);

