import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map((item)=><div>item</div>)}
                <button onClick={()=>this.props.addTodo('example-todo')}>+</button>
            </div>
        );
    }
}
export default Home;