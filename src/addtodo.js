import React, { Component } from 'react';
import {FormGroup,FormControl ,ControlLabel , Button} from 'react-bootstrap';
import uuid from 'uuid';

class AddTodo extends Component {
    constructor(){
        super();
        this.state = { newProject : {} };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static defaultProps = {
        priority : ['high','low', 'medium']
    }
    handleSubmit(e){
        // this.setState({ newProject : {
        //         id : uuid.v4(),
        //         title : this.refs.title.value,
        //         responsible : this.refs.responsible.value,
        //         description : this.refs.description.value,
        //         priority : this.refs.priority.value
        //     }}, 
        //     function(){
        //         this.props.addTodos(this.state.newProject);
        // });
        this.props.addTodos({
            id : uuid.v4(),
            title : this.refs.title.value,
            responsible : this.refs.responsible.value,
            description : this.refs.description.value,
            priority : this.refs.priority.value
        });
        e.preventDefault();
    }
    render() {
        let valueOption = this.props.priority.map(item => {
            return <option key={item} value={item} >{item}</option>
        });
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <ControlLabel>Title</ControlLabel>
                    <input type="text" ref="title" placeholder="Enter Title" className="form-control"/>
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Responsible</ControlLabel>
                    <input ref="responsible" type="text"  placeholder="Enter User" className="form-control"/>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Description</ControlLabel>
                    <textarea ref="description" placeholder="Description" className="form-control"></textarea>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select priority</ControlLabel>
                    <select ref="priority" className="form-control">
                        {valueOption}
                    </select>
                </FormGroup>
                <Button type="submit" >ADD</Button>
            </form>
        );
    }
}

export default AddTodo;
