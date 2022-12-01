import { useState, createContext } from 'react'

export const EmployeeContext = createContext()

export const EmployeeProvider = ({ children }) => {
  const initialState = [
    {
      firstName: 'Melvin',
      lastName: 'Stark',
      startDate: '12/12/2020',
      department: 'Marketing',
      dateOfBirth: '12/01/1980',
      street: 'les peupliers',
      city: 'Marseille',
      state: 'BDR',
      zip: '13000',
    },
  ]

  const [employee, setEmployee] = useState(initialState)

  const createEmployee = (newEmployee) => {
    newEmployee.dateOfBirth = newEmployee.dateOfBirth.format('DD/MM/YYYY')
    newEmployee.startDate = newEmployee.startDate.format('DD/MM/YYYY')
    newEmployee.state = newEmployee.state.name
    newEmployee.department = newEmployee.department.department

    setEmployee([...employee, newEmployee])
    console.log(employee, newEmployee)
  }

  // const value = useMemo(
  //   () => ({ employee, setEmployee }),
  //   [employee, setEmployee]
  // )

  const value = { employee, createEmployee }

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  )
}
