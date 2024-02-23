import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

const EmployeeTable = () => {
  const [employee, setEmployee] = useState([])
  

  useEffect(() => {
    getStudent()
  }, [])

  const getStudent = () => {
    axios
      .get('/getemployee')
      .then((response) => {
        console.log(response.data)
        setEmployee(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleDelete = (id) => {
    axios
      .delete(`/deletestudent/${id}`)
      .then(() => {
        console.log('Employee deleted successfully')
        setEmployee(employee.filter((item) => item.id !== id))
      })
      .catch((err) => console.error(err))
  }
  return (
    <div className="student">
      <h1>EMPLOYEE DETAILS</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DEPARTMENT</th>
              <th>DOB</th>
              <th>GENDER</th>
              <th>DESIGNATION</th>
              <th>SALARY</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((val, key) => {
              const formattedDate = moment(val.dob).format('YYYY-MM-DD')
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.department}</td>
                  <td>{formattedDate}</td>
                  <td>{val.gender}</td>
                  <td>{val.designation}</td>
                  <td>{val.salary}</td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(val.id)}
                      className="delbtn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/">
          <button className="tablebtn">Register</button>
        </Link>
      </div>
    </div>
  )
}

export default EmployeeTable
