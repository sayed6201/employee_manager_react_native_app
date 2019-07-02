import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { CardSection } from './common';
import { Actions } from "react-native-router-flux";

class ListItem extends Component{

	onRowPress(){
		//passing object to next component
		Actions.employeeEdit({ employee: this.props.employee });
	}

	render(){
        const { name } = this.props.employee;

		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} >
				<View>
					<CardSection style={ styles.cardSectionStyle }>
						<Text style={styles.titleStyle} > { name } </Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
			);
	}

}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
        color: 'white'

	},
    cardSectionStyle: {
	    borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#808080'
    }
}

export default ListItem;