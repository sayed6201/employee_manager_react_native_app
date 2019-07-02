import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';

import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './component/LoginForm';
import Router from './Router'

class App extends Component{

    componentWillMount(){
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCf3UAp_6JXGyLYWb-mv0vo6RS0LIMxfhc",
            authDomain: "manager-c3df3.firebaseapp.com",
            databaseURL: "https://manager-c3df3.firebaseio.com",
            projectId: "manager-c3df3",
            storageBucket: "",
            messagingSenderId: "183793754969",
            appId: "1:183793754969:web:4bca40a325b03953"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render(){
        return(
            //ReduxThunk, applyMiddleware is used to make asyncronous action..
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
                <Router/>
            </Provider>
        );
    }
}

export default App;