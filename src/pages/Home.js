import React from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Autocomplete,
} from '@mui/material'
import states from '../data/states'

console.log(states)

function Home() {
  return (
    <Container maxWidth="md" sx={{ bgcolor: '#f1f1f1' }}>
      <Typography align="center" variant="h3" component="h2">
        Create Employee
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <TextField id="outlined-basic" label="First name" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <TextField id="outlined-basic" label="Street" />
          <TextField id="outlined-basic" label="City" variant="outlined" />
          <Autocomplete
            sx={{ width: 300 }}
            options={states}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.name} ({option.abbreviation})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a states"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
          <TextField
            id="outlined-basic"
            label="Zip"
            variant="outlined"
            type="number"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Home
