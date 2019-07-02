import React from 'react';;
import { View } from 'react-native';


const CardSection = (props) =>{
	//u have to put props.children
	return (

		<View style={ [styles.containerStyle, props.style] } >
			{ props.children }
		</View>

		);
};

const styles= {

    containerStyle: {
        borderBottom: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }

};

//expoting , { } because of export* in common/index.js

export { CardSection };