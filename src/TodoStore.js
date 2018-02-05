import { EventEmitter } from 'events';
import dispatcher from './dispatcher';
import uuid from 'uuid';
class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
            {
                id : uuid.v4(),
                title : 'Monday todo',
                responsible : 'hercival',
                description : 'Description for monday todo content goes here',
                priority : 'low'
            },
            {
              id : uuid.v4(),
              title : 'Tuesday todo',
              responsible : 'hercival',
              description : 'Description for Tuesday todo take out garbage that pickup by trash collector',
              priority : 'high'
            },
            {
              id : uuid.v4(),
              title : 'Wednesday todo',
              responsible : 'lee',
              description : 'Description for Wednesday todo are normal days',
              priority : 'medium'
            },
            {
              id : uuid.v4(),
              title : 'Thursday todo',
              responsible : 'Hyundai',
              description : 'Description for Thursday todo are normal days',
              priority : 'high'
            },
        ];
    }
    getAll(){
        return this.todos;
    }
    createTodo(newTodo){
        this.todos.push(newTodo);
        this.emit('change');
    }
    deleteTodo(todoid){
        let todos = this.todos;
        let index = todos.findIndex(x => x.id === todoid);
        todos.splice(index, 1);
        this.emit('change');
    }
    handleAction(action){
        switch(action.type){
            case 'ADD_TODO' : this.createTodo(action.newdata); break;
            case 'DELETE_TODO' : this.deleteTodo(action.id); break;
            default : ;
        }
    }
}
const todoStore = new TodoStore();
dispatcher.register(todoStore.handleAction.bind(todoStore));
export default todoStore;