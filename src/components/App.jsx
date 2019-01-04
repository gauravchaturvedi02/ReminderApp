import React, {Component} from 'react';

class App extends Component{
    render() {
        return(
            <div className ="App">
            <div className ="title">My Tasks
            </div>
            <div className = "form-inline">
            <div className ="form-group">
            <input
            className="form-control"
            placeholder="I hve to ..."
            />
            </div>
            <button
                type = "button"
                className = "btn btn-success"
            >Add Task</button>
            </div>
            </div>
        )
    }
}