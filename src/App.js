import React , {Component} from 'react';
import { BrowserRouter  as Router , Route} from 'react-router-dom';
import Header from './components/layout/header' 
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state ={
    todo: [{
      id:uuid.v4(),
      title:'Take out the trash',
      completed:false
    },
    {
      id:uuid.v4(),
      title:'Dinner with wife',
      completed:false
    },{
      id:uuid.v4(),
      title:'Meeting boss',
      completed:false
    }

  ]
  }

  //Toggle 
  markComplete =(id) => {
    this.setState ({ todo : this.state.todo.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo ;
   
  })});
}

//Delete Todo
delTodo =(id) => {
  this.setState ({ todo: [...this.state.todo.filter(todo => todo.id !== id)] });
}
//Add Todo
addTodo =(title) =>
{
  const newTodo  = {
    id:uuid.v4(),
    title,
    completed:false
  }
  this.setState({todo : [...this.state.todo , newTodo]});
}
  render() {
   
  return (
   <Router>
      <div className="App">
      <div className ='container'>
      <Header />
      <Route exact path="/" render ={props => (
        <React.Fragment>
           <AddTodo addTodo={this.addTodo}/>
           <Todo todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo} />
        </React.Fragment>
      )} />
     <Route path="/About" component={About} />
    </div>
    </div>
   </Router>
  );
}
}

export default App;
