import ADD_REMINDER from '../types'
import {CLEAR_REMINDER, CLEAR_ALL_REMINDER} from '../types'
const reminder = (state = [] , action) => {
    let reminder = []
    if (action.type === ADD_REMINDER){
        reminder = [...state, {text: action.text, date: action.date, id: Math.random()}]
        return reminder
    } else if (action.type === CLEAR_REMINDER){
            reminder = state.filter(remind => remind.id !== action.id)
            return reminder 
    }
    else if (action.type === CLEAR_ALL_REMINDER){
        reminder = []
        return reminder 
    }  else {
        return state
    }
    
}

export default reminder