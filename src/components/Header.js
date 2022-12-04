import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, AppBar, Toolbar } from '@mui/material'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ p: 4 }} color="success">
          <Toolbar component="nav">
            <Typography component="h1" variant="h4" sx={{ flexGrow: 1 }}>
              <Link className="logo-link" to="/">
                Wealth Health
              </Link>
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Link className="link" to="/table">
                <Typography mr={2}>View current employees</Typography>
                <TrendingFlatIcon />
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
