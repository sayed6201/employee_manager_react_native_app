import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';

import {Button, Card, CardSection, Input} from "./common";
import { employeeUpdate, employeeCreate } from "../actions";



class EmployeeCreate extends Component{
    onButtonPress(){
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift:shift || "monday" });
    }
    render(){
        return(
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={ this.onButtonPress.bind(this) } >
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) =>{
    const { name, phone, shift } = state.employeeForm;
    return{name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);