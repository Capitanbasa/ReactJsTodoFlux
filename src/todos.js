import React, { Component } from 'react';
import {Glyphicon, Label, Button} from 'react-bootstrap';

class Todos extends Component {

    removeTodo(id){
        this.props.onDelete(id);

    }
  render() {
    return (
        <ul className="list-group">
            { this.props.todos.map((todo) => 
                <li className="list-group-item" key={todo.id}>
                    <h4 className="list-group-item-headeing">
                        {todo.title}
                        <small> <Label bsStyle="info">{todo.priority}</Label></small>
                    </h4>
                    <p><Glyphicon glyph="user"></Glyphicon> {todo.responsible}</p>
                    <p>{todo.description}</p>
                    <Button bsStyle="danger" bsSize="small" onClick={this.removeTodo.bind(this, todo.id)}><Glyphicon glyph="trash"></Glyphicon> Delete</Button>
                </li>
            )}
        </ul>
    );
  }
}

export default Todos;
