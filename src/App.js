import './app.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import 'dayjs/locale/fr'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TablePage from './pages/TablePage'
import { EmployeeProvider } from './utilities/EmployeeContext'
import { wealthTheme } from './theme/Theme.js'
const locale = 'fr'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <div className="App">
        <CssBaseline />
        <ThemeProvider theme={wealthTheme}>
          <Header />
          <EmployeeProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/table" element={<TablePage />} />
            </Routes>
          </EmployeeProvider>
        </ThemeProvider>
      </div>
    </LocalizationProvider>
  )
}

export default App
