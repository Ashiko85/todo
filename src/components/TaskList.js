import React, { PureComponent,Fragment } from 'react';


import {connect} from 'react-redux';


class TaskList extends PureComponent {
  
    renderToDoList = () => this.props.state.toDoList.map(
        (item)=>
            <div key={item}>{item}</div>

    );

    componentDidUpdate(){
        console.log(this.props)
    }
    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <Fragment>
                
                {this.renderToDoList()}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addtolist: (value) => dispatch(
            { type: 'ADDTOLIST',
                value,}
        )
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(TaskList);
