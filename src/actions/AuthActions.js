import firebase from 'firebase';
import { Actions } from "react-native-router-flux";
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "./Types";

export const emailChanged = (text)=>{
    return(
        {
            type: EMAIL_CHANGED,
            payload: text
        }
    );
};

export const passwordChanged = (text)=>{
    return(
        {
            type: PASSWORD_CHANGED,
            payload: text
        }
    );
};

//asyncronious action, need to use redux-thunk, middleWare in App.js...
export const loginUser = ({email, password}) => {
    return(dispatch) => {

        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( user => loginUserSuccess(dispatch, user))
            .catch((error)=>{
                console.log(error);

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail((dispatch)));
            });
    };
};

const loginUserFail = (dispatch) =>{
    dispatch({ type: LOGIN_USER_FAIL });
};

//helper methods
const loginUserSuccess = (dispatch, user) =>{
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

    //scene key from Router.js
    Actions.main();
};

