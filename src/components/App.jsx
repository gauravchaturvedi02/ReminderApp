
import React, { Component } from 'react' ;
import { connect } from 'react-redux';
import { addReminder,deleteReminder } from '../actions';
class App extends Component{

    constructor(props){
        super(props);
        this.state={
          text :'',
          dueDate:''
        }
    }
    addReminder(){
        this.props.addReminder(this.state.text,this.state.dueDate)
    }
    deleteReminder(id){
          this.props.deleteReminder(id)
    }
    renderReminder(){
        const { reminders } = this.props;
        return(
            <ul className ="list-group col-sm-8">
            {
                reminders.map(reminder =>{
                    return(
                        <li key ={reminder.id} className="list-group-item">
                        <div className="list-item">
                        <div>{reminder.text}</div>
                        <div>{reminder.dueDate}</div>
                        </div>
                        <div className="list-item delete-button"
                        onClick ={()=>this.deleteReminder(reminder.id)}>
                        &#x2715;
                        </div>
                            </li>
                    )
                })
            }
            </ul>
        )
    }
    render(){
        
        return(
            <div className ="App">
            <div className ="title"> Reminder Pro </div>
            <div className ="form-inline reminder-form">
            <div className ="form-group">
            <input
            className="form-control"
            placeholder="I have to..."
            onChange = {event => this.setState({text: event.target.value})}
            />
            <input
            className="form-control"
            type = "datetime-local"
            onChange = {event => this.setState({dueDate: event.target.value})}
            />
            </div>
           
            <button
            type="button"
            className ="btn btn-success"
            onClick = {() => this.addReminder()}
            >Add Task</button>
             { this.renderReminder() }
            </div>
            </div>
        )
    }

}
 function mapStatetoProps(state){
     return{
         reminders :state
     }
 }
export default connect(mapStatetoProps,{ addReminder , deleteReminder })(App);

