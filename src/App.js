import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className="App">
        <CssBaseline />
        <Header />
        <Home />
      </div>
    </LocalizationProvider>
  )
}

export default App
