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
import dayjs from 'dayjs'
import states from '../data/states'
import departments from '../data/department'

const employeeInfos = {
  firstName: '',
  lastName: '',
  dateOfBirth: null,
  startDate: null,
  street: '',
  city: '',
  state: '',
  zip: '',
  department: '',
}

function Home() {
  const [values, setValues] = useState(employeeInfos)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    console.log(values.dateOfBirth.format('DD/MM/YYYY'))
  }
  //submision
  //useContext (Recupere un valuer de state Employer (array))
  // Employer tu y ajouter un nouvelle object de donné setEmployer(...Employer, values)
  // Open Model

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '30px',
      }}
    >
      <form onSubmit={handleSubmit}>
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
            <TextField
              id="outlined-basic"
              label="First name"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-basic"
              label="Last name"
              name="lastName"
              variant="outlined"
              value={values.lastName}
              onChange={handleInputChange}
            />

            <DatePicker
              label="Date of Birth"
              name="dateOfBith"
              minDate={dayjs('01-01-1970')}
              maxDate={dayjs('12-12-2004')}
              value={values.dateOfBirth}
              onChange={(newValue) => {
                setValues({
                  ...values,
                  dateOfBirth: newValue,
                })
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="Start Date"
              name="startDate"
              value={values.startDate}
              onChange={(newValue) => {
                setValues({
                  ...values,
                  startDate: newValue,
                })
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
            <TextField
              id="outlined-basic"
              label="Street"
              name="street"
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              name="city"
              onChange={handleInputChange}
            />
            <Autocomplete
              options={states}
              onChange={(e, value) =>
                setValues({
                  ...values,
                  state: value,
                })
              }
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
                    autoComplete: 'new-password',
                  }}
                />
              )}
            />
            <TextField
              id="outlined-basic"
              label="Zip"
              name="zip"
              onChange={handleInputChange}
              variant="outlined"
              type="number"
            />
          </Box>
        </Box>
        <Box padding={'0 8px'} mb={4} mt={1}>
          <Autocomplete
            options={departments}
            onChange={(e, value) =>
              setValues({
                ...values,
                department: value,
              })
            }
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
                  autoComplete: 'new-password',
                }}
              />
            )}
          />
        </Box>
        <Box padding={'0 8px'}>
          <Button type="submit" variant="contained" size="large" fullWidth>
            Save
          </Button>
        </Box>
      </form>
    </Container>
  )
}

export default Home
