import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addtodo';
import NavMenu from './navmenu';
import TodoStore from './TodoStore';
import * as TodoAction from './TodoAction';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        todos : TodoStore.getAll()
    }

  }
  deleteTodo(id){
    TodoAction.deleteTodo(id);
  }
  handleAddTodos(newTodos){;
    TodoAction.createTodo(newTodos);
  }
  
  componentWillMount(){ 
    TodoStore.on('change', () => {
      this.setState(TodoStore.getAll());
    });
  }
  render() {
    return (
      <div>
        
        <NavMenu />
        <AddTodo addTodos={this.handleAddTodos.bind(this)}/>
        <h4>Todo Count : <span className="badge">{this.state.todos.length}</span></h4>
        <div className="row">
          <Todos onDelete={this.deleteTodo.bind(this)} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
