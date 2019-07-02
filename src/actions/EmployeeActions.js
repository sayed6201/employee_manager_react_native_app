import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETE_SUCCESS,
} from './Types'
import firebase from 'firebase';
import { Actions } from "react-native-router-flux";

//it will update the form fields as we type...
export const employeeUpdate = ({ prop, value }) =>{
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};

//it will craete employee
export const employeeCreate = ({ name, phone, shift }) =>{
    const { currentUser } = firebase.auth();
    console.log(name, currentUser, phone);

//.then(() => Actions.employeeList({ type: 'reset' );
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop();
            });
    };
};

//fetching employee Data............
export const employeesFetch = () =>{
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot =>{
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

//employee updating data................
export const employeeSave = ({ name, phone, shift, uid  })=>{
    const { currentUser } =  firebase.auth();

    return (dispatch) =>{
      firebase.database()
          .ref(`/users/${currentUser.uid}/employees/${uid}`)
          .set({ name, phone, shift })
          .then(() => {
              dispatch({type: EMPLOYEE_SAVE_SUCCESS});
              Actions.employeeList();
          });
    };
};


export const employeeDelete = ( { uid } ) =>{
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database()
            .ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(()=>{
                dispatch({type: EMPLOYEE_DELETE_SUCCESS});
                Actions.employeeList();
            });
    }
};