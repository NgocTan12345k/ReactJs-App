import React, { useState } from "react";
import Header from "./HeaderComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Footer from "./FooterComponent";
import { Switch, Route } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";

function Main() {
  const [nhanvien] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS,
  });

  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        nv={
          nhanvien.staffs.filter(
            (item) => item.id === parseInt(match.params.nhanvienId, 10)
          )[0]
        }
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/nhanvien"
          component={() => <StaffList staffs={nhanvien.staffs} />}
        />
        <Route path="/nhanvien/:nhanvienId" component={StaffWithId} />
        <Route
          path="/phongban"
          component={() => <Department dept={nhanvien.departments} />}
        />
        <Route
          path="/bangluong"
          component={() => <Salary luong={nhanvien.staffs} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
