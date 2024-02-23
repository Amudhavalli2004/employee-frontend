function Validation({
  id,
  name,
  department,
  dob,
  gender,
  designation,
  salary,
}) {
  let error = {}

  const id_pattern = /^\d+$/
  const salary_pattern = /^\d+$/
  const dob_pattern = /^\d{4}-\d{2}-\d{2}$/

  if (id === '') {
    error.id = 'ID should not be empty'
  } else if (!id_pattern.test(id)) {
    error.id = 'Invalid ID format'
  } else {
    error.id = ''
  }

  if (name === '') {
    error.name = 'Name should not be empty'
  } else if (name.length > 30) {
    error.name = 'Name should not exceed 30 characters'
  } else {
    error.name = ''
  }

  if (department === '') {
    error.department = 'Department should not be empty'
  } else {
    error.department = ''
  }

  if (designation === '') {
    error.designation = 'Designation should not be empty'
  } else {
    error.designation = ''
  }

  if (salary === '') {
    error.salary = 'Salary should not be empty'
  } else if (!salary_pattern.test(salary)) {
    error.salary = 'Invalid salary format'
  } else if (
    parseInt(salary) < 1 ||
    parseInt(salary) > 99999999
  ) {
    error.salary = 'Salary must be in the range 1 to 99999999'
  } else {
    error.salary = ''
  }

  if (dob === '') {
    error.dob = 'DOB should not be empty'
  } else if (!dob_pattern.test(dob)) {
    error.dob = 'Invalid DOB format'
  }else {
  const selectedDate = new Date(dob);
  const currentDate = new Date();
  if (selectedDate > currentDate) {
    error.dob = 'DOB should not be a future date';
  } else {
    error.dob = '';
  }

  if (gender === '') {
    error.gender = 'Gender should not be empty'
  } else {
    error.gender = ''
  }
  return error
}
export default Validation
