import React from 'react';
import { connect} from 'react-redux';
import * as homeActions from '../../modules/home/home.action';
import Home from './home.component';


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: todo => dispatch(homeActions.addTodo(todo))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);