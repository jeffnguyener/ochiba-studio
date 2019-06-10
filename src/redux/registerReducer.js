const initalState = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: ''
}

const REGISTER_USER = 'REGISTER_USER'

export function registerUser(user){
    return {
        type: REGISTER_USER,
        payload: user
    }
}

export default function regReducer(state = initialState, action){
    switch(action.type){
        case REGISTER_USER:
            const {first_name, last_name, phone, email, }
    }
}