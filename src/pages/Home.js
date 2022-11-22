import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Autocomplete,
  Button,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import states from '../data/states'
import departments from '../data/department'

console.log(states)

function Home() {
  const [selectedBirthDate, setSelectedBirthDate] = useState(null)
  const [selectedStartDate, setSelectedStartDate] = useState(null)

  return (
    <Container
      maxWidth="sm"
      sx={{
        // bgcolor: '#f1f1f1',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '100px',
      }}
    >
      <Typography align="center" variant="h4" component="h2" mb={5} mt={3}>
        Create Employee
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '900px',
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
          <DatePicker
            label="Date of Birth"
            value={selectedBirthDate}
            onChange={(newValue) => {
              setSelectedBirthDate(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="Start Date"
            value={selectedStartDate}
            onChange={(newValue) => {
              setSelectedStartDate(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
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
      <Box padding={'0 8px'} mb={4} mt={1}>
        <Autocomplete
          options={departments}
          autoHighlight
          getOptionLabel={(option) => option.department}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.department}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a departement"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      </Box>
      <Box padding={'0 8px'}>
        <Button variant="contained" size="large" fullWidth>
          Save
        </Button>
      </Box>
    </Container>
  )
}

export default Home
