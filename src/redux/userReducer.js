const initialState = {
    first_name: ' ',
    last_name: ' ',
    phone: ' ',
    email: ' ',
    password: ' ',
    messages: ' ',
    date: ' ',
    avatar: ' ',
    image: ' ',
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'
const UPDATE_MSG = 'UPDATE_MSG'
const UPDATE_GALLERY = "UPDATE_GALLERY"

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

export function updateGallery(image){
    return {
        type: UPDATE_GALLERY,
        payload: image
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
            const { first_name, last_name, phone, email, password, avatar } = action.payload
            return { ...state, first_name, last_name, phone, email, password: password, avatar }
        case CLEAR_USER:
            return { ...initialState }
        case UPDATE_MSG:
            const { body_msg, date } = action.payload
            return { ...state, messages: body_msg, date }
        case UPDATE_GALLERY:
            const { image } = action.payload
            return { ...state, image: image }
        default:
            return state
    }
}

export default reducer;