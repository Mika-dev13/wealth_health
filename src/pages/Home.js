import React, { useState, useContext } from 'react'
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
import { EmployeeContext } from '../utilities/EmployeeContext'

const employeeInfos = {
  firstName: '',
  lastName: '',
  dateOfBirth: null,
  startDate: null,
  street: '',
  city: '',
  state: null,
  zip: '',
  department: null,
}

function Home() {
  const [values, setValues] = useState(employeeInfos)
  const { createEmployee } = useContext(EmployeeContext)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValues(employeeInfos)
    createEmployee(values)
  }

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
              inputProps={{
                minLength: 2,
              }}
              required
            />
            <TextField
              required
              id="outlined-basic"
              label="Last name"
              name="lastName"
              variant="outlined"
              value={values.lastName}
              onChange={handleInputChange}
              inputProps={{
                minLength: 2,
              }}
            />

            <DatePicker
              label="Date of Birth"
              name="dateOfBith"
              openTo="year"
              minDate={dayjs().subtract(60, 'year')}
              maxDate={dayjs().subtract(18, 'year')}
              value={values.dateOfBirth}
              onChange={(newValue) => {
                setValues({
                  ...values,
                  dateOfBirth: newValue,
                })
              }}
              renderInput={(params) => <TextField {...params} required />}
            />
            <DatePicker
              label="Start Date"
              name="startDate"
              openTo="year"
              minDate={dayjs().subtract(60, 'year')}
              maxDate={dayjs()}
              value={values.startDate}
              onChange={(newValue) => {
                setValues({
                  ...values,
                  startDate: newValue,
                })
              }}
              renderInput={(params) => <TextField {...params} required />}
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
              required
              id="outlined-basic"
              label="Street"
              name="street"
              value={values.street}
              onChange={handleInputChange}
            />
            <TextField
              required
              id="outlined-basic"
              label="City"
              variant="outlined"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
            <Autocomplete
              options={states}
              value={values.state}
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
                  required
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
              required
              id="outlined-basic"
              label="Zip"
              name="zip"
              value={values.zip}
              onChange={handleInputChange}
              variant="outlined"
              type="number"
            />
          </Box>
        </Box>
        <Box padding={'0 8px'} mb={4} mt={1}>
          <Autocomplete
            options={departments}
            value={values.department}
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
                required
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
