import ADD_REMINDER from '../types';
import {CLEAR_REMINDER, CLEAR_ALL_REMINDER } from '../types';

export const addReminder = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        text,
        date
    }
    return action
}

export const clearReminder = (id) => {
    const action = {
        type: CLEAR_REMINDER,
        id
    }
    return action
}

export const clearAllReminder = () => {
    const action = {
        type: CLEAR_ALL_REMINDER
    }
    return action
}