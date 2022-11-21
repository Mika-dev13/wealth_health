import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

const TextInput = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="First name" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />

          <TextField
            id="date"
            label="Date of Birth"
            type="date"
            defaultValue=""
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="dateStart"
            label="Start Date"
            type="date"
            defaultValue=""
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Container>
    </div>
  )
}

export default TextInput
