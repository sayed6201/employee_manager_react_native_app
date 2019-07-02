import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "../actions/Types";

const INITIAL_STATE = {
    email: 'test@example.com',
    password:'password',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    //displays actions,,,,
    console.log(action);

    switch(action.type){
        case EMAIL_CHANGED:
           return {...state, email: action.payload };

        case PASSWORD_CHANGED:
            return {...state, password: action.payload };

        case LOGIN_USER:
            return{...state, loading: true, error: ''};

            /*
            when login is successful user model can be get from
            state.auth.user...
             */
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};

        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed', password: '', email:'', loading: false};

        default:
            return state;
    }
};