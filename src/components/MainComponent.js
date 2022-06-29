import React, { Component } from "react";
import Header from "./HeaderComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent"; 

    

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        };
        this.addStaff = this.addStaff.bind(this);
    }
    addStaff = (staff) => {
        const id = Math.floor(Math.random() * 10000 + 1);
        const newStaff = { id, ...staff };
        this.setState({
            staffs: [...this.state.staffs, newStaff]
        });
    };

    render() {
     const StaffWithId = ({ match }) => {
        return (
            <StaffDetail staff = {this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
        );
    }   
    return(
        <div>
            <Header />
                <Switch>
                    <Route path="/staff/:staffId" component={StaffWithId} />
                    <Route path="/staff" component={() => (
                    <StaffList onAdd={this.addStaff} staffs={this.state.staffs} />
                     )} />          
                    <Route path="/department" component={() => <Department dept={this.state.departments} />} />
                    <Route path="/salary" component={() => <Salary luong={this.state.staffs} />} /> 
                    <Redirect to="/staff" />
                </Switch>
            <Footer />
        </div>
    );
}
}
export default Main;