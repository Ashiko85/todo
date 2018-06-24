import React, { Component, Fragment } from 'react';

import TaskList from '../components/TaskList';
import Menu from '../components/menu';

class Tasks extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <h2 className="App-title">Task:</h2>
                    <TaskList/>
                   
            </Fragment>
        );
    }
}

export default Tasks;