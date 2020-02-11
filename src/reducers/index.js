import ADD_REMINDER from '../types'
const reminder = (state = [] , action) => {
    let reminder = []
    if (action.type === ADD_REMINDER){
        reminder = [...state, {text: action.text, date: action.date, id: Math.random()}]
        return reminder
    } else {
        return state
    }
    
}

export default reminder