import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Employee from './Employee'
import EmployeeTable from './EmployeeTable'
import axios from 'axios';
axios.defaults.baseURL = 'https://c516-13-48-67-35.ngrok-free.app/'
axios.defaults.headers = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "69420"
};
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Employee/>}></Route>
      <Route path="/employee" element={<EmployeeTable/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

