import React from 'react';
import {View} from 'react-native';

const Card = (props) => {

//u have to put props.children
	return(
		<View style={styles.containerStyle}>

			{props.children}
		</View>
		);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: {width:0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 10,
		marginTop: 10
	}
}

//expoting , { } because of export* in common/index.js
export { Card };