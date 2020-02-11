import ADD_REMINDER from '../types'
import {CLEAR_REMINDER, CLEAR_ALL_REMINDER} from '../types'
import {bake_cookie, read_cookie} from 'sfcookies'

const reminder = (state = [] , action) => {
    let reminder = []
    state = read_cookie('reminder', reminder)
    if (action.type === ADD_REMINDER){
        reminder = [...state, {text: action.text, date: action.date, id: Math.random()}]
        bake_cookie('reminder', reminder)
        return reminder
    } else if (action.type === CLEAR_REMINDER){
            reminder = state.filter(remind => remind.id !== action.id)
            bake_cookie('reminder', reminder)

            return reminder 
    }
    else if (action.type === CLEAR_ALL_REMINDER){
        reminder = []
        bake_cookie('reminder', reminder)
        return reminder 
    }  else {
        return state
    }
    
}

export default reminder