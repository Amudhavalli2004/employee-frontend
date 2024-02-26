import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

const EmployeeTable = () => {
  const [employee, setEmployee] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getStudent()
  }, [])

  const getStudent = () => {
    axios
      .get('/getemployee')
      .then((response) => {
        let filteredEmployees = response.data
        if (search) {
          filteredEmployees = filteredEmployees.filter(
            (book) =>
              employee.name.toLowerCase().includes(search.toLowerCase()) ||
              employee.department
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              employee.designation
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              employee.dob.includes(search) ||
              employee.salary === search ||
              employee.gender === search ||
              employee.id === search
          )
        }
        setEmployee(filteredEmployees)
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
      <div className="filters">
        <div className="total">
          Total Number of books:
          <span>{employee.length}</span>
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search by , Author, or Published On..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
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
