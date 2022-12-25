import { useState, createContext } from 'react'

export const EmployeeContext = createContext()

export const EmployeeProvider = ({ children }) => {
  const initialState = [
    {
      firstName: 'Melvin',
      lastName: 'Simon',
      startDate: '12/12/2020',
      department: 'Legal',
      dateOfBirth: '12/01/1970',
      street: 'les peupliers',
      city: 'Paris',
      state: 'Ile de France',
      zip: '75000',
    },
    {
      firstName: 'Mac',
      lastName: 'Mc Gregor',
      startDate: '12/12/2020',
      department: 'Sales',
      dateOfBirth: '12/01/1985',
      street: 'les peupliers',
      city: 'Marseille',
      state: 'BDR',
      zip: '13000',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      startDate: '12/12/2020',
      department: 'Marketing',
      dateOfBirth: '12/01/1972',
      street: 'les peupliers',
      city: 'Lyon',
      state: 'Rhône',
      zip: '69000',
    },
    {
      firstName: 'Melvin',
      lastName: 'Stark',
      startDate: '12/12/2020',
      department: 'Legal',
      dateOfBirth: '12/01/1983',
      street: 'les peupliers',
      city: 'Paris',
      state: 'Ile de France',
      zip: '75000',
    },
    {
      firstName: 'Mac',
      lastName: 'Clark',
      startDate: '12/12/2020',
      department: 'Sales',
      dateOfBirth: '12/01/1987',
      street: 'les peupliers',
      city: 'Marseille',
      state: 'BDR',
      zip: '13000',
    },
    {
      firstName: 'John',
      lastName: 'Davis',
      startDate: '12/12/2020',
      department: 'Marketing',
      dateOfBirth: '12/01/1978',
      street: 'les peupliers',
      city: 'Lyon',
      state: 'Rhône',
      zip: '69000',
    },
  ]

  const [employee, setEmployee] = useState(initialState)

  /**
   * format the data to the right format
   * @param {Object} newEmployee
   */
  const createEmployee = (newEmployee) => {
    newEmployee.dateOfBirth = newEmployee.dateOfBirth.format('DD/MM/YYYY')
    newEmployee.startDate = newEmployee.startDate.format('DD/MM/YYYY')
    newEmployee.state = newEmployee.state.name
    newEmployee.department = newEmployee.department.department

    setEmployee([...employee, newEmployee])
  }

  const value = { employee, createEmployee }

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  )
}
