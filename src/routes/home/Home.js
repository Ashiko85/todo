import React, { PureComponent } from 'react';


import TaskList from '../../components/TaskList';
import {connect} from 'react-redux';
import Menu from '../../components/menu';


class Home extends PureComponent {
    state = {
        taskValue: '',
        taskList: []
    };


    taskOnChange = (event) => {
        this.setState({
            taskValue: event.target.value});
    };


    render() {
        return (
            <div className="App">
            <Menu/>
                <div className="App-users">
               
                <input value={this.state.taskValue} placeholder="Add task" onChange={this.taskOnChange}/>
                 
                    <button onClick={this.props.addtolist.bind(this,this.state.taskValue)}>Add Task</button>

                    <h2 className="App-title">Task:</h2>
                    <TaskList/>
                   
                    </div>
                </div>
           
        );
    }
}

const mapStateToProps = state => {
    return {state};
};
const mapDispatchToProps = dispatch => {
    return { addtolist: (value) => dispatch({type:'ADDTOLIST' , value }),
};
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
;
