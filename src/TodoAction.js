import dispatcher from './dispatcher';

export function createTodo(newtodo){
    dispatcher.dispatch( { type : 'ADD_TODO', newdata : newtodo });
}

export function deleteTodo(id){
    dispatcher.dispatch( { 
        type : 'DELETE_TODO',
        id : id
    });
}