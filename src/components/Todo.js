import React , {Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {

  return this.props.todo.map((todo) => (
    <Todoitem key ={todo.id} todo={todo} markComplete ={this.props.markComplete} delTodo={this.props.delTodo} />
  ));
}
}

Todo.propTypes ={
  todo :PropTypes.array.isRequired
}

export default Todo;
