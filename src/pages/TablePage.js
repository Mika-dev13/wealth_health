import React from 'react'
import { Container } from '@mui/material'
import EmployeeTable from '../components/EmployeeTable.js'

export default function TablePage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: '80px',
        height: '100vh',
      }}
    >
      <EmployeeTable />
    </Container>
  )
}
