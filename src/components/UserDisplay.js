import React, { useState } from "react";
import { PillButton, ArrowButton } from "./Buttons";
import EmployeeView from "./EmployeeView";
import data from "../data";

const UserDisplay = () => {
  const [employees, setEmployees] = useState(data);
  const [employeeIndex, setEmployeeIndex] = useState(0);

  const nextPress = () => {
    if (employeeIndex === employees.length - 1) return setEmployeeIndex(0);
    return setEmployeeIndex(employeeIndex + 1);
  };

  const previousPress = () => {
    if (employeeIndex === 0) return setEmployeeIndex(employees.length - 1);
    return setEmployeeIndex(employeeIndex - 1);
  };

  const onDelete = () => {
    let updatedEmployees = employees;
    updatedEmployees.splice(employeeIndex, 1);

    console.log(updatedEmployees);
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <EmployeeView
        employee={employees[employeeIndex]}
        index={employeeIndex}
        length={employees.length}
      />
      <ArrowButton text="< Previous" onClick={() => previousPress()} />
      <PillButton text="Edit" onClick={() => {}} />
      <PillButton text="Delete" onClick={() => onDelete()} />
      <PillButton text="New" onClick={() => {}} />
      <ArrowButton text="Next >" onClick={() => nextPress()} />
    </div>
  );
};

export default UserDisplay;
