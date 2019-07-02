import React, { Component } from 'react';
import { View, Text,Picker } from 'react-native';
import { connect } from 'react-redux';

import {Button, CardSection, Input} from "./common";
import { employeeUpdate } from "../actions";



class EmployeeForm extends Component{

    render(){
        return(
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Enter name"
                        value={ this.props.name }
                        onChangeText={(value) => this.props.employeeUpdate({ prop:'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                        value={ this.props.phone }
                        onChangeText={(text) => this.props.employeeUpdate({ prop:'phone', value: text})}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }} >
                    <Text style={styles.pickerTextStyle} >Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}

                    >
                        <Picker.Item label="Monday" value="monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>

            </View>
        );
    }
}

const styles = {
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);