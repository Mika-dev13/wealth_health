import { lightGreen } from '@mui/material/colors'
import { createTheme } from '@mui/material'

export const wealthTheme = createTheme({
  palette: {
    primary: {
      main: lightGreen[700],
      light: lightGreen[400],
      dark: lightGreen[800],
    },
  },
  typography: {
    h4: {
      fontFamily: '"Lora", serif',
    },
  },
})
