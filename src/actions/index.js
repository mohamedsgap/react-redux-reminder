import {ADD_REMINDER} from '../types';

export const addReminder = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        text,
        date
    }
    return action
}