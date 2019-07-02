import React from 'react';
import { Scene, Router, Actions } from "react-native-router-flux";

import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeEdit from './component/EmployeeEdit';

const RouterComponent = () => {
  return (
      <Router>
          <Scene key="root" hideNavBar>

              <Scene key='auth' >
                  <Scene
                      key="login"
                      component={LoginForm}
                      title="please Login"
                      initial
                  />
              </Scene>

              <Scene key="main" >
                  <Scene
                      rightTitle="Add"
                      onRight={() => Actions.employeeCreate() }
                      key="employeeList"
                      component={EmployeeList}
                      title="List of Employees"
                      initial
                  />
                  <Scene
                      title="Create Employee"
                      key="employeeCreate"
                      component={ EmployeeCreate }
                  />
                  <Scene
                      title="Edit Employee"
                      key="employeeEdit"
                      component={ EmployeeEdit }
                  />
              </Scene>

          </Scene>
      </Router>
  );
};

export default RouterComponent;