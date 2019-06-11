const initialState = {
    first_name: ' ',
    messages: ' ',
    date: ''
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'
const UPDATE_MSG = 'UPDATE_MSG'

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER
    }
}

export function updateMessage(messageObj){
    return {
        type: UPDATE_MSG,
        payload: messageObj
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
            const { first_name } = action.payload
            return { ...state, first_name }
        case CLEAR_USER:
            return { ...initialState }
        case UPDATE_MSG:
            const { body_msg, date } = action.payload
            return { ...state, messages: body_msg, date }
        default:
            return state
    }
}

export default reducer;