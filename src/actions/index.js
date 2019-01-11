import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS,REMOVE_REMINDER } from '../constants';


export const addReminder = (text, dueDate) => {
    
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    let today = new Date();
    if(dueDate < today){
        alert("Reminder can't be set for previous dates");
        return action
    }
    console.log('action', action)
    return action;
}
export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('action', action)
    return action;
}
export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    }
}
export const removeReminder = (id,dueDate) =>{
    const action = {
        type: REMOVE_REMINDER,
        id
    }
    console.log('action', action)
    return action;
}

