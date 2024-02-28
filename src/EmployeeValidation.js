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
  const name_pattern = /^[a-zA-Z\s]+$/

  if (id === '') {
    error.id = 'ID should not be empty'
  } else if (!id_pattern.test(id)) {
    error.id = 'Invalid ID format'
  } else {
    error.id = ''
  }

  if (name === '') {
    error.name = 'Name should not be empty'
  } else if (!name_pattern.test(name)) {
    error.name = 'Invalid name format'
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
  } else if (parseInt(salary) < 1 || parseInt(salary) > 99999999) {
    error.salary = 'Salary must be in the range 1 to 99999999'
  } else {
    error.salary = ''
  }

  if (dob === '') {
    error.dob = 'DOB should not be empty'
  } else {
    const dob_pattern = /^\d{4}-\d{2}-\d{2}$/ // Regular expression for valid YYYY-MM-DD format
    if (!dob_pattern.test(dob)) {
      error.dob = 'Invalid DOB format. Please use YYYY-MM-DD.'
    } else {
      const selectedDate = new Date(dob)
      selectedDate.setHours(0, 0, 0, 0) // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison

      const currentDate = new Date()
      currentDate.setHours(0, 0, 0, 0)

      // Check for future date and minimum age
      if (selectedDate > currentDate) {
        error.dob = 'Date of birth cannot be a future date.'
      } else {
        const ageInMilliseconds = currentDate.getTime() - selectedDate.getTime()
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365)

        if (ageInYears < 18 || ageInYears > 60) {
          error.dob = `Age limit: 18 to 60`
        } else {
          error.dob = '' // No errors, DOB is valid
        }
      }
    }
  }

  if (gender === '') {
    error.gender = 'Gender should not be empty'
  } else {
    error.gender = ''
  }
  return error
}
export default Validation
