import './App.css'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Validation from './EmployeeValidation'

function Employee() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState(0)
  const [errors, setErrors] = useState({})
  const [employee, setEmployee] = useState([])
  const [table, setTable] = useState(false)

  const addEmployee = (e) => {
    e.preventDefault()
    setErrors(
      Validation({ id, name, department, dob, gender, designation, salary })
    )
    if (
      errors.id === '' &&
      errors.name === '' &&
      errors.department === '' &&
      errors.dob === '' &&
      errors.gender === '' &&
      errors.designation === '' &&
      errors.salary === ''
    )
      try {
        axios
          .post('/createemployee', {
            id: id,
            name: name,
            department: department,
            dob: dob,
            gender: gender,

            designation: designation,
            salary: salary,
          })
          .then(() => {
            console.log('success')
          })
        setEmployee([
          {
            id: id,
            name: name,
            department: department,
            dob: dob,
            gender: gender,
            designation: designation,
            salary: salary,
          },
        ])
        setErrors({})
        setTable(true)
        setId('')
        setName('')
        setDepartment('')
        setDob('')
        setGender('')
        setDesignation('')
        setSalary('')
      } catch (err) {
        console.log(err)
      }
  }

  return (
    <div className="App">
      <h1 className="heading">Employee Registration</h1>
      <div className="flex">
        <div className="container">
          <div className="form">
            <div>
              <label>ID</label>
              <input
                onChange={(e) => {
                  setId(e.target.value)
                }}
                type="number"
                className="id"
                value={id}
              />
              {errors.id && <span className="text-danger">{errors.id}</span>}
              <br></br>

              <label>Name</label>
              <input
                onChange={(e) => {
                  setName(e.target.value)
                }}
                type="text"
                className="name"
                value={name}
              />
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
              <br></br>
              <label>Department</label>
              <select
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
              >
                <option value="">Select</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Design">Design</option>
                <option value="Production">Production</option>
                <option value="Customer Relations">Customer Relations</option>
              </select>
              {errors.department && (
                <span className="text-danger">{errors.department}</span>
              )}
              <br></br>
              <label>Date of Birth</label>
              <input
                type="date"
                onChange={(e) => {
                  setDob(e.target.value)
                }}
                className="age"
                value={dob}
              />
              {errors.dob && <span className="text-danger">{errors.dob}</span>}
              <br></br>
              <label>Gender</label>
              <select
                onChange={(e) => {
                  setGender(e.target.value)
                }}
                value={gender}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <span className="text-danger">{errors.gender}</span>
              )}
              <br></br>
              <label>Designation</label>
              <select
                onChange={(e) => {
                  setDesignation(e.target.value)
                }}
                className="wage"
                value={designation}
              >
                <option value="">Select</option>
                <option>Manager</option>
                <option>Project Lead</option>
                <option>Team Member</option>
                <option>Intern</option>
              </select>
              {errors.designation && (
                <span className="text-danger">{errors.designation}</span>
              )}
              <br></br>
              <label>Salary</label>
              <input
                type="number"
                onChange={(e) => setSalary(e.target.value)}
              />
              {errors.salary && (
                <span className="text-danger">{errors.salary}</span>
              )}
            </div>
          </div>
          <button onClick={addEmployee}>ADD EMPLOYEE</button>
          <Link to="/employee">
            <button>Show all employees</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Employee
