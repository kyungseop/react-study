import React from 'react'
import {ActionCreators as UndoActionCreators} from 'redux-undo'
import {connect} from 'react-redux'
import {Button, Row, Icon} from 'antd'

let UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <Row>
        <Button icon='left' onClick={onUndo} disabled={!canUndo}>
            Undo
        </Button>
        <Button onClick={onRedo} disabled={!canRedo}>
            Redo <Icon type="right" />
        </Button>
    </Row>
);

const mapStateToProps = (state) => ({
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
});

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
});

UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo);

export default UndoRedo
