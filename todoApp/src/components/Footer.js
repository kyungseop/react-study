import React from 'react'
import FilterLink from '../containers/FilterLink'
import {Button, Row, Col} from 'antd'


class Footer extends React.Component {

    render() {
        return (
            <Row>
                Show:{" "}
                <FilterLink filter="SHOW_ALL">All</FilterLink>
                {" | "}<FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
                {" | "}<FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </Row>
        );
    }
}

export default Footer
