import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import {Button, Card, CardSection, Confirm} from "./common";
import { employeeUpdate, employeeDelete, employeeSave } from "../actions";



class EmployeeEdit extends Component{

    state = { showModal: false };
    componentWillMount(){
        _.each(this.props.employee, ( value, prop )  => {
           this.props.employeeUpdate({ prop,value });
        });
    }
    //uid: this.props.employee.uid , here employee is coming  from ListItem, employee was the prop
    onButtonPress(){
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }
    onTextPress(){
        const { phone, shift } = this.props;
        Communications.text(phone, `Your Upcoming shift on ${shift}`);
    }
    onAccept(){
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
        this.setState({ showModal: !this.state.showModal });
    }
    onDecline(){
        this.setState({ showModal: !this.state.showModal });
    }

    render(){
        return(
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={ this.onButtonPress.bind(this) } >
                        Save changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)} >
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>{ this.setState({showModal: !this.state.showModal }) }}>
                        Fire employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={ this.state.showModal }
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are Sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}



const mapStateToProps = (state) =>{
    const { name, phone, shift } = state.employeeForm;
    return{name, phone, shift };
};


export default connect(mapStateToProps,
    {
        employeeUpdate,
        employeeSave,
        employeeDelete
    })(EmployeeEdit);