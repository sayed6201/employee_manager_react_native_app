
//import library to help create a component
import React from 'react'
import { Text, View } from 'react-native'


//create a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle} >{props.headerText}</Text>
		</View>
		);
	
};

const styles = {
	viewStyle:{
		backgroundColor:'#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 70,
		shadowOffset: { width: 0, height: 3 },
		shadowColor: 'black',
	    shadowOpacity: 1,
	    elevation: 3,
	    position: 'relative'
	},
	textStyle: {
		fontSize: 20,
		
	}
};

//Make the component available to other parts of the app
export { Header };
//expoting , { } because of export* in common/index.js
