import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETE_SUCCESS
} from "../actions/Types";

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};
//this will only update the state , form fields...........
export default (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.pay;pad === { prop: 'name', value; 'jane' }
            return { ...state,  [action.payload.prop]: action.payload.value   };

        case EMPLOYEE_CREATE:
            //action.pay;pad === { prop: 'name', value; 'jane' }
            return INITIAL_STATE;

        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;

        case EMPLOYEE_DELETE_SUCCESS:
            return INITIAL_STATE;

        default:
            return state;
    }
}