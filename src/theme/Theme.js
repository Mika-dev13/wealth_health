// import { lightGreen } from '@mui/material/colors'
import { createTheme } from '@mui/material'

export const wealthTheme = createTheme({
  palette: {
    primary: {
      main: 'hsl(72, 87%, 25%)',
      light: 'hsl(72, 87%, 35%)',
      dark: 'hsl(72, 87%, 20%)',
    },
  },
  typography: {
    h4: {
      fontFamily: '"Lora", serif',
    },
    h5: {
      fontFamily: '"Lora", serif',
    },
  },
})
