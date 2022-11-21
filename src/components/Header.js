import React from 'react'
import { Typography, Box, AppBar, Toolbar } from '@mui/material'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ p: 4 }}>
          <Toolbar component="nav">
            <Typography component="h1" variant="h4" sx={{ flexGrow: 1 }}>
              Wealth Health
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography mr={2}>View current employees</Typography>
              <TrendingFlatIcon />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
