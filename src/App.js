import './app.css'
import { useState, useMemo } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import 'dayjs/locale/fr'
import CssBaseline from '@mui/material/CssBaseline'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import BasicTable from './pages/Table'
import { EmployeeContext } from './utilities/EmployeeContext'

const locale = 'fr'

function App() {
  const initialState = {
    id: 3,
    firstName: 'Melvin',
    lastName: 'Stark',
    startDate: '12/12/2020',
    department: 'Marketing',
    dateOfBirth: '12/01/1980',
    street: 'les peupliers',
    city: 'Marseille',
    state: 'BDR',
    zip: '13000',
  }
  const [employee, setEmployee] = useState(initialState)

  const value = useMemo(
    () => ({ employee, setEmployee }),
    [employee, setEmployee]
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <div className="App">
        <CssBaseline />
        <Header />
        <EmployeeContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table" element={<BasicTable />} />
          </Routes>
        </EmployeeContext.Provider>
      </div>
    </LocalizationProvider>
  )
}

export default App
