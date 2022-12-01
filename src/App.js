import './app.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import 'dayjs/locale/fr'
import CssBaseline from '@mui/material/CssBaseline'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import BasicTable from './pages/Table'
import { EmployeeProvider } from './utilities/EmployeeContext'

const locale = 'fr'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <div className="App">
        <CssBaseline />
        <Header />
        <EmployeeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table" element={<BasicTable />} />
          </Routes>
        </EmployeeProvider>
      </div>
    </LocalizationProvider>
  )
}

export default App
