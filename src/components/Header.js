import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, AppBar, Toolbar } from '@mui/material'

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, backgroundColor: '#FFF' }}>
        <AppBar position="static" sx={{ p: 4 }}>
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
              <Link className="link" to="/">
                <Typography mr={5} sx={{ letterSpacing: 1.1, fontSize: 18 }}>
                  Home
                </Typography>
              </Link>
              <Link className="link" to="/table">
                <Typography mr={2} sx={{ letterSpacing: 1.1, fontSize: 18 }}>
                  View current employees
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
