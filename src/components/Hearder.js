import React from 'react'
import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

const Hearder = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: 1200,
          mx: 'auto',
          my: 5,
        }}
      >
        <Box
          sx={{
            textTransform: 'capitalize',
          }}
        >
          <Typography component="h1" variant="h4">
            Wealth Health
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link href="#" underline="hover" mr={2}>
            View current employees
          </Link>
          <TrendingFlatIcon />
        </Box>
      </Box>
    </div>
  )
}

export default Hearder
